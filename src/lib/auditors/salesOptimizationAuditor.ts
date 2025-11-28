import * as cheerio from 'cheerio';
import { Issue, AuditResult } from '../types';
import { ShopifyAdminData, detectFeaturesFromAdminData } from '../shopify/adminApiClient';

export const salesOptimizationAuditor = {
  analyze: async (html: string, url: string, adminData?: ShopifyAdminData | null): Promise<AuditResult> => {
    const $ = cheerio.load(html);
    const issues: Issue[] = [];
    let score = 100;

    const features = {
      upsell: false,
      crossSell: false,
      bundles: false,
      frequentlyBoughtTogether: false,
      promoCodes: false,
      liveChat: false,
      whatsapp: false,
      phone: false,
      deliveryEstimate: false,
      wishlist: false,
      abandonedCart: false,
      loyaltyProgram: false,
      googleAnalytics: false,
      facebookPixel: false,
      tiktokPixel: false
    };

    // If Admin API data is available, use it for accurate feature detection
    let detectedApps: string[] = [];
    let dataSource: 'admin-api' | 'html' = 'html';

    if (adminData) {
      dataSource = 'admin-api';
      const adminFeatures = detectFeaturesFromAdminData(adminData);

      // Merge admin API features with HTML-detected features
      features.upsell = adminFeatures.upsell || features.upsell;
      features.crossSell = adminFeatures.crossSell || features.crossSell;
      features.bundles = adminFeatures.bundles || features.bundles;
      features.frequentlyBoughtTogether = adminFeatures.frequentlyBoughtTogether || features.frequentlyBoughtTogether;
      features.promoCodes = adminFeatures.promoCodes || features.promoCodes;
      features.abandonedCart = adminFeatures.abandonedCart || features.abandonedCart;
      features.loyaltyProgram = adminFeatures.loyaltyProgram || features.loyaltyProgram;
      features.wishlist = adminFeatures.wishlist || features.wishlist;
      detectedApps = adminFeatures.detectedApps;
    }

    // 1. UPSELL DETECTION
    const upsellIndicators = [
      '.upsell', '[data-upsell]', '.product-recommendations--upsell',
      '[class*="upsell"]', '[id*="upsell"]', '.upgrade-option',
      '.premium-option', '[data-product-upsell]'
    ];

    upsellIndicators.forEach(selector => {
      if ($(selector).length > 0) {
        features.upsell = true;
      }
    });

    if (!features.upsell && $('.product').length > 0) {
      issues.push({
        severity: 'high',
        category: 'Sales Optimization',
        issue: 'No upsell functionality detected',
        recommendation: 'Add upsell offers to increase average order value by 10-30%'
      });
      score -= 12;
    }

    // 2. CROSS-SELL / RELATED PRODUCTS
    const crossSellIndicators = [
      '.product-recommendations', '[data-recommendations]',
      '.related-products', '.you-may-also-like', '[class*="cross-sell"]',
      '.recommended-products', '[data-related-products]', '.also-bought'
    ];

    crossSellIndicators.forEach(selector => {
      if ($(selector).length > 0) {
        features.crossSell = true;
      }
    });

    if (!features.crossSell && $('.product').length > 0) {
      issues.push({
        severity: 'high',
        category: 'Sales Optimization',
        issue: 'No cross-sell or related products found',
        recommendation: 'Add "You May Also Like" or "Related Products" section to increase items per order by 15-25%'
      });
      score -= 12;
    }

    // 3. PRODUCT BUNDLES
    const bundleIndicators = [
      '.bundle', '[data-bundle]', '.product-bundle',
      '[class*="bundle"]', '.combo-deal', '.package-deal',
      '[data-product-bundle]', '.buy-together'
    ];

    bundleIndicators.forEach(selector => {
      if ($(selector).length > 0) {
        features.bundles = true;
      }
    });

    // 4. FREQUENTLY BOUGHT TOGETHER
    const fbtText = html.toLowerCase();
    if (fbtText.includes('frequently bought together') ||
        fbtText.includes('often bought with') ||
        fbtText.includes('buy it with') ||
        $('.frequently-bought-together').length > 0) {
      features.frequentlyBoughtTogether = true;
    }

    if (!features.bundles && !features.frequentlyBoughtTogether) {
      issues.push({
        severity: 'medium',
        category: 'Sales Optimization',
        issue: 'No bundle or "Frequently Bought Together" offers',
        recommendation: 'Implement bundle deals to increase cart value by 20-40%'
      });
      score -= 10;
    }

    // 5. PROMO CODE VISIBILITY
    const promoCodeIndicators = [
      'input[name*="discount"]', 'input[name*="coupon"]',
      'input[name*="promo"]', '[placeholder*="promo"]',
      '[placeholder*="coupon"]', '[placeholder*="discount"]',
      '.discount-code', '.promo-code', '.coupon-code'
    ];

    promoCodeIndicators.forEach(selector => {
      if ($(selector).length > 0) {
        features.promoCodes = true;
      }
    });

    const promoText = html.toLowerCase();
    const hasPromoMention = promoText.includes('discount') ||
                           promoText.includes('coupon') ||
                           promoText.includes('promo code');

    if (!features.promoCodes && !hasPromoMention) {
      issues.push({
        severity: 'low',
        category: 'Sales Optimization',
        issue: 'No visible promo code field or discount messaging',
        recommendation: 'Add promo code field and promotional banners to encourage conversions'
      });
      score -= 5;
    }

    // 6. LIVE CHAT SUPPORT
    const liveChatIndicators = [
      '#tidio-chat', '.intercom-messenger', '[id*="drift"]',
      '[class*="crisp"]', '[id*="zendesk"]', '[class*="livechat"]',
      '[id*="tawk"]', '.gorgias-chat', '[class*="chat-widget"]',
      'iframe[src*="chat"]', '[data-live-chat]'
    ];

    liveChatIndicators.forEach(selector => {
      if ($(selector).length > 0) {
        features.liveChat = true;
      }
    });

    // 7. WHATSAPP SUPPORT
    const whatsappLinks = $('a[href*="wa.me"], a[href*="whatsapp"], a[href*="api.whatsapp"]');
    if (whatsappLinks.length > 0) {
      features.whatsapp = true;
    }

    // 8. PHONE NUMBER VISIBILITY
    const phoneRegex = /(\+\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/;
    const bodyText = $('body').text();
    if (phoneRegex.test(bodyText) || $('a[href^="tel:"]').length > 0) {
      features.phone = true;
    }

    if (!features.liveChat && !features.whatsapp && !features.phone) {
      issues.push({
        severity: 'high',
        category: 'Sales Optimization',
        issue: 'No easy customer support options visible',
        recommendation: 'Add live chat, WhatsApp button, or prominent phone number to reduce cart abandonment by 15-20%'
      });
      score -= 13;
    }

    // 9. DELIVERY TIME ESTIMATE
    const deliveryIndicators = [
      '.delivery-date', '.estimated-delivery', '[class*="shipping-time"]',
      '.arrival-date', '[data-delivery-estimate]', '.delivery-estimate'
    ];

    deliveryIndicators.forEach(selector => {
      if ($(selector).length > 0) {
        features.deliveryEstimate = true;
      }
    });

    const deliveryText = html.toLowerCase();
    if (deliveryText.includes('estimated delivery') ||
        deliveryText.includes('ships in') ||
        deliveryText.includes('arrives by') ||
        deliveryText.includes('delivery by')) {
      features.deliveryEstimate = true;
    }

    if (!features.deliveryEstimate && $('.product').length > 0) {
      issues.push({
        severity: 'medium',
        category: 'Sales Optimization',
        issue: 'No delivery time estimate shown',
        recommendation: 'Display estimated delivery dates on product pages to increase purchase confidence'
      });
      score -= 8;
    }

    // 10. WISHLIST FUNCTIONALITY
    const wishlistIndicators = [
      '.wishlist', '[data-wishlist]', '.add-to-wishlist',
      '[class*="wishlist"]', '.save-for-later', '.favorites',
      'button[aria-label*="wishlist"]', '[data-add-to-wishlist]'
    ];

    wishlistIndicators.forEach(selector => {
      if ($(selector).length > 0) {
        features.wishlist = true;
      }
    });

    if (!features.wishlist) {
      issues.push({
        severity: 'medium',
        category: 'Sales Optimization',
        issue: 'No wishlist or save for later functionality',
        recommendation: 'Add wishlist feature to capture interested buyers and enable remarketing'
      });
      score -= 8;
    }

    // 11. ABANDONED CART RECOVERY
    const cartRecoveryIndicators = [
      'input[type="email"][name*="cart"]',
      '[data-cart-recovery]', '.cart-save',
      'form[action*="cart"][action*="email"]'
    ];

    cartRecoveryIndicators.forEach(selector => {
      if ($(selector).length > 0) {
        features.abandonedCart = true;
      }
    });

    // Check for email capture in cart
    const cartEmailInput = $('.cart input[type="email"], [data-cart] input[type="email"]');
    if (cartEmailInput.length > 0) {
      features.abandonedCart = true;
    }

    if (!features.abandonedCart) {
      issues.push({
        severity: 'high',
        category: 'Sales Optimization',
        issue: 'No abandoned cart recovery mechanism detected',
        recommendation: 'Implement email capture at cart stage to recover 10-15% of abandoned carts'
      });
      score -= 12;
    }

    // 12. LOYALTY & REWARDS PROGRAM
    const loyaltyIndicators = [
      '.loyalty', '.rewards', '[data-loyalty]', '[data-rewards]',
      '[class*="points"]', '.referral-program', '[class*="loyalty"]',
      '[class*="rewards"]', '.vip-program', '.membership'
    ];

    loyaltyIndicators.forEach(selector => {
      if ($(selector).length > 0) {
        features.loyaltyProgram = true;
      }
    });

    const loyaltyText = html.toLowerCase();
    if (loyaltyText.includes('loyalty program') ||
        loyaltyText.includes('rewards program') ||
        loyaltyText.includes('earn points') ||
        loyaltyText.includes('referral program')) {
      features.loyaltyProgram = true;
    }

    if (!features.loyaltyProgram) {
      issues.push({
        severity: 'medium',
        category: 'Sales Optimization',
        issue: 'No loyalty or rewards program detected',
        recommendation: 'Implement a loyalty program to increase customer lifetime value by 25-50%'
      });
      score -= 10;
    }

    // 13. CONVERSION TRACKING - Google Analytics, Facebook Pixel, TikTok Pixel
    const scripts = $('script');
    scripts.each((i, el) => {
      const scriptContent = $(el).html() || '';
      const scriptSrc = $(el).attr('src') || '';

      // Google Analytics
      if (scriptContent.includes('gtag') ||
          scriptContent.includes('google-analytics') ||
          scriptContent.includes('GoogleAnalyticsObject') ||
          scriptSrc.includes('googletagmanager.com') ||
          scriptSrc.includes('google-analytics.com')) {
        features.googleAnalytics = true;
      }

      // Facebook Pixel
      if (scriptContent.includes('fbq') ||
          scriptContent.includes('facebook-jssdk') ||
          scriptSrc.includes('connect.facebook.net')) {
        features.facebookPixel = true;
      }

      // TikTok Pixel
      if (scriptContent.includes('ttq') ||
          scriptContent.includes('tiktok') ||
          scriptSrc.includes('analytics.tiktok.com')) {
        features.tiktokPixel = true;
      }
    });

    if (!features.googleAnalytics) {
      issues.push({
        severity: 'high',
        category: 'Sales Optimization',
        issue: 'Google Analytics not detected',
        recommendation: 'Install Google Analytics 4 for conversion tracking and ROI measurement'
      });
      score -= 13;
    }

    if (!features.facebookPixel) {
      issues.push({
        severity: 'medium',
        category: 'Sales Optimization',
        issue: 'Facebook Pixel not detected',
        recommendation: 'Install Facebook Pixel to improve ad performance by 20-40% through retargeting'
      });
      score -= 8;
    }

    if (!features.tiktokPixel) {
      issues.push({
        severity: 'low',
        category: 'Sales Optimization',
        issue: 'TikTok Pixel not detected',
        recommendation: 'Install TikTok Pixel if running TikTok ads for better targeting'
      });
      score -= 5;
    }

    // Calculate feature adoption rate
    const totalFeatures = Object.keys(features).length;
    const adoptedFeatures = Object.values(features).filter(v => v).length;
    const adoptionRate = Math.round((adoptedFeatures / totalFeatures) * 100);

    return {
      score: Math.max(score, 0),
      issues,
      metrics: {
        dataSource, // 'admin-api' or 'html'
        detectedApps: detectedApps.length > 0 ? detectedApps.join(', ') : 'None',
        adoptionRate,
        featuresEnabled: adoptedFeatures,
        totalFeatures,
        hasUpsell: features.upsell,
        hasCrossSell: features.crossSell,
        hasBundles: features.bundles || features.frequentlyBoughtTogether,
        hasFrequentlyBoughtTogether: features.frequentlyBoughtTogether,
        hasPromoCode: features.promoCodes,
        hasCustomerSupport: features.liveChat || features.whatsapp || features.phone,
        hasLiveChat: features.liveChat,
        hasWhatsApp: features.whatsapp,
        hasPhone: features.phone,
        hasDeliveryEstimate: features.deliveryEstimate,
        hasWishlist: features.wishlist,
        hasAbandonedCartRecovery: features.abandonedCart,
        hasLoyaltyProgram: features.loyaltyProgram,
        trackingPixels: {
          googleAnalytics: features.googleAnalytics,
          facebookPixel: features.facebookPixel,
          tiktokPixel: features.tiktokPixel
        }
      }
    };
  }
};
