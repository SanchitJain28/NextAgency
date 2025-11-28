/**
 * Shopify Admin API client for accurate store feature detection
 * Requires store credentials (optional) for enhanced accuracy
 */

export interface ShopifyCredentials {
  shopDomain: string; // e.g., "mystore.myshopify.com"
  accessToken: string; // Admin API access token
}

export interface ShopifyAdminData {
  installedApps: ShopifyApp[];
  discounts: DiscountInfo;
  checkoutSettings: CheckoutSettings;
  scriptTags: ScriptTag[];
}

export interface ShopifyApp {
  id: string;
  title: string;
  category?: string;
}

export interface DiscountInfo {
  totalActiveCodes: number;
  hasAutomaticDiscounts: boolean;
  priceRules: Array<{
    id: string;
    title: string;
    valueType: string;
  }>;
}

export interface CheckoutSettings {
  hasAbandonedCheckoutEmails: boolean;
  customizations: string[];
}

export interface ScriptTag {
  id: string;
  src: string;
  event: string;
  displayScope: string;
}

/**
 * Detect features from Shopify Admin API data
 */
export function detectFeaturesFromAdminData(adminData: ShopifyAdminData): {
  upsell: boolean;
  crossSell: boolean;
  bundles: boolean;
  frequentlyBoughtTogether: boolean;
  promoCodes: boolean;
  abandonedCart: boolean;
  loyaltyProgram: boolean;
  wishlist: boolean;
  detectedApps: string[];
} {
  const features = {
    upsell: false,
    crossSell: false,
    bundles: false,
    frequentlyBoughtTogether: false,
    promoCodes: false,
    abandonedCart: false,
    loyaltyProgram: false,
    wishlist: false,
    detectedApps: [] as string[],
  };

  // Check for promo codes
  if (adminData.discounts.totalActiveCodes > 0) {
    features.promoCodes = true;
  }

  // Check for abandoned cart recovery
  if (adminData.checkoutSettings.hasAbandonedCheckoutEmails) {
    features.abandonedCart = true;
  }

  // Detect features from installed apps
  adminData.installedApps.forEach(app => {
    const appTitle = app.title.toLowerCase();
    features.detectedApps.push(app.title);

    // Upsell apps
    if (
      appTitle.includes('upsell') ||
      appTitle.includes('bold') ||
      appTitle.includes('zipify') ||
      appTitle.includes('reconvert') ||
      appTitle.includes('candy rack')
    ) {
      features.upsell = true;
    }

    // Cross-sell / Recommendations
    if (
      appTitle.includes('recommend') ||
      appTitle.includes('cross-sell') ||
      appTitle.includes('related products') ||
      appTitle.includes('personalize')
    ) {
      features.crossSell = true;
    }

    // Bundle apps
    if (
      appTitle.includes('bundle') ||
      appTitle.includes('pack') ||
      appTitle.includes('combo') ||
      appTitle.includes('simple bundles')
    ) {
      features.bundles = true;
    }

    // Frequently Bought Together
    if (
      appTitle.includes('frequently bought') ||
      appTitle.includes('fbt') ||
      appTitle.includes('bought together')
    ) {
      features.frequentlyBoughtTogether = true;
    }

    // Loyalty programs
    if (
      appTitle.includes('smile') ||
      appTitle.includes('loyalty') ||
      appTitle.includes('rewards') ||
      appTitle.includes('yotpo') ||
      appTitle.includes('loyaltylion') ||
      appTitle.includes('referral')
    ) {
      features.loyaltyProgram = true;
    }

    // Wishlist apps
    if (
      appTitle.includes('wishlist') ||
      appTitle.includes('save for later') ||
      appTitle.includes('favorites') ||
      appTitle.includes('swym')
    ) {
      features.wishlist = true;
    }

    // Abandoned cart apps (in addition to Shopify's built-in)
    if (
      appTitle.includes('abandon') ||
      appTitle.includes('cart recover') ||
      appTitle.includes('pushowl') ||
      appTitle.includes('privy')
    ) {
      features.abandonedCart = true;
    }
  });

  // Check script tags for additional detection
  adminData.scriptTags.forEach(script => {
    const scriptSrc = script.src.toLowerCase();

    if (scriptSrc.includes('smile') || scriptSrc.includes('loyalty')) {
      features.loyaltyProgram = true;
    }

    if (scriptSrc.includes('wishlist') || scriptSrc.includes('swym')) {
      features.wishlist = true;
    }

    if (scriptSrc.includes('upsell') || scriptSrc.includes('reconvert')) {
      features.upsell = true;
    }
  });

  return features;
}

/**
 * Fetch data from Shopify Admin API (GraphQL + REST)
 */
export async function fetchShopifyAdminData(
  credentials: ShopifyCredentials
): Promise<ShopifyAdminData | null> {
  try {
    const { shopDomain, accessToken } = credentials;
    const apiVersion = '2024-01';
    const baseUrl = `https://${shopDomain}/admin/api/${apiVersion}`;

    const headers = {
      'X-Shopify-Access-Token': accessToken,
      'Content-Type': 'application/json',
    };

    // Fetch ONLY proven reliable endpoints
    const [discountsRes, scriptsRes, shopRes] = await Promise.allSettled([
      // ✅ PROVEN: Get discount codes - requires read_discounts
      fetch(`${baseUrl}/price_rules.json?limit=250`, { headers }),

      // ✅ PROVEN: Get script tags to detect apps - requires read_script_tags
      fetch(`${baseUrl}/script_tags.json?limit=250`, { headers }),

      // ✅ PROVEN: Get shop info - basic access
      fetch(`${baseUrl}/shop.json`, { headers }),
    ]);

    // Parse discount data
    let discounts: DiscountInfo = {
      totalActiveCodes: 0,
      hasAutomaticDiscounts: false,
      priceRules: [],
    };

    if (discountsRes.status === 'fulfilled' && discountsRes.value.ok) {
      const discountData = await discountsRes.value.json();
      discounts.priceRules = discountData.price_rules || [];
      discounts.totalActiveCodes = discounts.priceRules.length;
      discounts.hasAutomaticDiscounts = discounts.priceRules.some(
        (rule: any) => rule.target_type === 'line_item' && rule.allocation_method === 'across'
      );
    }

    // ✅ PROVEN: Parse script tags - this DEFINITELY works
    let scriptTags: ScriptTag[] = [];
    if (scriptsRes.status === 'fulfilled' && scriptsRes.value.ok) {
      const scriptData = await scriptsRes.value.json();
      scriptTags = scriptData.script_tags || [];
    }

    // ✅ HONEST: Shop settings
    let checkoutSettings: CheckoutSettings = {
      hasAbandonedCheckoutEmails: false, // Will only be true if we detect third-party apps
      customizations: [],
    };

    if (shopRes.status === 'fulfilled' && shopRes.value.ok) {
      const shopData = await shopRes.value.json();
      // Just get shop info for reference, but don't assume features are enabled
    }

    // ✅ PROVEN: Detect installed apps from script tags
    const installedApps: ShopifyApp[] = [];
    const appDomains = new Set<string>();

    scriptTags.forEach(script => {
      try {
        const url = new URL(script.src);
        const domain = url.hostname;

        // Skip Shopify's own scripts
        if (domain.includes('shopify.com') || domain.includes('shopifycdn.com')) {
          return;
        }

        // Extract app name from domain
        let appName = domain.replace(/\.(com|io|net|app)$/, '');
        appName = appName.replace(/^(www\.|app\.)/, '');

        if (!appDomains.has(domain)) {
          appDomains.add(domain);
          installedApps.push({
            id: script.id,
            title: formatAppName(appName),
          });
        }
      } catch {
        // Invalid URL, skip
      }
    });

    return {
      installedApps,
      discounts,
      checkoutSettings,
      scriptTags,
    };
  } catch (error) {
    console.error('Error fetching Shopify Admin data:', error);
    return null;
  }
}

/**
 * Format app name for display
 */
function formatAppName(name: string): string {
  return name
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Validate Shopify credentials
 */
export async function validateShopifyCredentials(
  credentials: ShopifyCredentials
): Promise<{ valid: boolean; error?: string }> {
  try {
    const { shopDomain, accessToken } = credentials;

    // Validate domain format
    if (!shopDomain.includes('.myshopify.com') && !shopDomain.includes('.')) {
      return {
        valid: false,
        error: 'Invalid shop domain format. Expected: yourstore.myshopify.com',
      };
    }

    // Test API access
    const apiVersion = '2024-01';
    const response = await fetch(
      `https://${shopDomain}/admin/api/${apiVersion}/shop.json`,
      {
        headers: {
          'X-Shopify-Access-Token': accessToken,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      if (response.status === 401) {
        return {
          valid: false,
          error: 'Invalid access token. Please check your credentials.',
        };
      }
      return {
        valid: false,
        error: `API request failed with status ${response.status}`,
      };
    }

    return { valid: true };
  } catch (error) {
    return {
      valid: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}
