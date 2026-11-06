---
title: "Why Is Your Shopify Store Slow? Common Causes and How to Fix Them"
description: "Find out why your Shopify store is slow. Learn how to check Core Web Vitals, identify heavy apps and scripts, and fix common image, theme, and mobile performance issues."
author: "ScaleFront Team"
category: "Shopify Optimization"
tags:
  - "slow Shopify store"
  - "Shopify speed optimization"
  - "Shopify Core Web Vitals"
  - "Shopify theme performance"
date: "2025-01-27"
updatedAt: "2026-11-06"
image: "/blog/shopify-store-slow-how-to-fix/cover.webp"
faqs:
  - question: "Why is my Shopify store slow even though I use a paid theme?"
    answer: "A paid theme can still become slow after apps, media, and custom sections are added. The theme purchase does not guarantee the performance of every store built with it.\n\nTest the actual homepage, product, and collection URLs. Identify whether the delay affects loading, interactions, or layout stability, then compare the resources and sections on the slow template. Use a duplicate theme for changes and test variants, cart actions, and navigation before publishing."
  - question: "How do I find what is slowing down my Shopify store?"
    answer: "Test representative pages in PageSpeed Insights, compare the results with Shopify Web Performance reports, and use Chrome DevTools to investigate the resources or interactions involved.\n\nFor a late main image, inspect when its request starts and which image size loads. For delayed clicks, record the interaction in the Performance panel. For layout movement, identify elements that appear without reserved space. Save a baseline and change one measured bottleneck at a time."
  - question: "Will uninstalling Shopify apps make my store faster?"
    answer: "Uninstalling an app helps only if its storefront resources contribute to the slowdown. An admin-only integration may add no code to customer-facing pages, while a widget can load scripts, styles, or third-party requests.\n\nCheck what loads on the slow page and test non-essential app blocks or embeds in a safe environment. Confirm which features rely on the app before removal. Inspect older manually installed snippets separately and test cart behavior, tracking, and affected product features afterward."
  - question: "Should I lazy-load all Shopify product images?"
    answer: "No. Lazy-load images that are not needed for the first visible screen, but avoid delaying the main visible image when it is the LCP element.\n\nCheck the image selected on mobile and desktop, use responsive image sizes, and reserve its space with dimensions or an aspect ratio. Give high fetch priority only to an important image that needs it. Prioritizing every gallery image creates competing requests rather than a clear loading order."
  - question: "What is a good Shopify PageSpeed score?"
    answer: "There is no single Lighthouse score that describes every customer’s experience. Use the score to investigate changes, then check real-user Core Web Vitals and whether shopping interactions work smoothly.\n\nGoogle’s good thresholds are LCP at 2.5 seconds or less, INP at 200 milliseconds or less, and CLS at 0.1 or less, assessed at the 75th percentile. Compare mobile and desktop separately and check whether the report describes the tested URL or the whole origin."
  - question: "Why does my Shopify store score worse on mobile than desktop?"
    answer: "Mobile devices and mobile lab tests operate under different processing and network conditions from a desktop. A responsive layout can still load oversized images, unnecessary JavaScript, or complex navigation markup.\n\nInspect the mobile performance trace and the image candidates actually selected by the browser. Test variant selection, menus, filters, and Add to Cart on a phone when possible. Fix the resource or task responsible for the delay instead of assuming the problem is Shopify hosting."
  - question: "Why is Add to Cart slow even when my Shopify page loads quickly?"
    answer: "The page can load quickly while JavaScript delays a later interaction. Variant logic, cart widgets, analytics, or repeated DOM updates may keep the browser busy when the customer clicks.\n\nRecord the slow action in Chrome DevTools Performance and inspect the work around it. Check network requests as well, because waiting for a response is different from blocking the browser’s main thread. Test a targeted change and verify the resulting cart contents, pricing, and tracking events."
  - question: "Why do Shopify images, banners, or review widgets shift the page?"
    answer: "Layout shifts can happen when an image or widget is inserted without space being reserved for it, or when a font swap changes text dimensions.\n\nSet appropriate image dimensions or aspect ratios, reserve space for predictable app widgets, and review when promotional banners are inserted. Test the whole page after scrolling, not just the first screen. If a font change moves text, compare the fallback font’s dimensions as well as the font-loading setting."
  - question: "Can I add defer to every Shopify theme script?"
    answer: "No. Deferring a script changes when it executes, and some theme scripts rely on a particular loading order or globals created by another file.\n\nIdentify the script’s dependencies and whether it must run during parsing before changing it. Test the change on a duplicate theme, then check product options, search, cart drawers, analytics, and app integrations. For a slow interaction, also inspect execution time; delaying a heavy script does not remove the work it performs."
  - question: "How long does Shopify speed optimization take, and what does it cost?"
    answer: "Scalefront’s planning range for a performance audit is ₹10,000–₹20,000 or $150–$250, with delivery in 3–5 working days. Targeted fixes are ₹25,000–₹40,000 or $250–$500 over 5–10 working days. Theme and app optimization is ₹40,000–₹60,000 or $500–$800 over 2–3 weeks. Complex work is quoted after an audit.\n\nThese are service estimates, not score guarantees. The delivery window starts after access and scope are agreed. Share the affected URLs and reports so we can confirm the work involved, dependencies, and final quote."
  - question: "How soon will performance reports show my Shopify speed fixes?"
    answer: "A repeatable lab test can show the effect of a published change before field reports have enough new visits to reflect it. Google field data and Shopify reports use different collection and reporting processes.\n\nRetest the same URLs under comparable conditions, record when changes were published, and monitor real-user results over time. A single improved Lighthouse run does not establish a lasting improvement, and an older field result immediately after launch does not by itself mean the fix failed."
  - question: "Will improving Shopify speed increase SEO rankings or conversion rates?"
    answer: "Improving performance can make browsing and shopping easier, but it does not guarantee a ranking increase or a particular conversion lift. Google uses Core Web Vitals in its ranking systems alongside other signals.\n\nMeasure speed and business outcomes separately. Verify that the fix reduces the diagnosed delay, then monitor organic traffic and shopping behavior while accounting for other changes such as campaigns or pricing. Keep product selection, tracking, and checkout-related flows working throughout the optimization."
---

Your Shopify store might load quickly on your laptop but feel slow when someone opens a product page on their phone. Sometimes the page appears immediately, but the Add to Cart button takes a moment to respond. On other pages, images and promotional banners keep shifting while the customer is trying to browse.

These are different performance problems, and they don't necessarily have the same solution.

Shopify already manages hosting, its content delivery network (CDN), and much of the infrastructure needed to deliver a storefront. But the theme, apps, images, videos, and custom code can still affect how quickly customers see and use a page. Installing a speed optimization app or compressing every image without checking the cause may not solve anything.

In this guide, we'll discuss how to diagnose a slow Shopify store, the problems that commonly affect performance, and how to fix them without breaking important store features.

## First, Check What Is Actually Slow

Before making changes, test more than just the homepage. A store can have a reasonably fast homepage and a slow product page because its product template loads a review widget, recommendation carousel, variant picker, and other scripts.

Start with these tools:

- **[PageSpeed Insights](https://pagespeed.web.dev/):** Check your homepage, a product page, and a collection page separately. Compare mobile and desktop results. Pay attention to the real-user data when it's available, not only the overall Lighthouse score.
- **Shopify Web Performance reports:** In Shopify Admin, open the Reports area or use the performance summary under Online Store > Themes. These reports show how real visitors experience loading speed, responsiveness, and layout stability. You can also compare page types and look for changes after theme updates or app installations.
- **Chrome DevTools:** Open the Network panel to see which images, scripts, or requests are loading slowly. Use the Performance panel when the page loads but interactions still feel delayed.

PageSpeed Insights contains two different kinds of information. **Field data** comes from real Chrome visits collected over a rolling period. **Lab data** comes from a controlled Lighthouse test. The lab test helps diagnose problems, but a single run doesn't represent every customer's experience. Check whether the field data is for the exact URL or for the whole origin, and repeat lab tests when comparing changes.

Also, don't judge your entire store by one number. A score can change between test runs, and some important problems only appear after a customer scrolls, opens a menu, or adds a product to the cart.

**Useful sources:** [Shopify Web Performance reports](https://help.shopify.com/en/manual/online-store/web-performance/web-performance-reports) · [Shopify: Lab vs. field data](https://shopify.dev/docs/storefronts/themes/best-practices/performance/lab-vs-field)

## Understand LCP, INP, and CLS

Google's Core Web Vitals help separate three common performance issues:

![Core Web Vitals illustrated: LCP main content loading, INP response to a tap, and CLS layout stability](/blog/shopify-store-slow-how-to-fix/02-understand-lcp-inp-and-cls.webp)

| Metric | What it measures | Good threshold |
| --- | --- | --- |
| **Largest Contentful Paint (LCP)** | How quickly the largest visible content element appears, often a hero or product image | **2.5 seconds or less** |
| **Interaction to Next Paint (INP)** | How quickly a page responds to clicks, taps, and keyboard interactions | **200 milliseconds or less** |
| **Cumulative Layout Shift (CLS)** | How much visible content unexpectedly moves around | **0.1 or less** |

These thresholds are evaluated using the 75th percentile of real page visits. First Input Delay (FID), which older Shopify speed guides may mention, was replaced by INP as a Core Web Vital in 2024.

The metrics tell you where to investigate:

- A **poor LCP** may come from an oversized or late-discovered hero image, delayed CSS, or slow HTML rendering.
- A **poor INP** may come from JavaScript doing too much work when a customer clicks Add to Cart, opens a drawer, or changes a product option.
- A **poor CLS** may come from banners, images, fonts, or app widgets appearing without reserved space.

These metrics matter for user experience and can contribute to Google's page-experience assessment, but improving them does not guarantee higher rankings or a particular conversion increase.

**Sources:** [Google: Web Vitals](https://web.dev/articles/vitals) · [Google Search Central: Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals)

## 1. Shopify Apps and Third-Party Scripts

Apps are usually the first thing people blame for a slow Shopify store. But **the number of installed apps is not a reliable performance metric**.

![Comparison of an admin-only inventory integration with a storefront widget that loads browser resources](/blog/shopify-store-slow-how-to-fix/03-1-shopify-apps-and-third-party-scripts.webp)

An inventory-sync app that works only in the Shopify Admin may have no direct effect on the JavaScript loaded by customers. A storefront chat widget, review carousel, popup, or tracking integration can be different because it may load scripts, styles, or requests in the customer's browser.

The important question is not “How many apps are installed?” It's **“Which apps are loading resources on this page, and what are those resources doing?”**

### How to check app-related slowdowns

1. Open a slow product or collection page in Chrome.
2. Open **DevTools > Network**, reload the page, and look for third-party domains, large JavaScript files, and requests that take a long time.
3. Use **DevTools > Performance** to check whether those scripts cause long tasks or delay an interaction.
4. Compare the results with a safe test version of your theme where non-essential app embeds or blocks have been disabled.
5. Remove an app only after confirming that its functionality is not needed, and retest the product page, cart, tracking, and checkout-related flows affected by it.

Shopify's Theme App Extensions allow apps to add blocks and embeds without directly rewriting theme files. Older integrations and manually pasted snippets may need more care. If you find code associated with an uninstalled app in `theme.liquid` or another theme file, don't delete it blindly. Duplicate your theme first, identify what the code does, and test the result.

Simply moving tracking scripts into Google Tag Manager doesn't make their JavaScript free to execute. And delaying every script until the first click can make responsiveness worse when the customer actually interacts with the page.

**Source:** [Shopify: Storefront performance for apps](https://shopify.dev/docs/apps/build/performance/storefront)

## 2. Unoptimized Images and Incorrect Lazy Loading

Product photography is important for an online store, so the goal isn't to make every image tiny. The goal is to send the browser an appropriately sized image and load important images at the right time.

![Shopify image loading diagram showing important visible images, lazy-loaded images below the fold, and responsive image candidates](/blog/shopify-store-slow-how-to-fix/04-2-unoptimized-images-and-incorrect-lazy-loading.webp)

A common mistake is using the same large image file for a full-width homepage banner and a small collection card. Another is adding `loading="lazy"` to every image, including the hero image at the top of the page.

Lazy loading is useful for images farther down the page. But if the hero image is the LCP element, delaying its request can make the main content appear later.

### Use Shopify's image filters

For a typical full-width hero image, a theme developer can use Shopify's `image_url` and `image_tag` filters:

```liquid
{% if section.settings.hero_image != blank %}
  {{
    section.settings.hero_image
    | image_url: width: 2000
    | image_tag:
      widths: '750, 1100, 1500, 2000',
      sizes: '100vw',
      loading: 'eager',
      fetchpriority: 'high'
  }}
{% endif %}
```

This example is suitable **only when that hero is the important above-the-fold image**. Don't give every image high priority: competing high-priority requests can reduce the benefit. For images below the fold, use an appropriate responsive `sizes` value and lazy loading instead.

Shopify's `image_tag` helps generate responsive markup, including image dimensions and source candidates. It is generally better than manually building a different image URL for every screen width.

Other checks worth making:

- Make sure a collection grid doesn't request full-width images for small product cards.
- Check whether your theme loads both mobile and desktop hero images unnecessarily. When different crops are needed, an appropriately configured HTML `<picture>` element may help.
- Reserve space for images using dimensions or CSS aspect ratios so the layout doesn't jump as they load.
- Review sliders and videos on the first screen. They may compete with the main image for bandwidth.

There is no universal rule that every product image must be below a particular file size. Image quality, display dimensions, format, and actual transfer size all matter.

**Sources:** [Shopify: Use image filters efficiently](https://shopify.dev/docs/storefronts/themes/best-practices/performance/use-shopify-image-filters-efficiently) · [Shopify: Responsive images](https://shopify.dev/docs/storefronts/themes/best-practices/performance/use-responsive-images)

## 3. Render-Blocking JavaScript and CSS

The browser needs CSS to display a page correctly, but not every script needs to execute before the customer can see the product. A store may be slow because its theme loads search widgets, animation libraries, popups, and other non-essential features too early.

For an independent script that does not need to run before the page is parsed, a developer might change:

```html
<script src="{{ 'product-enhancements.js' | asset_url }}"></script>
```

To:

```html
<script src="{{ 'product-enhancements.js' | asset_url }}" defer></script>
```

`defer` allows the browser to keep parsing HTML before running the script. It isn't safe to apply automatically to every file: some scripts depend on execution order, global variables, or code that must run at a particular time. Test product variants, cart drawers, search, and tracking after changing script loading.

The same principle applies to CSS. Unused styles and very large stylesheets can delay rendering, but simply splitting every stylesheet into smaller files can add its own overhead. Keep the CSS needed for the first visible screen available early and avoid loading feature-specific assets across unrelated templates.

If the page appears quickly but tapping buttons feels slow, look at JavaScript execution and DOM updates rather than focusing only on image size. Chrome's Performance panel can identify the scripts and rendering work involved in a slow interaction.

**Source:** [Shopify: Theme performance best practices](https://shopify.dev/docs/storefronts/themes/best-practices/performance)

## 4. Slow Liquid Rendering and Theme Code

Shopify themes use Liquid to generate product pages, collection grids, and other storefront HTML on the server. A poorly structured Liquid template can spend unnecessary time preparing content before the browser receives the complete page.

Potential problems include loops through large product or variant collections, repeated filters, and expensive snippets rendered many times on a page. This does **not** mean every Liquid loop is slow or should be rewritten. You need to measure the page first.

A developer can use **Shopify Theme Inspector for Chrome** to profile Liquid rendering and identify which parts of the template use the most time. If a page is slow only when certain sections are enabled, compare it with those sections disabled on a test theme. The inspector can help distinguish expensive Liquid code from JavaScript running after the page loads.

### One important Shopify-specific detail: HTML streaming

Shopify supports streaming HTML on eligible Liquid storefront pages. This lets the browser begin receiving part of the page while Shopify is still rendering other sections.

Developers sometimes capture or modify `{{ content_for_header }}` to remove scripts they don't want. That is a risky shortcut. Shopify’s Liquid reference says [not to modify or parse this output](https://shopify.dev/docs/api/liquid/objects/content_for_header), because its contents can change. Keep first-paint stylesheets and font preloads before the tag so eligible pages can request those resources while the sections render.

Keep `{{ content_for_header }}` as an unmodified output tag inside the `<head>`. If you need to change how an app loads scripts, use the app's supported configuration or integration methods instead of filtering Shopify's generated header content.

For more complicated Liquid profiling, JavaScript modules, and server-rendering patterns, see our [developer-focused Shopify performance guide](/blog/shopify-performance-developer-guide).

**Sources:** [Shopify: Theme Inspector](https://shopify.dev/docs/storefronts/themes/tools/theme-inspector/using-the-theme-inspector) · [Shopify: Critical resources and `content_for_header`](https://shopify.dev/docs/storefronts/themes/best-practices/performance/load-critical-resources-before-content-for-header)

## 5. Fonts, Videos, and Unexpected Layout Shifts

Some pages load quickly but still feel unfinished because the content keeps changing position.

A product page might show the product title in one font and replace it a moment later. A review widget might insert itself above the product description. A promotional bar may appear after the customer has already started reading. These changes can contribute to CLS, especially if the theme hasn't reserved enough space for them.

To reduce these problems, define image dimensions, reserve space for predictable widgets, and review when promotional banners are inserted. Choose font-loading settings carefully; `font-display: swap` can avoid invisible text, but a late font swap may still change the layout if the fallback font has different dimensions.

Videos deserve a separate look. An autoplaying video or a third-party video embed can add considerable network and JavaScript work. Consider a poster image and click-to-play behavior when a video isn't essential to the first view. Hosting a video elsewhere isn't automatically faster; an embedded player can download extra scripts before the viewer presses play.

## 6. Why Your Shopify Store May Be Slower on Mobile

A desktop computer and a mobile phone don't process the same page under the same conditions. Phones may have less processing power, mobile data connections vary, and a busy page can require extra work to build and update its layout on a smaller screen.

![Desktop and mobile product page comparison covering network conditions, image selection, JavaScript work, and touch interactions](/blog/shopify-store-slow-how-to-fix/08-6-why-your-shopify-store-may-be-slower-on-mobile.webp)

A responsive design can look good on mobile while still loading unnecessary resources. A theme might render complex desktop and mobile navigation markup together, use a desktop-sized image in a narrow product card, or load popup scripts before the customer sees the product.

When mobile results are poor, inspect the mobile page rather than copying fixes from the desktop test:

- Check the actual hero and product images selected for the mobile viewport.
- Test navigation, variant selectors, filters, and Add to Cart interactions on a real phone when possible.
- Look for large JavaScript tasks and unnecessary DOM elements.
- Check whether popups or banners cover important content when the page first loads.
- Confirm that responsive image `sizes` values reflect the actual mobile layout.

Also remember that the mobile Lighthouse test uses a constrained testing environment. A lower mobile score doesn't automatically prove that Shopify's hosting is slow. The performance trace should tell you which resources and tasks are responsible.

**Source:** [Shopify: Responsive layouts that perform well](https://shopify.dev/docs/storefronts/themes/best-practices/performance/implement-responsive-design)

## 7. How to Fix Performance Issues Without Breaking Your Store

Speed optimization is not just deleting code. A store needs to stay functional while you improve it. A removed app might have been responsible for a product option, inventory message, analytics event, or cart behavior that isn't obvious from the homepage.

![Five-step Shopify optimization workflow: record baseline, identify bottleneck, duplicate theme, test shopping flow, publish and monitor](/blog/shopify-store-slow-how-to-fix/09-7-how-to-fix-performance-issues-without-breaking-your-store.webp)

I recommend the following workflow:

**Step 1: Record the baseline.** Test representative homepage, product, and collection URLs. Save the current Core Web Vitals, the relevant PageSpeed Insights diagnostics, and any Chrome DevTools traces. Note whether the data comes from actual visitors or a lab test.

**Step 2: Identify one problem at a time.** If LCP is poor, inspect the main image, stylesheet discovery, and document loading. If INP is poor, record a slow interaction and inspect the JavaScript involved. If CLS is poor, locate the elements that move.

**Step 3: Work on a duplicate theme.** Test changes without editing the live theme directly. Where a fix requires app configuration or a backend integration, coordinate those changes so the test environment is representative.

**Step 4: Test the full shopping flow.** Open products, select variants, add items to the cart, apply discounts, check search and filters, and verify the relevant checkout integrations. Check both desktop and mobile views.

**Step 5: Publish carefully and monitor.** Compare the same URLs and test conditions after deployment. Shopify's real-user reports and Google's field data take time to reflect new traffic, so don't promise or judge success from one Lighthouse run immediately after publishing.

A good fix removes a measurable bottleneck without breaking a feature customers rely on.

## Shopify Speed Optimization Checklist

Use this checklist as a starting point, not as a promise that every item will improve every store.

- [ ] Test homepage, product, and collection pages separately.
- [ ] Check Shopify Web Performance reports and PageSpeed Insights field data.
- [ ] Identify whether the main issue is LCP, INP, or CLS.
- [ ] Review third-party scripts and storefront-facing app extensions.
- [ ] Confirm that important above-the-fold images aren't lazy-loaded.
- [ ] Use responsive image markup and sensible image dimensions.
- [ ] Check JavaScript execution before deferring or removing scripts.
- [ ] Investigate expensive Liquid rendering with Theme Inspector when needed.
- [ ] Reserve space for images, banners, and app widgets.
- [ ] Review font and video loading behavior.
- [ ] Test on mobile devices and representative network conditions.
- [ ] Recheck product selection, cart, search, and checkout-related behavior after changes.
- [ ] Monitor real-user performance after publishing.

## When Should You Hire a Shopify Developer?

A [Shopify performance optimization review](/services/performance-optimization) can help separate image-loading problems from theme and app issues. Some fixes can be handled by a store owner: removing an unused popup, choosing a simpler banner, or reviewing an app's settings. Others require understanding Liquid, JavaScript execution, Theme App Extensions, and how the theme renders different page types.

Developer help is worth considering when you have already identified a technical bottleneck but don't know how to fix it safely, when several apps depend on the same theme components, or when a customized theme is difficult to update without affecting store functionality. A [theme developer](/services/theme-development) can handle template-level fixes; if an app needs replacing, first compare [custom Shopify apps with existing apps](/blog/custom-shopify-app-vs-existing-app).

You don't need a certain revenue level to justify a performance audit, and you don't need a headless storefront simply because your mobile score is low. Moving to headless introduces its own development and maintenance work. For many stores, the better first step is to understand and optimize the Liquid theme they already use.

## How Much Does Shopify Speed Optimization Cost, and How Long Does It Take?

The cost depends on what is slowing down your store. Fixing image loading is different from rebuilding a product template or resolving conflicts between apps. These ranges help you plan a budget; we confirm the final scope after reviewing your store.

| Scope | What’s included | Estimated price | Estimated delivery |
| --- | --- | --- | --- |
| Performance audit | Review key pages, investigate loading and interaction problems, and prepare a prioritized fix list | <span data-price-region="in">₹10,000–₹20,000</span><span data-price-region="intl">$150–$250</span> | 3–5 working days |
| Targeted fixes | Address identified image, script-loading, or layout issues, then test the affected shopping flows | <span data-price-region="in">₹25,000–₹40,000</span><span data-price-region="intl">$250–$500</span> | 5–10 working days |
| Theme and app optimization | Investigate multiple templates, refactor theme code, review app dependencies, and test desktop and mobile flows | <span data-price-region="in">₹40,000–₹60,000</span><span data-price-region="intl">$500–$800</span> | 2–3 weeks |
| Complex performance work | Extensive custom theme changes or integrations requiring a separate implementation plan | Quote after audit | Confirmed after audit |

The delivery window starts once we have the required access and agree on the scope. App vendor dependencies or additional requirements can affect the schedule.

Testing and monitoring are separate from a score guarantee. We verify the changes against the diagnosed problems and check that product selection, cart actions, and other affected features still work. Real-user reports may take longer to reflect improvements than lab tests.

## Final Recommendation

If your Shopify store is slow, don't start by installing another speed app or rebuilding the entire storefront. Start by identifying **which page is slow, which metric is failing, and what causes the delay**.

For some stores, that will be the hero image. For others, it will be a third-party script, an overly complex product template, or JavaScript that blocks the cart drawer. The right fix depends on what your tests show.

At Scalefront, we can help investigate Shopify theme and storefront performance issues, identify technical bottlenecks, and plan changes that preserve the shopping experience. If you need help with a specific store, [contact our team](/contact-us) and share the URLs or reports you want reviewed.

## Technical references

These sources support the platform behavior and optimization techniques described above. They are not claims about work performed by Scalefront.

- [Shopify: Performance best practices for themes](https://shopify.dev/docs/storefronts/themes/best-practices/performance)
- [Shopify: Web Performance reports](https://help.shopify.com/en/manual/online-store/web-performance/web-performance-reports)
- [Shopify: Lab vs. field performance data](https://shopify.dev/docs/storefronts/themes/best-practices/performance/lab-vs-field)
- [Shopify: Image filters and responsive images](https://shopify.dev/docs/storefronts/themes/best-practices/performance/use-shopify-image-filters-efficiently)
- [Shopify: Theme Inspector](https://shopify.dev/docs/storefronts/themes/tools/theme-inspector/using-the-theme-inspector)
- [Shopify: Load first-paint resources before content_for_header](https://shopify.dev/docs/storefronts/themes/best-practices/performance/load-critical-resources-before-content-for-header)
- [Google: Core Web Vitals](https://web.dev/articles/vitals)
