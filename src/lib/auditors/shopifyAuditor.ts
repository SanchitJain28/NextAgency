import * as cheerio from 'cheerio';
import { Issue, AuditResult } from '../types';
import { isShopifyStore, getShopifyStoreData, getShopifyApps } from '../shopify/storefrontClient';

export const shopifyAuditor = {
  analyze: async (html: string, url: string): Promise<AuditResult> => {
    const $ = cheerio.load(html);
    const issues: Issue[] = [];
    let score = 100;

    // Detect if it's a Shopify store using both HTML and API
    const isShopifyHTML =
      html.includes('Shopify.shop') ||
      html.includes('cdn.shopify.com') ||
      html.includes('shopify-features') ||
      $('meta[name="shopify-checkout-api-token"]').length > 0 ||
      html.includes('Shopify.theme') ||
      html.includes('window.Shopify');

    // Check using API for more accuracy
    const isShopifyAPI = await isShopifyStore(url);
    const isShopify = isShopifyHTML || isShopifyAPI;

    // Get real Shopify store data from public API
    let shopifyData = null;
    if (isShopify) {
      shopifyData = await getShopifyStoreData(url);
    }

    if (!isShopify) {
      return {
        score: 0,
        issues: [
          {
            severity: 'info',
            category: 'Shopify',
            issue: 'Not a Shopify store detected',
            recommendation: 'This tool is optimized for Shopify stores. Some checks may not apply.',
          },
        ],
        metrics: { isShopify: false },
      };
    }

    // Theme Detection
    const themeMatch = html.match(/Shopify\.theme\s*=\s*{\s*"name":\s*"([^"]+)"/);
    const themeName = themeMatch ? themeMatch[1] : 'Unknown';

    // Product Schema
    const productSchema = $('script[type="application/ld+json"]').filter((i, el) => {
      const content = $(el).html();
      return !!(content && content.includes('"@type":"Product"'));
    });

    const isProductPage = $('.product').length > 0 || $('[itemtype*="schema.org/Product"]').length > 0;

    if (isProductPage && productSchema.length === 0) {
      issues.push({
        severity: 'high',
        category: 'Shopify',
        issue: 'Missing product structured data',
        recommendation: 'Add Product schema markup for better search visibility and rich snippets',
      });
      score -= 15;
    }

    // Add to Cart Button
    const addToCartButton = $(
      'button[name="add"], button[type="submit"].product-form__submit, .shopify-payment-button, button[data-action="add-to-cart"]'
    );
    if (isProductPage && addToCartButton.length === 0) {
      issues.push({
        severity: 'critical',
        category: 'Shopify',
        issue: 'Add to cart button not found on product page',
        recommendation: 'Ensure product pages have a clear, visible add to cart button',
      });
      score -= 20;
    }

    // Shopify Apps Detection
    const appScripts = $('script[src]').filter((i, el) => {
      const src = $(el).attr('src');
      return !!(src && (src.includes('apps.shopify.com') || src.includes('shopifyapps')));
    });

    // Currency Selector
    const currencySelector = $('[name="currencies"], .currency-picker, [data-currency-picker], select[data-currency]');
    const hasCurrencySelector = currencySelector.length > 0;

    // Trust Badges
    const trustBadges = $('.trust-badge, .security-badge, [class*="trust"], [class*="secure"], [class*="guarantee"]').length;
    if (isProductPage && trustBadges === 0) {
      issues.push({
        severity: 'low',
        category: 'Shopify',
        issue: 'No trust badges found on product page',
        recommendation: 'Add security and trust badges (SSL, money-back guarantee, secure payment) to increase conversions by up to 15%',
      });
      score -= 5;
    }

    // Product Images
    const productImages = $('.product img, [class*="product-"] img, [data-product-image]');
    if (productImages.length > 0) {
      let lowQualityImages = 0;
      productImages.each((i, el) => {
        const src = $(el).attr('src');
        if (src && !src.includes('_large') && !src.includes('_grande') && !src.includes('_1024x') && !src.includes('width=1024')) {
          lowQualityImages++;
        }
      });

      if (lowQualityImages > 0) {
        issues.push({
          severity: 'medium',
          category: 'Shopify',
          issue: `${lowQualityImages} product images may be low quality`,
          recommendation: 'Use high-resolution images (at least 1024px) for product photos. Shopify automatically creates smaller versions.',
        });
        score -= 8;
      }
    }

    // Cart Functionality
    const cartElement = $('[data-cart], .cart, #cart, [class*="cart"]');
    if (cartElement.length === 0) {
      issues.push({
        severity: 'medium',
        category: 'Shopify',
        issue: 'Cart element not easily identifiable',
        recommendation: 'Ensure cart is accessible and visible to users, preferably in the header',
      });
      score -= 7;
    }

    // Search Functionality
    const searchForm = $('form[action*="/search"], input[name="q"], [data-search]');
    if (searchForm.length === 0) {
      issues.push({
        severity: 'low',
        category: 'Shopify',
        issue: 'No search functionality found',
        recommendation: 'Add search to help customers find products. Stores with search have 25% higher conversion rates.',
      });
      score -= 5;
    }

    // Newsletter Signup
    const newsletterForm = $('form[action*="/contact"], input[name="contact[email]"], [data-newsletter]');
    const hasNewsletter = newsletterForm.length > 0;

    if (!hasNewsletter) {
      issues.push({
        severity: 'low',
        category: 'Shopify',
        issue: 'No newsletter signup found',
        recommendation: 'Add email capture to build your marketing list. Email marketing has an average ROI of 4200%.',
      });
      score -= 4;
    }

    // Product Reviews
    const reviewsSection = $('[class*="review"], [id*="review"], [data-reviews], .yotpo, .stamped, .loox, .judge-me');
    if (isProductPage && reviewsSection.length === 0) {
      issues.push({
        severity: 'medium',
        category: 'Shopify',
        issue: 'No product reviews section found',
        recommendation: 'Add product reviews. Products with reviews see 18% higher conversion rates.',
      });
      score -= 8;
    }

    // Product variants/options
    const productOptions = $('select[id*="variant"], input[name="id"], [data-variant]');
    if (isProductPage && productOptions.length === 0 && html.includes('"variants"')) {
      issues.push({
        severity: 'low',
        category: 'Shopify',
        issue: 'Product variants may not be easily selectable',
        recommendation: 'Ensure product options (size, color, etc.) are clearly visible and easy to select',
      });
      score -= 4;
    }

    // Shipping/Return info
    const shippingInfo = $('[class*="shipping"], [class*="delivery"], [data-shipping]').filter((i, el) => {
      return $(el).text().toLowerCase().includes('shipping') || $(el).text().toLowerCase().includes('delivery');
    });

    if (isProductPage && shippingInfo.length === 0) {
      issues.push({
        severity: 'medium',
        category: 'Shopify',
        issue: 'No shipping information visible on product page',
        recommendation: 'Display shipping costs/timeframes on product pages to reduce cart abandonment',
      });
      score -= 6;
    }

    // Mobile optimization indicators
    const viewport = $('meta[name="viewport"]').attr('content');
    if (!viewport || !viewport.includes('width=device-width')) {
      issues.push({
        severity: 'high',
        category: 'Shopify',
        issue: 'Missing or incorrect viewport meta tag',
        recommendation: 'Add proper viewport meta tag for mobile responsiveness: <meta name="viewport" content="width=device-width, initial-scale=1">',
      });
      score -= 12;
    }

    // Social proof
    const socialProof = $('[class*="customer"], [class*="testimonial"], [data-testimonials]').filter((i, el) => {
      const text = $(el).text().toLowerCase();
      return text.includes('customer') || text.includes('review') || text.includes('testimonial');
    });

    if (socialProof.length === 0 && reviewsSection.length === 0) {
      issues.push({
        severity: 'low',
        category: 'Shopify',
        issue: 'No social proof elements found',
        recommendation: 'Add customer testimonials, reviews, or "as seen in" badges to build trust',
      });
      score -= 4;
    }

    // Check for required policies using API data
    if (shopifyData) {
      if (!shopifyData.policies?.privacyPolicy) {
        issues.push({
          severity: 'high',
          category: 'Shopify',
          issue: 'Privacy Policy not found',
          recommendation: 'Add a Privacy Policy page. This is legally required in most jurisdictions and builds customer trust.',
        });
        score -= 12;
      }

      if (!shopifyData.policies?.refundPolicy) {
        issues.push({
          severity: 'medium',
          category: 'Shopify',
          issue: 'Refund Policy not found',
          recommendation: 'Add a clear Refund Policy to reduce customer concerns and cart abandonment. This can increase conversions by 10-15%.',
        });
        score -= 8;
      }

      if (!shopifyData.policies?.shippingPolicy) {
        issues.push({
          severity: 'medium',
          category: 'Shopify',
          issue: 'Shipping Policy not found',
          recommendation: 'Add a Shipping Policy detailing costs, timeframes, and regions. This builds trust and reduces support tickets.',
        });
        score -= 7;
      }

      // Check product count
      if (shopifyData.products && shopifyData.products.totalCount < 5) {
        issues.push({
          severity: 'medium',
          category: 'Shopify',
          issue: `Low product count (${shopifyData.products.totalCount} products)`,
          recommendation: 'Consider adding more products. Stores with 10+ products typically see higher conversion rates and better SEO.',
        });
        score -= 8;
      }

      // Check collections
      if (shopifyData.collections && shopifyData.collections.totalCount === 0) {
        issues.push({
          severity: 'low',
          category: 'Shopify',
          issue: 'No collections found',
          recommendation: 'Organize products into collections to improve navigation and help customers find products easier.',
        });
        score -= 5;
      }
    }

    // Get detected Shopify apps
    const detectedApps = await getShopifyApps(html);

    return {
      score: Math.max(score, 0),
      issues,
      metrics: {
        isShopify,
        themeName,
        hasProductSchema: productSchema.length > 0,
        hasAddToCart: addToCartButton.length > 0,
        installedApps: appScripts.length,
        detectedApps: detectedApps.join(', ') || 'None detected',
        hasCurrencySelector,
        trustBadgesCount: trustBadges,
        hasCart: cartElement.length > 0,
        hasSearch: searchForm.length > 0,
        hasNewsletter,
        hasReviews: reviewsSection.length > 0,
        hasShippingInfo: shippingInfo.length > 0,
        productImagesCount: productImages.length,
        hasMobileViewport: !!(viewport && viewport.includes('width=device-width')),
        // Real Shopify API data
        totalProducts: shopifyData?.products?.totalCount || 0,
        totalCollections: shopifyData?.collections?.totalCount || 0,
        avgProductPrice: shopifyData?.products?.avgPrice
          ? `$${shopifyData.products.avgPrice.toFixed(2)}`
          : 'N/A',
        hasPrivacyPolicy: !!shopifyData?.policies?.privacyPolicy,
        hasRefundPolicy: !!shopifyData?.policies?.refundPolicy,
        hasShippingPolicy: !!shopifyData?.policies?.shippingPolicy,
        hasTermsOfService: !!shopifyData?.policies?.termsOfService,
      },
    };
  },
};
