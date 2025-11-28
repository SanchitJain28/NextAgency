/**
 * Shopify Storefront API client for getting accurate store data
 * Uses public Storefront API (no credentials needed)
 */

interface ShopifyStore {
  name: string;
  description?: string;
  domain: string;
  currencyCode: string;
  products: {
    totalCount: number;
    hasReviews: boolean;
    avgPrice: number;
  };
  collections: {
    totalCount: number;
  };
  policies: {
    privacyPolicy?: string;
    refundPolicy?: string;
    shippingPolicy?: string;
    termsOfService?: string;
  };
}

/**
 * Check if a URL is a Shopify store
 */
export async function isShopifyStore(url: string): Promise<boolean> {
  try {
    const domain = new URL(url).hostname;

    // Check for Shopify-specific indicators
    const response = await fetch(url, {
      method: 'HEAD',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; EarnAuditor/1.0)',
      },
    });

    const headers = response.headers;
    const xShopifyStage = headers.get('x-shopify-stage');
    const server = headers.get('server');
    const poweredBy = headers.get('x-powered-by');

    // Check headers for Shopify indicators
    if (xShopifyStage || server?.includes('Shopify') || poweredBy?.includes('Shopify')) {
      return true;
    }

    // Check if it has .myshopify.com domain
    if (domain.includes('.myshopify.com')) {
      return true;
    }

    // Try fetching /admin - Shopify stores redirect this
    try {
      const adminResponse = await fetch(`${url}/admin`, {
        method: 'HEAD',
        redirect: 'manual',
      });
      if (adminResponse.status === 302 || adminResponse.status === 301) {
        const location = adminResponse.headers.get('location');
        if (location?.includes('myshopify.com') || location?.includes('accounts.shopify.com')) {
          return true;
        }
      }
    } catch {
      // Ignore errors
    }

    return false;
  } catch (error) {
    console.error('Error checking if Shopify store:', error);
    return false;
  }
}

/**
 * Get Shopify store data using public endpoints
 */
export async function getShopifyStoreData(url: string): Promise<Partial<ShopifyStore> | null> {
  try {
    const baseUrl = new URL(url).origin;

    // Fetch products.json (public endpoint)
    const productsData = await fetchShopifyEndpoint(`${baseUrl}/products.json`);

    // Fetch collections.json (public endpoint)
    const collectionsData = await fetchShopifyEndpoint(`${baseUrl}/collections.json`);

    // Fetch policies from the pages
    const privacyPolicy = await checkPolicyPage(`${baseUrl}/policies/privacy-policy`);
    const refundPolicy = await checkPolicyPage(`${baseUrl}/policies/refund-policy`);
    const shippingPolicy = await checkPolicyPage(`${baseUrl}/policies/shipping-policy`);
    const termsOfService = await checkPolicyPage(`${baseUrl}/policies/terms-of-service`);

    const products = productsData?.products || [];
    const collections = collectionsData?.collections || [];

    return {
      domain: new URL(url).hostname,
      products: {
        totalCount: products.length,
        hasReviews: products.some((p: any) => p.reviews?.length > 0),
        avgPrice: products.length > 0
          ? products.reduce((sum: number, p: any) => {
              const price = parseFloat(p.variants?.[0]?.price || 0);
              return sum + price;
            }, 0) / products.length
          : 0,
      },
      collections: {
        totalCount: collections.length,
      },
      policies: {
        privacyPolicy: privacyPolicy ? 'exists' : undefined,
        refundPolicy: refundPolicy ? 'exists' : undefined,
        shippingPolicy: shippingPolicy ? 'exists' : undefined,
        termsOfService: termsOfService ? 'exists' : undefined,
      },
    };
  } catch (error) {
    console.error('Error fetching Shopify store data:', error);
    return null;
  }
}

/**
 * Fetch data from Shopify public JSON endpoints
 */
async function fetchShopifyEndpoint(url: string): Promise<any | null> {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; EarnAuditor/1.0)',
        'Accept': 'application/json',
      },
      signal: AbortSignal.timeout(10000), // 10 second timeout
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    return null;
  }
}

/**
 * Check if a policy page exists
 */
async function checkPolicyPage(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, {
      method: 'HEAD',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; EarnAuditor/1.0)',
      },
      signal: AbortSignal.timeout(5000),
    });

    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Get Shopify app presence (check for common Shopify apps)
 */
export async function getShopifyApps(html: string): Promise<string[]> {
  const apps: string[] = [];

  // Common Shopify app indicators
  const appIndicators = [
    { name: 'Klaviyo', pattern: /klaviyo/i },
    { name: 'Yotpo', pattern: /yotpo/i },
    { name: 'Judge.me', pattern: /judge\.me/i },
    { name: 'Loox', pattern: /loox/i },
    { name: 'Privy', pattern: /privy/i },
    { name: 'Smile.io', pattern: /smile\.io/i },
    { name: 'ReCharge', pattern: /rechargepayments/i },
    { name: 'Bold', pattern: /bold-apps/i },
    { name: 'Shogun', pattern: /shogun/i },
    { name: 'PageFly', pattern: /pagefly/i },
  ];

  appIndicators.forEach(({ name, pattern }) => {
    if (pattern.test(html)) {
      apps.push(name);
    }
  });

  return apps;
}
