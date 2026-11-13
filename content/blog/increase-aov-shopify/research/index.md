Technical Research Report: Shopify Average Order Value (AOV) Architecture and Conversion Optimization (2026)

1. Understanding Shopify AOV and Unit Economics
   Exact Calculation Methodology in Shopify Analytics
   Within Shopify's core reporting architecture, Average Order Value (AOV) is defined strictly as a pre-tax, pre-shipping, post-discount transactional metric that ignores post-order modifications1. In the primary Sales Reports (Analytics > Reports > Sales), Shopify calculates AOV using the following equation1:

To interpret this metric accurately during conversion rate optimization (CRO) audits, technical analysts must account for how Shopify defines each underlying variable in the store ledger1. Gross sales equate to the product price multiplied by the ordered quantity prior to the application of taxes, shipping charges, discounts, and sales reversals1. Crucially, Shopify includes pending, canceled, and unpaid orders in gross sales totals, while excluding test orders and deleted orders1. Discounts equate to the sum of line-item discounts plus the distributed share of order-level discounts across a collection of sales1. Conversely, post-purchase adjustments—which encompass any order edits, exchanges, or returns (categorized in Shopify's modern reporting schema as Sales reversals and Reversed quantity, replacing the deprecated terms Returns and Quantity returned) processed after an order is initially created—are excluded from both the gross sales and discount figures in the AOV numerator1. Shipping charges, taxes, and duties are similarly excluded from standard sales AOV1, and the Average order value over time widget on Shopify Home explicitly excludes gift card purchases from the numerator before dividing by total orders5.
To illustrate how Shopify isolates initial basket size from post-purchase and fulfillment variables, Shopify's documentation provides a baseline ledger scenario for a single month comprising 10 orders: 200 USD in discounts, $100 USD in taxes, 50 USD in gross sales adjustments resulting from post-order edits or returns1. The system ignores taxes (150), and post-creation adjustments (-$50), executing the calculation strictly as 1. While the initial gross product value is $100 per order and the reported AOV is 50 post-order reversal is 750 net sales divided by 10 orders), demonstrating how post-purchase reversals remain invisible inside the standard AOV metric1. Similarly, across a larger commercial dataset of 1,200 monthly orders generating $96,000 in gross sales and $7,200 in discounts, Shopify reports an AOV of , leaving customer-paid shipping and taxes outside the figure3.
Navigating AOV Across Shopify Admin Surfaces and Attribution Discrepancies
A frequent analytical error in Shopify CRO reporting is assuming that "Average Order Value" uses an identical formula across every admin dashboard. While Sales, Order, and Attribution views share a core net-product baseline, Shopify's Marketing Reports alter the formula in ways that skew cross-channel comparisons1:

Shopify Admin Surface
Navigation Path
Exact Calculation & Scope
Key Analytical Nuances
Source URL
Sales Reports
Analytics > Reports > Category: Sales > Average order value over time
  
 (excludes adjustments, shipping, and taxes)1.
Supports Group by time units (hour, day, week, month, quarter, year, hour of day, day of week) and date range comparisons1.
https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/sales-report1
Shopify Home
Shopify Admin > Home
Average value of all orders (excluding gift cards) divided by total orders5.
High-level executive pulse; strips out gift card purchases to prevent artificial AOV deflation or inflation5.
https://help.shopify.com/en/manual/shopify-admin/shopify-home5
Order Reports
Analytics > Reports > Category: Orders > Orders over time
Average dollar amount per order alongside Average units ordered and Reversed quantity7.
Essential for pairing AOV with Units Per Transaction ( ) and product reversal rates1.
https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/order-reports7
Growth Attribution
Growth > Attribution (Performance view)
  
 filtered by selected traffic type (All, Marketing, Paid, Organic)6.
Defaults to the Last non-direct click attribution model (can be toggled to Linear) over a 30-day window6.
https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/marketing-performance6
Marketing Reports
Analytics > Reports > Marketing (Performance by channel/campaign)
Includes taxes, shipping, and discounts before returns (Average order value (first or last interaction))4.
Critical Discrepancy: Because this report includes taxes and shipping, its AOV figure will appear artificially higher than Sales Report AOV1.
https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/marketing-reports4
Customer Cohorts
Analytics > Reports > Customers > Cohort analysis
Cohort total sales and average order value per customer cohort over time8.
Used to evaluate whether first-order AOV tactics degrade or improve repeat purchase frequency and retention8.
https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/customers-reports8
Bundle Analytics
Analytics > Reports (Bundle total sales over time)
Tracks total bundle orders, bundle revenue, and Total sales by bundle component1.
Populates only when native or Cart Transform product bundles are actively sold on the storefront1.
https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/sales-report1
Metric Differentiation: AOV vs. CR, RPV, and Contribution Profit Per Order
Optimizing for AOV in isolation distorts storefront decision-making because AOV measures only the behavior of customers who successfully complete checkout, ignoring visitors who abandon their carts due to aggressive upsell friction or inflated price anchoring3. A rigorous optimization framework evaluates AOV alongside four complementary unit-economic metrics1:

While Conversion Rate measures the percentage of sessions resulting in an order4 and AOV measures basket size per transaction1, Revenue Per Visitor (RPV) binds the two together as the mathematical product of 3. If an aggressive in-cart modal or higher bundle price raises AOV by 10% but introduces cognitive friction that reduces checkout completion (CR) by 12%, RPV declines and the merchant loses total top-line revenue3. Similarly, tracking Units Per Transaction (UPT)—defined in Shopify's sales schema as 1—allows analysts to distinguish whether an AOV change was driven by genuine basket expansion (customers buying more physical units) or merely by price shifts and discount removals1. Finally, Gross Profit (defined by Shopify as )1 and Contribution Profit Per Order account for variable fulfillment, shipping label costs (Average cost per label in Order Reports)7, and payment gateway fees9.
Why Increasing AOV Does Not Guarantee Higher Profitability
Increasing reported AOV can actively reduce net merchant profit through four interconnected operational mechanisms: the sales reversal blind spot, carrier dimensional weight tier jumps, marginal discount erosion on base units, and concurrent function double-discounting1. First, because Shopify's AOV formula explicitly excludes post-creation adjustments (gross sales (excluding adjustments) - discounts (excluding adjustments) / number of orders)1, an aggressive upsell widget or mystery bundle that pushes unwanted items into a shopper's cart will permanently inflate the reported AOV metric even if the customer subsequently returns the upsold item1. In that scenario, the merchant absorbs both the initial outbound fulfillment cost and the return handling cost while the Sales Report AOV remains deceptively elevated1.
Second, when a customer adds an extra item to cross a free-shipping threshold, the customer's shipping charge drops to $0 while the merchant absorbs the full carrier label cost3. If the cross-sold item is heavy or bulky, the package weight (Total weight value) or dimensions (Package length, width, or height) can cross a carrier pricing tier, causing the merchant's absorbed shipping cost to exceed the gross margin of the added product3. Third, when merchants deploy tiered volume discounts (such as "Buy 2, Save 15%; Buy 3, Save 25%") or sitewide spend-based discounts without modeling product cost margins, the percentage discount applies across the entire bundle or cart rather than just the incremental unit3. If a customer who already intended to purchase two units at full price receives a 15% discount across all units to add a low-margin third unit, the gross profit dollar yield on the order can drop below the baseline3. Finally, in Shopify's modern extensibility architecture, Cart Transform functions and Discount Functions execute concurrently and independently10. If a merchant encodes a bundle savings discount directly into a Cart Transform price override or bundle product price and simultaneously allows an automatic order or product discount to target those same lines without strict discount combination rules, the shopper receives stacked discounts that wipe out contribution margin10. 2. Practical AOV Strategies: Mechanics, Implementation, and Limitations
Strategy 1: Product Bundles and Mix-and-Match Bundles
Product bundling groups two or more complementary products into a single commercial offering—either as a Fixed Bundle (a predetermined kit such as a cleanser, toner, and moisturizer), a Multipack (multiple units of the same SKU), or a Mix-and-Match / Build-Your-Own-Bundle (BYOB) where shoppers select interchangeable items and variants from a curated collection15. Bundling increases AOV by shifting the shopper's cognitive framing from evaluating individual SKUs to purchasing a complete outcome at a curated value, while simultaneously helping merchants clear slower-moving inventory alongside bestsellers9.
In Shopify, fixed and multipack bundles are implemented natively using the free Shopify Bundles app, which utilizes the Cart Transform API's lineExpand operation to break a parent bundle product into its component SKUs at checkout for real-time inventory decrementing10. Mix-and-match and BYOB experiences cannot be built with the native Shopify Bundles app15; they require third-party apps built on Cart Transform (linesMerge or lineExpand) such as Bundler, Fast Bundle, or Biscuits Bundle Builder10, or custom Shopify Function development on Shopify Plus25.
Technical limitations are substantial. Native Shopify Bundles caps fixed bundles at 30 components (dynamic bundles up to 150 components), limits options to a maximum of 3 options and 100 total variants per bundle, and does not automatically update the parent bundle price when component product prices change13. Furthermore, across the entire Shopify platform, Cart Transform bundles are strictly incompatible with selling plans (subscriptions, pre-orders, and try-before-you-buy), cannot contain other bundles, cannot be processed in self-serve exchanges, and calculate shipping based on individual component shipping profiles rather than a unified bundle profile10.
Strategy 2: Product Recommendations and Frequently Bought Together (FBT)
Product recommendations surface relevant cross-sells on product detail pages (PDPs) or cart views through two distinct mechanisms: Related Products (algorithmic suggestions of similar or alternative items) and Complementary Products or Frequently Bought Together (accessories or companion items designed to be added alongside the primary product)9. Recommendations work best for catalogs where a hero product has natural companions, such as a camera paired with an SD card or boots paired with care spray3.
Merchants implement native recommendations by installing the free Shopify Search & Discovery app, which populates Shopify's Product Recommendations API (/{locale}/recommendations/products.json) using either intent=related (auto-generated via purchase history, product descriptions, and related collections, or manually overridden) or intent=complementary (curated manually per product)27. For one-click multi-item FBT checklists with bundled discounts, merchants use third-party apps like Wiser, Selleasy, or CBB Frequently Bought Together21.
The primary limitation of native recommendations through Search & Discovery is that complementary recommendations do not auto-generate via machine learning—they must be manually configured in the admin for each product, and standard product taxonomy attributes are not supported inside Search & Discovery28. Additionally, native recommendation blocks do not natively apply a bundle discount when a shopper clicks to add both items unless paired with an automatic Buy X Get Y or amount-off discount14.
Strategy 3: Product Page and Cart Drawer Upsells
Product page and cart drawer upsells intervene during active product selection or cart review to offer either a true upsell (trading up to a larger size, multi-pack, or higher-tier version of the selected SKU) or a low-friction cross-sell (adding a low-cost impulse item priced significantly below the primary cart item)9. These are most effective when limited to one to three highly relevant offers inside a slide-out Ajax cart drawer, where purchase intent is already established and items can be added with a single click without a page reload3.
Implementation ranges from native theme blocks (many modern Online Store 2.0 themes include a Complementary Products block or cart drawer recommendation slot) to specialized cart drawer apps such as UpCart, Kaching Cart Drawer, or Selleasy21, or custom theme development using the Shopify Ajax Cart API (POST /cart/add.js) combined with the Section Rendering API33.
The primary limitation is conversion rate cannibalization due to visual clutter and cognitive overload on high-consideration products3. Displaying five or more upsells in a cart drawer introduces decision fatigue, slows down careful buyers, and can depress the checkout reach rate3. Technically, third-party cart drawer apps that inject heavy external JavaScript rather than leveraging native Section Rendering can degrade Largest Contentful Paint (LCP) and conflict with theme-level Ajax cart listeners16.
Strategy 4: Free Shipping Thresholds and Progress Bars
A free shipping threshold sets a minimum order value required to waive delivery fees, paired with a dynamic progress indicator in the cart drawer that displays the exact dollar gap remaining to unlock free shipping3. This strategy leverages goal-gradient psychology and loss aversion: shoppers whose carts sit $10 to $15 below the threshold frequently add an extra unit or low-cost accessory to avoid paying a deadweight shipping fee3. It is best deployed on stores with accessible add-on SKUs priced near the threshold gap, typically calibrated 15% to 30% above the store's baseline modal order band (or median order value) rather than a skewed mean3.
In Shopify, the underlying rule is configured natively under Settings > Shipping and delivery by adding a price-based condition ($0 shipping rate above a minimum order price) within each shipping profile and zone, or via an automatic Free Shipping discount3. The visual progress bar is implemented cleanly via custom Liquid and JavaScript inside the theme's cart drawer section, or via apps like Checkout Blocks or cart drawer apps3.
Limitations center on margin erosion and international currency complexity. For stores selling heavy, bulky, or low-margin goods, absorbing carrier freight on threshold-qualifying orders can erase the gross profit gained from the extra item3. Furthermore, in multi-currency Shopify Markets setups, hardcoded Liquid threshold values fail unless converted dynamically or configured per market shipping zone3.
Strategy 5: Volume Discounts and Quantity Breaks
Volume discounts (quantity breaks) incentivize higher Units Per Transaction (UPT) by offering tiered unit pricing on the same product or collection—for example, "Buy 1 at standard price, Buy 2 and save 10%, Buy 3 and save 20%" displayed as visual tier cards directly above the Add to Cart button on the PDP11. This strategy is ideal for consumables, supplements, skincare, basics apparel, and household goods where shoppers naturally use multiple units over time3.
Merchants can implement basic quantity rules natively using Shopify's automatic "Amount off products" discounts with minimum quantity requirements, though native discounts lack tiered PDP visual widgets and require separate discount entries per tier3. Consequently, most stores implement quantity breaks via Shopify Function-powered apps such as Kaching Bundles, Bundler, or Pumper, or via custom Discount Function extensions on Shopify Plus19.
The core limitation is margin compression on repeat buyers who would have purchased multiple units without a discount, alongside discount stacking risks if quantity break discounts are permitted to combine with sitewide promo codes3.
Strategy 6: Gift-With-Purchase (GWP) Offers
Gift-With-Purchase (GWP) and Buy X Get Y (BOGO) promotions reward shoppers with a free or discounted item once their cart crosses a spending threshold or includes qualifying trigger products17. Positioning a high-margin sample, travel-size product, or branded accessory as a free bonus often generates higher perceived value than an equivalent dollar discount while preserving brand equity11.
On Shopify, merchants can configure basic Buy X Get Y automatic discounts natively in the admin (Discounts > Buy X get Y)3. However, native Shopify Buy X Get Y discounts have a well-known operational limitation: they do not automatically add the free gift to the shopper's cart40. The shopper must manually place the gift item in their cart before the native discount marks it free40. To achieve automatic cart injection when a threshold is met, merchants must either write custom Ajax Cart API JavaScript (/cart/add.js and /cart/change.js listeners)40 or use dedicated GWP apps built on Shopify Functions such as BOGOS, AOV.ai Free Gifts, or AppHero22. Additionally, on all plans except Shopify Plus, products that are part of a native Buy X Get Y discount face strict discount combination restrictions, and native Buy X Get Y discounts never apply to post-purchase checkout pages14.
Strategy 7: Product Add-Ons and Personalization
Product add-ons and personalization increase order value on a single SKU by offering optional high-margin enhancements—such as gift wrapping, custom engraving, monogramming, extended warranties, or priority handling—via checkboxes or input fields on the product page, cart drawer, or checkout23. Because services like engraving or gift notes carry minimal COGS, their revenue flows almost entirely into contribution profit3.
Implementation uses Line Item Properties (properties[Engraving Text]) or Cart Attributes (attributes[Gift Wrap]) passed through the product form or Ajax Cart API to capture custom instructions34, paired with an add-on variant added via /cart/add.js or merged into the parent product via the Cart Transform API (linesMerge or lineExpand)10. Off-the-shelf apps like Wrapped, Selleasy, or Checkout Blocks Pro also handle this without custom code23.
Limitations involve fulfillment and returns: custom products with line item properties are incompatible with native Shopify Bundles15, require custom operational routing in warehouse management systems (WMS), and personalized items typically must be flagged as final sale in Shopify return rules because they cannot be restocked15.
Strategy 8: Post-Purchase Upsells
Post-purchase upsells present a one-click offer immediately after the customer completes payment at checkout, appearing on an interstitial page between payment confirmation and the final Thank You page, or as interactive blocks on the Thank You and Order Status pages9. Because the initial transaction is already authorized and captured, post-purchase upsells carry zero risk of reducing primary checkout conversion rates, and customers can accept the offer with a single click without re-entering credit card or Shop Pay credentials3.
In Shopify, post-purchase offers cannot be built with theme Liquid; they require a third-party app built on Shopify Post-Purchase Checkout Extensions (such as ReConvert / Upsell.com, AfterSell, Zipify OCU, or ReSell) selected under Settings > Checkout > Post-purchase page23. Notably, apps built with post-purchase extensions and Thank You or Order Status UI extensions are supported on Basic Shopify plans and higher, not just Shopify Plus38.
However, verified platform documentation reveals four strict architectural constraints that merchants must navigate when deploying post-purchase extensions37. First, Shopify enforces single-app exclusivity on the post-purchase interstitial slot, meaning only one checkout app can be selected to render post-purchase page offers at any given time38. Second, post-purchase checkout extensions operate exclusively in the store's default currency; if an international shopper checks out in a localized secondary currency via Shopify Markets, post-purchase offers are suppressed and will not display37. Third, when a post-purchase app is active, Shopify places the order's fulfillment status on hold temporarily while the customer views the offer so the order can be edited if accepted, which can delay instant ERP or 3PL fulfillment webhooks50. Fourth, native admin Buy X Get Y discounts do not apply to the post-purchase page39, and third-party payment gateways must explicitly support post-purchase extensions—while Shopify Payments, Shop Pay, and Adyen support them, redirects and Managed Markets checkouts do not12.
Strategy 9: Subscriptions and AI-Powered Recommendations
Subscriptions ("Subscribe and Save" or prepaid multi-month plans) and AI-powered merchandising work across both AOV and Customer Lifetime Value (LTV)9. While a basic single-unit subscription discount (such as 10% off recurring deliveries) lowers initial first-order AOV, structuring subscriptions as multi-pack tiers, prepaid multi-cycle plans, or subscription plan upgrades and customer-portal add-ons lifts both initial and recurring basket values while preventing stockout-driven churn11. Meanwhile, AI-powered recommendation engines analyze co-purchase history and session behavior to dynamically populate FBT and cart cross-sell slots9. Subscriptions are implemented via the free Shopify Subscriptions app or advanced third-party platforms (Loop, Supr, Subi, or Casa) that leverage Shopify's Selling Plans API11, while AI recommendations are deployed via apps such as Wiser or ReConvert31.
Critical platform limitations govern both tactics. On the subscription side, Shopify's Cart Transform API rejects lineExpand, linesMerge, and lineUpdate operations whenever a sellingPlanId is present on a cart line10. Consequently, native bundles and the Shopify Subscriptions app cannot be combined directly; subscription boxes must either add items as individual selling plan lines or use specialized unified bundle-subscription apps like Supr or Loop10. Furthermore, Managed Markets does not support subscriptions (subscriptions work for domestic orders only)12, and merchants using the native Shopify Subscriptions app have documented financial losses when recurring subscription discounts drop an order below a free-shipping threshold without a native rule workaround54. On the recommendation side, AI recommendations are not universally superior to manual curation29. On stores with low monthly order volume, newly launched SKUs, or small catalogs, collaborative filtering algorithms suffer from the cold-start problem and surface random pairings29. CRO best practice dictates manually curating complementary pairings for top-selling hero SKUs where product affinity is deterministic, while reserving automated or AI-driven related rules as a fallback for the long-tail catalog28. 3. Native Features vs. Apps vs. Custom Development & Plan Restrictions
Selecting the optimal implementation layer on Shopify requires understanding the architectural separation across three distinct execution layers—the Storefront Theme Layer, the Backend Shopify Functions Layer, and the Checkout Extensibility Layer—alongside the strict governance rules separating Basic, Grow, Advanced, and Shopify Plus plans10. At the Storefront Theme Layer, native browser APIs including the Ajax Cart API (/cart/add.js), the Section Rendering API, and the Product Recommendations API operate across all paid Shopify plans without restriction27. At the Backend Functions Layer (cart.transform.run and Discount Functions), merchants on Basic, Grow, and Advanced plans can execute Cart Transform lineExpand and linesMerge operations as well as custom discount logic only by installing public apps from the Shopify App Store10. Conversely, deploying custom-built Shopify Function apps and executing the Cart Transform lineUpdate operation (which overrides a line item's price, title, or image in place) are gated strictly to full Shopify Plus stores (and excluded even from Plus trial stores)10. Similarly, at the Checkout Extensibility Layer, Post-Purchase interstitial extensions and UI extensions on the Thank You and Order Status pages are available to Basic plans and higher, whereas UI extensions placed directly on the Information, Shipping, and Payment checkout steps are restricted exclusively to Shopify Plus38.
Comprehensive Technical Comparison and Plan Restrictions Matrix
The following matrix synthesizes verified Shopify developer documentation and Help Center governance rules as of late 2026 (API version 2026-10 / 2027-01 RC)15:

Platform Capability / API
Native vs. App vs. Custom Dev
Plan Availability (Basic, Grow, Advanced)
Shopify Plus & Enterprise Exclusives
Technical Architecture & Critical Constraints (2026)
Verified Documentation URL
Shopify Bundles
Free Native App (built by Shopify)21.
Available on all plans (requires upgraded Checkout Extensibility)15.
Same feature set; no Plus gate required15.
Supports Fixed and Multipack bundles only (no Mix-and-Match)15. Max 30 fixed components, 3 options, 100 variants13. Incompatible with subscriptions/selling plans15.
https://help.shopify.com/en/manual/products/bundles/shopify-bundles13
Search & Discovery
Free Native App (built by Shopify)28.
Available on all plans28.
Same feature set61.
Powers related (auto + manual) and complementary (manual) product recommendations, storefront filters, and semantic search28. Does not support standard taxonomy attributes or bundle option filters13.
https://help.shopify.com/en/manual/online-store/themes/customizing-themes/common-customizations/add-product-recommendations28
Automatic Discounts
Native Admin Feature (Discounts)14.
Available on all plans.
Plus Exclusive: Combining product discounts with other product discounts on the exact same line item14.
Native Buy X Get Y does not auto-add free gifts to the cart40 and does not apply to post-purchase pages39. Non-Plus stores face stricter combination limits on Buy X Get Y items14.
https://help.shopify.com/en/manual/discounts/discount-combinations14
Shopify Functions (Discount, Validation, Delivery, Payment)
Requires Public App (All plans) or Custom App (Plus only)25.
Public Apps only: Merchants on Basic, Grow, and Advanced can install public App Store apps built with Shopify Functions25.
Plus Exclusive: Building and deploying Custom Apps containing Shopify Functions (also included in Agentic Enterprise plan)25.
Replaced deprecated Shopify Scripts64. Standardized targets introduced in 2025-07: cart.delivery-options.transform.run, cart.payment-methods.transform.run, cart.validations.generate.run20.
https://help.shopify.com/en/manual/checkout-settings/customize-checkout-configurations/checkout-apps38
Cart Transform API (cart.transform.run)
Native Bundle Apps, Public Bundle Apps, or Custom Plus Apps10.
Public Apps only (lineExpand & linesMerge): Available on Basic and higher when delivered via a public App Store app10.
Plus Exclusive (lineUpdate & Custom Apps): The lineUpdate operation (overriding price, title, or image without merging/expanding) requires a full Shopify Plus plan (excluded even on Plus trial stores), regardless of whether the app is public or custom10.
Standardized target cart.transform.run with operations lineExpand, linesMerge, and lineUpdate20. Max 1 Cart Transform function per app per store42. Fails/rejects if a selling plan (subscription) is present10.
https://shopify.dev/docs/api/functions/latest/cart-transform42
Ajax Cart API & Section Rendering API
Native Storefront APIs (Custom Theme Dev or Theme App Extensions)34.
Available on all plans with an Online Store34.
Same capabilities across all plans34.
Endpoints: /cart/add.js, /cart/update.js, /cart/change.js, /cart/clear.js, /cart.js34. Note: /cart/add.js returns only added items, not the full cart object; pass sections parameter for Bundled Section Rendering to fetch updated totals in a single network call34.
https://shopify.dev/docs/api/ajax/reference/cart34
Product Recommendations API
Native Storefront API (/{locale}/recommendations/products.json)27.
Available on all plans27.
Same capabilities across all plans27.
Requires product_id and intent (related or complementary) parameters27. Ideal for asynchronous rendering inside PDP sections or dynamic cart drawers27.
https://shopify.dev/docs/api/ajax/reference/product-recommendations27
Checkout UI Extensions (In-Checkout Upsells)
Public Checkout Apps or Custom Checkout Apps38.
Not Available on Information, Shipping, or Payment checkout steps for Basic, Grow, or Advanced plans38.
Plus Exclusive: Adding UI blocks (upsells, custom fields, dynamic content, line item editors) to the Information, Shipping, and Payment pages (or one-page checkout main canvas)37.
checkout.liquid is fully deprecated15. Plus merchants can also customize checkout blocks per regional market (Advanced and Plus can customize Thank You / Account pages per market)37.
https://help.shopify.com/en/manual/checkout-settings/customize-checkout-configurations/checkout-apps38
Post-Purchase, Thank You & Order Status Extensions
Public Apps (All Plans) or Custom Apps38.
Available on Basic, Grow, and Advanced: Merchants can use Post-Purchase interstitial extensions and Thank You / Order Status UI extensions38.
Same post-purchase and Thank You page capabilities, plus full in-checkout parity38.
Only 1 post-purchase app can be active at a time38. Post-purchase offers display only in the store's default currency37. Thank You and Order Status pages do not support hiding individual child items inside a bundle60.
https://help.shopify.com/en/manual/checkout-settings/customize-checkout-configurations/checkout-apps38
When to Choose Native Features vs. Third-Party Apps vs. Custom Development
Decision-making between native tools, third-party apps, and custom development depends on the required merchandising complexity and the store's Shopify plan tier. Merchants should choose native features when the catalog requires straightforward fixed bundles or multipacks via Shopify Bundles13, standard related and complementary PDP recommendations via Search & Discovery28, price-based free shipping thresholds via Settings > Shipping and delivery3, or basic automatic order and product discounts3. Native utilities carry zero monthly subscription fees and introduce zero external JavaScript payload overhead16.
Conversely, merchants on Basic, Grow, or Advanced plans must choose third-party public apps whenever their strategy relies on backend Shopify Functions25. Because non-Plus stores are prohibited from deploying custom apps containing Shopify Functions, installing a public App Store app is the sole supported pathway to execute Cart Transform linesMerge operations for mix-and-match bundles or complex tiered volume discount functions on a non-Plus plan10. Public apps are also preferable on all plans for post-purchase one-click upsell funnels that require visual drag-and-drop funnel builders and built-in A/B testing analytics38.
Custom development becomes necessary in two distinct scenarios. First, at the storefront theme layer across all Shopify plans, custom development is superior when the merchant wants a high-speed, zero-bloat free-shipping progress bar, an integrated cart drawer cross-sell block, or a bespoke complementary product slider built using native Liquid, the Ajax Cart API (/cart/add.js), and Bundled Section Rendering16. Custom theme code eliminates recurring app fees and prevents third-party script injection from degrading Core Web Vitals such as Largest Contentful Paint (LCP)16. Second, at the backend Functions and Checkout Extensibility layer on Shopify Plus, custom development is warranted when a Plus merchant requires proprietary bundling logic via cart.transform.run, dynamic price overrides via lineUpdate (such as bespoke wholesale pricing or kit pricing without strikethrough artifacts), or custom UI extensions embedded directly inside the Information, Shipping, and Payment steps of Shopify Checkout10. 4. Verified Shopify App Ecosystem Analysis (2026)
To provide merchants with accurate tooling recommendations, the following analysis evaluates native Shopify utilities alongside leading third-party App Store solutions across bundles, upsells, recommendations, and subscriptions using verified App Store metrics21. While Shopify's free native utilities—Shopify Bundles (2.9★ across 565 reviews) and Shopify Search & Discovery (2.6★ across 513 reviews)—provide essential baseline infrastructure at zero cost, merchant ratings reflect frustration with rigid variant limits (such as the 3-option cap in Shopify Bundles) and the lack of mix-and-match or automated upsell capabilities13. In contrast, specialized third-party apps built on Shopify's modern theme app block and Function APIs consistently achieve 4.8★ to 5.0★ ratings across thousands of deployments16.

Detailed Directory of Verified AOV Apps

App Name & Developer
Official Shopify App Store URL
Core Supported AOV Features
Verified Pricing & Free Plan Availability
Key Technical & Operational Limitations
Shopify Bundles (Developer: Shopify) — 2.9★ (565 reviews)21
https://apps.shopify.com/shopify-bundles21
Fixed bundles and multipacks created directly in Shopify Admin; real-time component inventory sync; variant option combining13.
100% Free21.
No mix-and-match bundles15; max 30 fixed components, 3 options, and 100 variants per bundle (apparel stores hit the 3-option limit quickly when combining size and color across items)13; no auto price update when component prices change13; incompatible with subscriptions15.
Shopify Search & Discovery (Developer: Shopify) — 2.6★ (513 reviews)23
https://apps.shopify.com/search-and-discovery68
Customizes storefront search, facet filters, related product recommendations (auto + manual), and complementary product pairings28.
100% Free28.
Complementary recommendations require manual mapping per product; does not support standard product taxonomy attributes32; bundled products do not appear under option filters due to index naming13; no native discount logic on recommendations28.
Shopify Checkout Blocks (Developer: Shopify) — 4.1★ (221 reviews)69
https://apps.shopify.com/checkout-blocks70
Customizes Checkout, Thank You, and Order Status pages with dynamic content blocks, static banners, custom fields, address blockers, and line item edits46.
100% Free38.
Plan Restriction: On Basic, Grow, and Advanced plans, blocks (such as Dynamic Content and Static Content) can be placed only on Thank You and Order Status pages46. Placing blocks on the main Checkout pages requires Shopify Plus38.
Bundler – Product Bundles App (Built for Shopify) — 4.9★ (2,794 reviews)24
https://apps.shopify.com/bundler-product-bundles22
Classic fixed bundles, Mix-and-Match (tiered & sectioned), Quantity Breaks / volume discounts, Build-a-Box, Buy X Get Y, product page and cart drawer upsells, POS & subscription compatibility24.
Free Plan Available (Unlimited revenue & orders, Buy X Get Y, volume discounts, PDP upsells, POS)22. Paid tiers: $9.99/mo (Mix & Match, custom landing pages, funnel upsells); $19.99/mo Executive (bundle analytics, AOV & conversion graphs). 7-day free trial24.
Mix & Match, custom landing pages, and bundle analytics require upgrading to the $9.99/mo or $19.99/mo plans24.
Wiser – AI Upsell & Cross Sell — 4.9★ (565 reviews)31
https://apps.shopify.com/recommended-products-wiser31
AI Frequently Bought Together bundles, AI & manual recommendations, advanced slide cart drawer with tiered discounts & free gifts, post-purchase upsells, Thank You page offers, Checkout upsells (Plus), A/B testing, and IntelliSearch31.
Free to Install (includes full feature set for development/entry stores)31. Paid tiers scale by monthly store order volume starting at $9/month (with tiered brackets for 101–300 and 301–500 monthly store orders)31.
In-checkout upsell widgets require Shopify Plus31; pricing scales upward automatically as total store monthly order volume increases31.
ReConvert Post Purchase Upsell (Upsell.com) — 4.8★ (3,135 reviews)23
https://apps.shopify.com/reconvert-upsell-cross-sell (Partner profile: https://apps.shopify.com/partners/stilyo)48
One-click post-purchase upsell & downsell funnels, Thank You and Order Status page editors, checkout upsells, cart upsells, birthday collectors, post-purchase surveys, and A/B testing48.
Free Plan Available (free for development stores and up to 50 orders/mo)48. Paid tiers start from $4.99/mo (and $7.99/mo Upsell Premium for up to 99 store orders or $99 generated by ReConvert) plus order-volume tiers; 30-day free trial48.
Subject to Shopify's platform rule allowing only one post-purchase checkout extension app active at a time38, and post-purchase interstitials display only in the store's default currency37.
Post Purchase Upsell—ReSell (Built for Shopify, by DevIT) — 5.0★ (73 reviews)43
https://apps.shopify.com/resell43
Native checkout extensions on Thank You & Order Status pages, one-click post-purchase upsells, subscription upsells, FBT, checkout add-ons (gift wrap, order protection), free shipping progress bar, and A/B testing43.
Paid plans start at $0.99/mo (100 store orders free/mo + 5% on upsell revenue); $14.99/mo (commission-free, 250 orders/mo, then $0.20/order); $24.99/mo (1,000 orders/mo, then $0.20/order); $99.99/mo (unlimited orders, zero commission/usage fees)43.
Usage charges ($0.20 per additional order or 5% commission on the entry tier) require careful monitoring for high-volume stores unless on the $99.99/mo unlimited tier43.
Kaching Bundles App & Upsells — 5.0★ (6,712 reviews)21
https://apps.shopify.com/bundle-deals16
Quantity breaks, volume discounts, BOGO, fixed & mix-and-match product bundles, native theme app blocks and Shopify Functions for fast asynchronous loading16.
Free to Install (free plan available for development/entry stores, scaling to flat monthly plans)16.
Focused primarily on PDP volume/bundle widgets rather than full post-purchase checkout funnels16.
Upsell & Cross Sell — Selleasy — 4.9★ (2,785 reviews)21
https://apps.shopify.com/upsell-cross-sell-selleasy21
Frequently Bought Together (FBT) bundles, product add-ons, in-cart upsell drawer/popups, post-purchase upsells, and Thank You page cross-sells21.
Free Plan Available (with low flat-rate scaling tiers by order volume)16.
Requires theme app block placement and verification of cart drawer selector compatibility on highly customized themes16.
Supr Bundle & Subscription App (Built for Shopify) — 5.0★ (329 reviews)56
https://apps.shopify.com/subscriptions-app56
Combines subscriptions and product bundles in one app (solving the native bundle-subscription conflict): Subscribe & Save, build-a-box subscription bundles, quantity breaks, BOGO, and cancellation flows56.
Free Plan Available (Free up to $1,000/mo Supr revenue with every feature included)56. Paid tiers: $19/mo (up to $3k Supr revenue), $29/mo (up to $5k), $49/mo (up to $15k), 0% transaction fees56.
Revenue-tiered pricing scales as app-generated bundle and subscription revenue grows56.
Shopify Subscriptions (Developer: Shopify)54
https://apps.shopify.com/shopify-subscriptions54
Basic "Subscribe and Save" recurring billing and customer portal management native to Shopify Admin15.
100% Free54.
Incompatible with Shopify Bundles15; lacks build-a-box, prepaid tiered ladders, and advanced win-back flows; merchants note edge-case losses when subscription discounts interact with free-shipping thresholds54. 5. Technical Implementation: Production-Ready Liquid and JavaScript
All four implementations below adhere strictly to Shopify's current Online Store 2.0 architecture, using locale-aware routing (window.Shopify.routes.root), the Product Recommendations API (/{locale}/recommendations/products.json), the Ajax Cart API (POST /{locale}/cart/add.js), and Bundled Section Rendering to eliminate redundant network requests27.
5.1 Complementary Product Recommendations (Liquid + JS via Section Rendering)
When rendering complementary products on a PDP, Shopify's recommendations Liquid object is populated asynchronously by fetching the section via /{locale}/recommendations/products?section_id={{ section.id }}&product_id={{ product.id }}&intent=complementary27. Pairing products are configured in the free Shopify Search & Discovery app28.

Code snippet
{% comment %}
File: sections/complementary-products.liquid
Usage: Render on Product Detail Page or include as a block in main-product.liquid.
Requires: Complementary products configured in Shopify Search & Discovery app.
{% endcomment %}

<div
 class="complementary-recommendations"
 data-url="{{ routes.product_recommendations_url }}?section_id={{ section.id }}&product_id={{ product.id }}&limit={{ section.settings.products_to_show }}&intent=complementary"
>
 {%- if recommendations.performed and recommendations.products_count > 0 -%}
   <aside class="complementary-box" aria-label="{{ section.settings.heading | escape }}">
     <h3 class="complementary-box__heading">{{ section.settings.heading | escape }}</h3>
     <div class="complementary-box__list">
       {%- for item in recommendations.products -%}
         {%- assign current_variant = item.selected_or_first_available_variant -%}
         {%- if current_variant.available -%}
           <div class="complementary-item" data-product-id="{{ item.id }}">
             <a href="{{ item.url }}" class="complementary-item__media">
               {%- if item.featured_media -%}
                 {{
                   item.featured_media
                   | image_url: width: 160
                   | image_tag:
                     loading: 'lazy',
                     widths: '80, 160',
                     class: 'complementary-item__img',
                     alt: item.featured_media.alt | default: item.title
                 }}
               {%- endif -%}
             </a>

             <div class="complementary-item__info">
               <a href="{{ item.url }}" class="complementary-item__title">
                 {{ item.title | escape }}
               </a>
               <div class="complementary-item__price">
                 <span class="price-current">{{ current_variant.price | money }}</span>
                 {%- if current_variant.compare_at_price > current_variant.price -%}
                   <s class="price-compare">{{ current_variant.compare_at_price | money }}</s>
                 {%- endif -%}
               </div>

               {%- if item.has_only_default_variant -%}
                 <input type="hidden" class="js-upsell-variant-id" value="{{ current_variant.id }}">
               {%- else -%}
                 <select class="js-upsell-variant-id complementary-item__select" aria-label="Variant">
                   {%- for variant in item.variants -%}
                     <option
                       value="{{ variant.id }}"
                       {% unless variant.available %}disabled{% endunless %}
                     >
                       {{ variant.title | escape }} - {{ variant.price | money }}
                     </option>
                   {%- endfor -%}
                 </select>
               {%- endif -%}
             </div>

             <div class="complementary-item__action">
               <button
                 type="button"
                 class="button button--secondary js-ajax-add-btn"
                 data-quantity="1"
               >
                 <span class="js-btn-text">{{ section.settings.button_label | escape }}</span>
               </button>
             </div>
           </div>
         {%- endif -%}
       {%- endfor -%}
     </div>

   </aside>
 {%- endif -%}
</div>

<script>
 (function () {
   function initComplementaryRecommendations(scope) {
     const containers = (scope || document).querySelectorAll('.complementary-recommendations[data-url]');
     containers.forEach((container) => {
       if (container.dataset.loaded === 'true') return;
       const url = container.dataset.url;
       if (!url) return;

       fetch(url)
         .then((response) => {
           if (!response.ok) throw new Error('Network error fetching recommendations');
           return response.text();
         })
         .then((htmlText) => {
           const tempDiv = document.createElement('div');
           tempDiv.innerHTML = htmlText;
           const renderedContent = tempDiv.querySelector('.complementary-recommendations');
           if (renderedContent && renderedContent.innerHTML.trim().length > 0) {
             container.innerHTML = renderedContent.innerHTML;
             container.dataset.loaded = 'true';
           }
         })
         .catch((err) => {
           console.error('Complementary recommendations load failed:', err);
         });
     });
   }

   if (document.readyState === 'loading') {
     document.addEventListener('DOMContentLoaded', () => initComplementaryRecommendations());
   } else {
     initComplementaryRecommendations();
   }

   document.addEventListener('shopify:section:load', (event) => {
     initComplementaryRecommendations(event.target);
   });
 })();
</script>

{% schema %}
{
"name": "Complementary Products",
"settings": [
{
"type": "text",
"id": "heading",
"label": "Heading",
"default": "Pairs Well With"
},
{
"type": "range",
"id": "products_to_show",
"min": 1,
"max": 6,
"step": 1,
"default": 3,
"label": "Maximum products to show"
},
{
"type": "text",
"id": "button_label",
"label": "Add button label",
"default": "+ Add"
}
],
"presets": [
{
"name": "Complementary Products"
}
]
}
{% endschema %}

5.2 Dynamic Free-Shipping Progress Indicator (Multi-Currency Aware Liquid + CSS)
This snippet calculates the remaining spend required to reach a configurable free-shipping threshold in cents (cart.total_price), converts the threshold dynamically when secondary Shopify Markets currencies are active, and updates automatically whenever the cart section is re-rendered via the Section Rendering API3.

Code snippet
{% comment %}
File: snippets/free-shipping-progress.liquid
Usage: {% render 'free-shipping-progress', threshold_dollars: settings.free_shipping_threshold %}
Note: Place inside sections/cart-drawer.liquid or sections/main-cart-items.liquid so Bundled
Section Rendering automatically updates the HTML on every cart mutation.
{% endcomment %}

{%- liquid
assign base_threshold_dollars = threshold_dollars | default: 100
assign base_threshold_cents = base_threshold_dollars | times: 100.0
assign current_cart_cents = cart.total_price | times: 1.0

if current_cart_cents >= base_threshold_cents
assign remaining_cents = 0
assign progress_percent = 100
assign unlocked = true
else
assign remaining_cents = base_threshold_cents | minus: current_cart_cents
assign progress_percent = current_cart_cents | divided_by: base_threshold_cents | times: 100.0 | round
assign unlocked = false
endif
-%}

<div
 class="shipping-progress"
 id="CartShippingProgress"
 data-base-threshold-cents="{{ base_threshold_cents | round }}"
 data-cart-total-cents="{{ cart.total_price }}"
 role="region"
 aria-live="polite"
>
 <p class="shipping-progress__message">
   {%- if unlocked -%}
     <span class="shipping-progress__text shipping-progress__text--success">
       Free Standard Shipping is unlocked for this order!
     </span>
   {%- else -%}
     <span class="shipping-progress__text">
       Add <strong class="js-shipping-remaining">{{ remaining_cents | money }}</strong> more to unlock <strong>Free Shipping</strong>.
     </span>
   {%- endif -%}
 </p>

 <div
   class="shipping-progress__track"
   role="progressbar"
   aria-valuemin="0"
   aria-valuemax="100"
   aria-valuenow="{{ progress_percent }}"
 >
   <div
     class="shipping-progress__fill{% if unlocked %} is-complete{% endif %}"
     style="width: {{ progress_percent }}%;"
   ></div>
 </div>
</div>

<style>
 .shipping-progress {
   padding: 12px 16px;
   background-color: #f8f9fa;
   border-bottom: 1px solid #e5e7eb;
 }
 .shipping-progress__message {
   margin: 0 0 8px 0;
   font-size: 0.875rem;
   line-height: 1.4;
   color: #111111;
   text-align: center;
 }
 .shipping-progress__track {
   width: 100%;
   height: 8px;
   background-color: #e0e0e0;
   border-radius: 999px;
   overflow: hidden;
 }
 .shipping-progress__fill {
   height: 100%;
   background-color: #1a73e8;
   border-radius: 999px;
   transition: width 0.3s ease, background-color 0.3s ease;
 }
 .shipping-progress__fill.is-complete {
   background-color: #188038;
 }
</style>

5.3 Adding Recommended Products via Ajax Cart API with Bundled Section Rendering
A critical technical nuance documented in the Shopify Developer Community is that POST /{locale}/cart/add.js returns only the line items added in that mutation, rather than the full updated cart state34. Rather than firing a second sequential GET /cart.js call (which doubles latency and risks rate limiting under aggressive bot protection)35, this module uses Bundled Section Rendering by passing sections and sections_url directly inside the /cart/add.js payload34.

JavaScript
/\*\*

- File: assets/ajax-upsell-cart.js
- Purpose: Adds single or multiple recommended variants to cart via POST /{locale}/cart/add.js
-          and updates Cart Drawer, Free Shipping Bar, and Header Bubble in a single round-trip
-          using Shopify's Bundled Section Rendering API.
  \*/

class ScalefrontAjaxUpsell {
constructor(options = {}) {
this.sectionsToRender = options.sections || [
{
id: 'cart-drawer',
section: 'cart-drawer',
selector: '#CartDrawer'
},
{
id: 'cart-icon-bubble',
section: 'cart-icon-bubble',
selector: '#cart-icon-bubble'
}
];
this.bindEvents();
}

bindEvents() {
document.addEventListener('click', (event) => {
const button = event.target.closest('.js-ajax-add-btn');
if (!button) return;

     event.preventDefault();
     const itemContainer = button.closest('[data-product-id], .cart-upsell-card, .complementary-item');
     const variantInput = itemContainer
       ? itemContainer.querySelector('.js-upsell-variant-id')
       : null;

     const variantId = variantInput
       ? Number(variantInput.value)
       : Number(button.dataset.variantId);
     const quantity = Number(button.dataset.quantity || 1);

     if (!variantId || Number.isNaN(variantId)) {
       console.error('ScalefrontAjaxUpsell: Missing valid variant ID.');
       return;
     }

     this.addItemsToCart([{ id: variantId, quantity }], button);

});
}

/\*\*

- Executes POST /{locale}/cart/add.js with bundled sections parameter.
- @param {Array<{id: number, quantity: number, properties?: Object}>} items
- @param {HTMLElement|null} triggerButton
  \*/
  async addItemsToCart(items, triggerButton = null) {
  const rootUrl = (window.Shopify && window.Shopify.routes && window.Shopify.routes.root) || '/';
  const endpoint = `${rootUrl}cart/add.js`;
  const sectionNames = this.sectionsToRender.map((s) => s.section);

let originalText = '';
const textSpan = triggerButton ? triggerButton.querySelector('.js-btn-text') || triggerButton : null;

if (triggerButton) {
triggerButton.disabled = true;
triggerButton.setAttribute('aria-busy', 'true');
if (textSpan) {
originalText = textSpan.textContent;
textSpan.textContent = 'Adding...';
}
}

try {
const response = await fetch(endpoint, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Accept': 'application/json'
},
body: JSON.stringify({
items: items,
sections: sectionNames,
sections_url: window.location.pathname
})
});

     const responseData = await response.json();

     if (!response.ok) {
       throw new Error(responseData.description || responseData.message || 'Unable to add item to cart.');
     }

     if (responseData.sections) {
       this.renderUpdatedSections(responseData.sections);
     } else {
       await this.fallbackRefreshSections();
     }

     document.dispatchEvent(
       new CustomEvent('scalefront:cart:updated', {
         detail: { addedItems: responseData.items, sections: responseData.sections }
       })
     );

     if (textSpan) {
       textSpan.textContent = 'Added';
       setTimeout(() => {
         textSpan.textContent = originalText;
         if (triggerButton) {
           triggerButton.disabled = false;
           triggerButton.removeAttribute('aria-busy');
         }
       }, 1200);
     }

} catch (error) {
console.error('ScalefrontAjaxUpsell Error:', error);
if (textSpan) {
textSpan.textContent = 'Unavailable';
setTimeout(() => {
textSpan.textContent = originalText;
if (triggerButton) {
triggerButton.disabled = false;
triggerButton.removeAttribute('aria-busy');
}
}, 2000);
}
}
}

renderUpdatedSections(sectionsPayload) {
this.sectionsToRender.forEach((config) => {
const rawHtml = sectionsPayload[config.section];
if (!rawHtml) return;

     const targetElement = document.querySelector(config.selector);
     if (!targetElement) return;

     const parsedDoc = new DOMParser().parseFromString(rawHtml, 'text/html');
     const replacementElement = parsedDoc.querySelector(config.selector) || parsedDoc.body.firstElementChild;

     if (replacementElement) {
       targetElement.innerHTML = replacementElement.innerHTML;
     }

});

const cartDrawer = document.querySelector('cart-drawer, #CartDrawer');
if (cartDrawer && cartDrawer.classList.contains('is-empty')) {
cartDrawer.classList.remove('is-empty');
}
}

/\*\*

- Fallback for themes (e.g., certain Horizon configurations) if sections payload returns null.
  \*/
  async fallbackRefreshSections() {
  const sectionNames = this.sectionsToRender.map((s) => s.section).join(',');
  const rootUrl = (window.Shopify && window.Shopify.routes && window.Shopify.routes.root) || '/';
  const res = await fetch(`${rootUrl}?sections=${encodeURIComponent(sectionNames)}`);
  if (res.ok) {
  const sectionsData = await res.json();
  this.renderUpdatedSections(sectionsData);
  }
  }
  }

document.addEventListener('DOMContentLoaded', () => {
window.scalefrontUpsell = new ScalefrontAjaxUpsell();
});

5.4 Custom In-Cart Upsell Component with Smart Deduplication (Liquid)
A frequent flaw in basic cart upsell widgets is recommending items that the shopper has already placed in their cart. This Liquid snippet iterates through a curated upsell collection, filters out every product ID already present in cart.items, and renders up to three available cross-sell cards wired directly to the ScalefrontAjaxUpsell handler above29.

Code snippet
{% comment %}
File: snippets/cart-drawer-upsells.liquid
Usage: {% render 'cart-drawer-upsells', upsell_collection: collections['cart-upsells'], max_offers: 3 %}
Features: Automatically excludes products already in the cart and out-of-stock variants.
{% endcomment %}

{%- liquid
 assign limit_count = max_offers | default: 3
 assign rendered_count = 0
 assign cart_product_ids = cart.items | map: 'product_id'
-%}

{%- if upsell_collection != blank and upsell_collection.products_count > 0 and cart.item_count > 0 -%}

 <div class="cart-upsells" id="CartDrawerUpsells">
   <h4 class="cart-upsells__heading">Complete the Order</h4>
   <div class="cart-upsells__list">
     {%- for upsell_product in upsell_collection.products -%}
       {%- if rendered_count >= limit_count -%}
         {%- break -%}
       {%- endif -%}

       {%- unless cart_product_ids contains upsell_product.id -%}
         {%- assign target_variant = upsell_product.selected_or_first_available_variant -%}
         {%- if target_variant.available -%}
           {%- assign rendered_count = rendered_count | plus: 1 -%}
           <div class="cart-upsell-card" data-product-id="{{ upsell_product.id }}">
             <a href="{{ upsell_product.url }}" class="cart-upsell-card__image-link">
               {%- if upsell_product.featured_image -%}
                 {{
                   upsell_product.featured_image
                   | image_url: width: 120
                   | image_tag:
                     loading: 'lazy',
                     width: 60,
                     height: 60,
                     class: 'cart-upsell-card__image',
                     alt: upsell_product.title
                 }}
               {%- endif -%}
             </a>

             <div class="cart-upsell-card__details">
               <a href="{{ upsell_product.url }}" class="cart-upsell-card__title">
                 {{ upsell_product.title | escape }}
               </a>
               <div class="cart-upsell-card__price">
                 <span>{{ target_variant.price | money }}</span>
                 {%- if target_variant.compare_at_price > target_variant.price -%}
                   <s class="cart-upsell-card__compare">{{ target_variant.compare_at_price | money }}</s>
                 {%- endif -%}
               </div>

               {%- if upsell_product.has_only_default_variant -%}
                 <input type="hidden" class="js-upsell-variant-id" value="{{ target_variant.id }}">
               {%- else -%}
                 <select class="js-upsell-variant-id cart-upsell-card__select" aria-label="Select option">
                   {%- for variant in upsell_product.variants -%}
                     {%- if variant.available -%}
                       <option value="{{ variant.id }}">
                         {{ variant.title | escape }} ({{ variant.price | money }})
                       </option>
                     {%- endif -%}
                   {%- endfor -%}
                 </select>
               {%- endif -%}
             </div>

             <div class="cart-upsell-card__cta">
               <button
                 type="button"
                 class="button button--small js-ajax-add-btn"
                 data-variant-id="{{ target_variant.id }}"
                 data-quantity="1"
               >
                 <span class="js-btn-text">+ Add</span>
               </button>
             </div>
           </div>
         {%- endif -%}
       {%- endunless -%}
     {%- endfor -%}

   </div>
 </div>
{%- endif -%}

6. CRO Measurement, Unit Economics, and Experimentation Protocol
   The Five-Metric CRO Scorecard
   Because an isolated AOV increase can mask conversion rate drops or margin destruction3, every AOV experiment must be evaluated against a five-metric hierarchy:

Metric
Formula
Role in AOV Experimentation
Shopify Data Source 1. Contribution Profit Per Visitor (CPPV)

    Primary North Star Metric: Proves whether the traffic cohort generated more net profit dollars per session1.
    Custom Report combining Gross profit1, Cost of shipping labels7, and Sessions4.
    2. Revenue Per Visitor (RPV)


    Captures the net top-line trade-off between basket size (AOV) and checkout completion rate (CR)3.
    Analytics > Reports (Total sales or net sales divided by Sessions)3.
    3. Average Order Value (AOV)


    Measures initial basket value shift; must be segmented by discounted vs. full-price orders1.
    Sales > Average order value over time1.
    4. Units Per Transaction (UPT)


    Verifies whether shoppers actually added incremental physical units (Ordered quantity minus Reversed quantity)1.
    Sales Report (Units per transaction) or Orders over time (Average units ordered)1.
    5. Conversion Rate (CR) & Reversal Rate


and  
 Guardrail Metrics: Ensures upsell friction does not depress checkout completion and upsold items are not refunded3.
Orders and reversals by product (Reversed quantity rate)7.
Mathematical Proof of Discount and Shipping Margin Erosion
To demonstrate how a naive AOV increase can reduce net profitability, consider a store with 10,000 monthly sessions, a 3.0% conversion rate (300 orders), a baseline AOV of $80, and a 60% gross margin (40% COGS = $32), where customers in the control group pay an $8 flat shipping fee matching the merchant's $8 carrier label cost (Average cost per label = $8)3. In Variant A, the merchant introduces a free shipping threshold at $95 (approximately 19% above the $80 baseline AOV)17. Shoppers add a second item to qualify, lifting reported AOV by 20% from $80.00 to $96.00 while Conversion Rate holds steady at 3.0% (causing RPV to rise from $2.40 to $2.88)3. However, adding a second heavy item increases package weight (Total weight value)7, pushing the carrier label cost from $8.00 to $14.00 per order, which the merchant now absorbs 100% because the order crossed $953:

Unit Economic Variable
Control (No Free Shipping Threshold)
Variant A ($95 Free Shipping Threshold)
Net Change / Impact
Monthly Sessions & Conversion Rate
10,000 sessions @ 3.0% CR (300 orders)3
10,000 sessions @ 3.0% CR (300 orders)3
0% change in order volume
Reported Shopify AOV
$80.001
$96.001
+$16.00 (+20.0% AOV lift)
Revenue Per Visitor (RPV)
$2.403
$2.883
+$0.48 (+20.0% RPV lift)
Product COGS (40% of AOV)
-$32.001
-$38.401
-$6.40 incremental COGS
Merchant-Absorbed Shipping Cost
8 label paid by customer)7
-$14.00 (heavier weight tier absorbed)3
-$14.00 margin erosion
Contribution Profit Per Order
$48.00
$43.60
-$4.40 (-9.2% profit drop per order)
Total Monthly Contribution Profit
$14,400
$13,080
-$1,320 monthly net profit loss3
Before launching a free-shipping threshold or tiered discount, CRO analysts must verify that incremental gross margin exceeds absorbed shipping and discount bleed using the following break-even inequality1:

A/B Testing Recommendations for Shopify AOV Experiments
Designing reliable AOV experiments on Shopify requires addressing distribution skewness, traffic seasonality, outlier distortion, and promotional contamination1. First, analysts must calibrate free-shipping and gift thresholds to the modal order band and median rather than the arithmetic mean3. Because a small number of B2B, wholesale, or VIP orders artificially pull the mean (AOV) upward, setting a threshold 20% to 30% above the mean often places the goal out of reach for typical shoppers3. Analysts should export the last 90 days of orders, strip out test and wholesale carts, identify the median order value and the $5 to $10 band where the highest density of orders lands, and set the test threshold roughly one best-selling add-on price above that cluster3.
Second, teams should avoid pre/post sequential testing—such as comparing AOV in the week before versus the week after launching an offer—because weekly comparisons are easily corrupted by ad spend shifts, email campaigns, or day-of-week variance1. Instead, practitioners should run concurrent split-traffic A/B tests (using storefront split testing tools or native funnel A/B testing inside post-purchase apps like ReConvert, Wiser, and ReSell) for a minimum of two full business weeks (14 to 28 days)3. Third, because AOV and RPV are continuous variables with extreme right-skewness, a single outlier cart can invalidate a standard parametric t-test; analysts should cap extreme outliers (Winsorization at the 99th percentile) and evaluate significance using non-parametric Mann-Whitney U tests or bootstrapped confidence intervals on Contribution Profit Per Visitor. Finally, because sitewide discount codes directly reduce the AOV numerator (Gross Sales - Discounts)1, analysts must segment test results by full-price versus discounted orders and monitor the 14-day post-test Reversed quantity rate in Order Reports to ensure higher AOV does not trigger delayed refund spikes3. 7. Competitor Content Audit and 2026 Article Blueprint
Analysis of Competing Articles ("Increase AOV Shopify" / "Shopify Upsells")
An audit of top-ranking competing guides targeting "how to increase AOV on Shopify", "Shopify upsells", and "Shopify average order value optimization" (including agency blogs and app vendor listicles from SkaiLama, Loop Subscriptions, Fastshot, Crocart, Pumper, and legacy Plus blogs) reveals three systemic weaknesses that Scalefront can address to establish clear topical authority9. The most glaring flaw is the persistence of deprecated technical advice around checkout.liquid and Ruby-based Shopify Scripts64. Numerous competing articles still instruct merchants to edit checkout.liquid or deploy Shopify Scripts to run in-checkout upsells, tiered cart discounts, or free-gift injection, despite Shopify having deprecated and sunsetted both technologies in favor of Checkout Extensibility and Shopify Functions15. Official Shopify Bundles documentation explicitly warns that stores retaining legacy checkout.liquid customizations are ineligible to sell product bundles15.
A second widespread weakness across competitor content is the reliance on unsupported blanket statistics and naive unit math9. Competing blogs routinely state that AOV = Total Revenue / Total Orders9, failing to inform merchants that Shopify's Sales Report AOV excludes taxes, shipping, gift cards, and post-order returns (Sales reversals), whereas Marketing Report AOV includes taxes and shipping1. Competitor articles also repeat unverified generalizations—claiming, for example, that bundles universally lift AOV by 20–35% or that AI personalization lifts AOV by 10–30%9—and advise setting free shipping thresholds at "30% above current AOV" evaluated via simple one-week before-and-after checks17, ignoring modal distribution bands, carrier weight tier jumps, and RPV cannibalization3.
Third, competing articles almost entirely omit 2026 technical architecture and Shopify plan-gating nuances10. Competitors routinely recommend "checkout upsells" without clarifying that Information, Shipping, and Payment page UI extensions require Shopify Plus, whereas Post-Purchase, Thank You, and Order Status extensions work on Basic plans and higher38. They similarly fail to explain that while Cart Transform lineExpand and linesMerge work on all plans via public apps, the lineUpdate price override operation requires a full Shopify Plus plan even inside public apps, and custom Function apps require Plus10. Finally, competing guides overlook critical operational incompatibilities: they fail to mention that Cart Transform bundles reject selling plans (subscriptions)10, that post-purchase upsells only display in the store's default currency37, and that /cart/add.js requires Bundled Section Rendering (sections parameter) to avoid sequential network waterfalls34.
Recommended 2026 Article Outline for Scalefront
To outperform generic listicles, the updated Scalefront guide "How to Increase AOV on Shopify: 15 Proven Tactics (2026)" should be structured around funnel architecture, unit economics, and copy-paste technical implementation:

Article Section
Core Topics & Technical Differentiators to Include
Target Persona Intent 1. The Shopify AOV Formula (And the 2 Analytics Traps Most Merchants Miss)
Exact Shopify Sales Report formula ((Gross Sales - Discounts) / Orders excluding taxes, shipping, and post-order reversals); why Marketing Reports show inflated AOV (includes taxes & shipping); Mean vs. Median/Modal order band analysis1.
Founders, Ecommerce Managers, & CRO Analysts 2. Why Higher AOV Can Lower Net Profit: The RPV & Contribution Margin Framework
Defining , Units Per Transaction (UPT), and Contribution Profit Per Order; mathematical walkthrough of carrier weight-tier jumps and discount bleed on base units1.
Founders, CFOs, & Growth Marketers 3. Product Page (PDP) Tactics (Tactics 1–5) 1. Fixed & Multipack Kits (Shopify Bundles vs. 3-option limit)13; 2. Mix-and-Match / Build-Your-Own-Box via Cart Transform (linesMerge)10; 3. Quantity Breaks / Volume Discount Ladders19; 4. Complementary Cross-Sells via Search & Discovery + Complete Liquid/JS code snippet27; 5. High-Margin Line-Item Personalization & Engraving34.
Merchants & Shopify Theme Developers 4. Cart Drawer & Threshold Tactics (Tactics 6–10) 6. Modal-Calibrated Free Shipping Thresholds + Multi-Currency Liquid Progress Bar code3; 7. Multi-Tiered Cart Reward Ladders (Free Shipping Discount Free Gift)29; 8. Auto-Injected Gift-With-Purchase (solving native Buy X Get Y's manual-add flaw)39; 9. Smart In-Cart Upsells with Cart Deduplication Liquid + Bundled Section Rendering /cart/add.js code29; 10. Low-Friction Service Add-Ons (Gift Wrap / Priority Handling)42.
Shopify Developers & Technical CRO Specialists 5. Checkout, Post-Purchase & Retention Tactics (Tactics 11–15) 11. One-Click Post-Purchase Interstitial Upsells (Available on Basic+ plans; default-currency caveat)37; 12. Thank You & Order Status Page Dynamic Cross-Sells via Checkout Blocks38; 13. In-Checkout Information/Shipping/Payment Upsells (Shopify Plus Exclusive)38; 14. Multi-Pack Subscription Upgrades & Portal Add-Ons (navigating the Cart Transform selling-plan restriction)10; 15. Hybrid Manual + AI Merchandising Rules (avoiding the AI cold-start trap)29.
Plus Merchants, Retention Managers, & Developers 6. 2026 Architecture Matrix: Native vs. Public Apps vs. Custom Dev (By Shopify Plan)
Full comparison table of Basic/Grow/Advanced vs. Shopify Plus restrictions across Checkout UI Extensions, Shopify Functions, and Cart Transform (lineExpand, linesMerge, and Plus-only lineUpdate)10.
CTOs, Lead Developers, & Agency Evaluators 7. Verified 2026 Shopify AOV App Stack & Pricing Guide
Transparent review of Shopify Bundles, Search & Discovery, Checkout Blocks, Bundler, Wiser, ReConvert, ReSell, Kaching, Selleasy, and Supr with verified ratings, free plan limits, and fee structures21.
Store Owners & Ecommerce Operators 8. How to A/B Test AOV Without Fooling Yourself
Step-by-step experimentation checklist: tracking Contribution Profit Per Visitor, handling right-skewed order outliers, separating discounted cohorts, and auditing 14-day Reversed quantity rate1.
CRO Specialists & Data Analysts
Works cited

1. Sales reports - Shopify Help Center, https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/sales-report
2. Rollout analytics - Shopify Help Center, https://help.shopify.com/en/manual/markets/rollouts/analytics
3. How to increase AOV on Shopify - Cascayd, https://cascayd.app/blog/how-to-increase-aov
4. Marketing reports - Shopify Help Center, https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/marketing-reports
5. Shopify Home page, https://help.shopify.com/en/manual/shopify-admin/shopify-home
6. Measuring marketing performance - Shopify Help Center, https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/marketing-performance
7. Order reports - Shopify Help Center, https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/order-reports
8. Customers reports - Shopify Help Center, https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/customers-reports
9. How to Increase Average Order Value (AOV) on Shopify in 2026, https://fastshot.ai/blog/increase-average-order-value-shopify
10. What Is the Shopify Cart Transform API? How Native Bundles Group, https://biscuitsbundles.com/fr/blogs/learn/what-is-the-shopify-cart-transform-api-how-native-bundles-group-products-in-cart-and-checkout
11. How to Increase AOV on Shopify (7 Proven Strategies That Actually, https://www.loopwork.co/blog/how-to-increase-aov-shopify-7-proven-strategies-2026
12. Requirements and considerations for using Managed Markets, https://help.shopify.com/en/manual/international/managed-markets/requirements-and-considerations
13. Shopify Bundles, https://help.shopify.com/en/manual/products/bundles/shopify-bundles
14. Combining discounts - Shopify Help Center, https://help.shopify.com/en/manual/discounts/discount-combinations
15. Eligibility and considerations for using product bundles, https://help.shopify.com/en/manual/products/bundles/eligibility-and-considerations
16. Best Product Bundle Apps For Shopify In 2026 (Reviewed, https://themefic.com/best-product-bundle-apps-for-shopify/
17. How to Increase AOV on Shopify: 10 Proven Strategies - Skai Lama, https://www.skailama.com/blog/increasing-average-order-value-aov-on-shopify
18. Product bundles - Shopify Help Center, https://help.shopify.com/en/manual/products/bundles
19. The Ultimate Guide to Increasing Average Order Value (AOV) on, https://pumper.run/blog/increase-average-order-value-shopify-guide/
20. Standardized target and operation names across Function APIs, https://shopify.dev/changelog/posts/standardized-target-and-operation-names-across-function-apis
21. Shopify Bundles - Offer fixed bundles and multipacks to drive more, https://apps.shopify.com/shopify-bundles
22. Bundle Shopify : les 10 meilleures apps (août 2026) - Speed Ecom, https://speed-ecom.eu/blog/10-meilleures-applications-bundles-shopify/
23. Upsell and cross-sell - SASI - The Shopify App Store Index - By Mantle, https://sasi.heymantle.com/category/marketing-and-conversion-upsell-and-bundles-upsell-and-cross-sell
24. Bundler » Product Bundles App - Set up quantity breaks, volume, https://apps.shopify.com/bundler-product-bundles
25. Cart Transform/Discount Functions require Plus for custom apps but, https://community.shopify.dev/t/cart-transform-discount-functions-require-plus-for-custom-apps-but-not-public-apps-need-clarification-for-single-store-wholesale-pricing/25232
26. CartTransform - GraphQL Admin - Shopify Dev Docs, https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransform
27. Product Recommendations API reference - Shopify Dev Docs, https://shopify.dev/docs/api/ajax/reference/product-recommendations
28. Adding a related products section - Shopify Help Center, https://help.shopify.com/en/manual/online-store/themes/customizing-themes/common-customizations/add-product-recommendations
29. How to Increase Average Order Value on Shopify (9 Ways) - CROCart, https://crocart.prpwebs.com/blog/increase-average-order-value-shopify/
30. Reviews: Shopify Search & Discovery - Customize your storefront, https://apps.shopify.com/search-and-discovery/reviews
31. Wiser ‑ AI Search & Upsell App - Show Frequently bought together, https://apps.shopify.com/recommended-products-wiser
32. Shopify's Standard Product Taxonomy, https://help.shopify.com/en/manual/products/details/product-category
33. How to Build an AJAX Cart Drawer in Shopify (the 2026 Way), https://www.freecodecamp.org/news/shopify-ajax-cart-drawer/
34. Cart API reference - Shopify Dev Docs, https://shopify.dev/docs/api/ajax/reference/cart
35. [Feature request] Ajax API: Get full cart in /add.js request response, https://community.shopify.dev/t/feature-request-ajax-api-get-full-cart-in-add-js-request-response/21478
36. Cart-Icon-Bubble Issue in Shopify Horizon Theme (Public App, https://community.shopify.dev/t/cart-icon-bubble-issue-in-shopify-horizon-theme-public-app-context/23850
37. Requirements and considerations for using markets, https://help.shopify.com/en/manual/markets/getting-started/requirements-and-considerations
38. Customizing your checkout and customer accounts with apps, https://help.shopify.com/en/manual/checkout-settings/customize-checkout-configurations/checkout-apps
39. Buy X get Y discounts - Shopify Help Center, https://help.shopify.com/en/manual/discounts/discount-types/buy-x-get-y
40. How to automatically add free gift to cart when spending threshold is, https://community.shopify.com/t/how-to-automatically-add-free-gift-to-cart-when-spending-threshold-is-met-without-third-party-apps/370101
41. Shopify Bundle create a variation with and without add on product, https://community.shopify.com/t/shopify-bundle-create-a-variation-with-and-without-add-on-product/401776
42. Cart Transform Function API - Shopify Dev Docs, https://shopify.dev/docs/api/functions/latest/cart-transform
43. Post Purchase Upsell—ReSell - Reconvert - Shopify App Store, https://apps.shopify.com/resell
44. Checkout Blocks Pro - Shopify App Store, https://apps.shopify.com/checkout-blocks-pro
45. updateCart - Shopify Dev Docs, https://shopify.dev/docs/api/storefront-events-and-actions/actions/update-cart
46. Creating checkout blocks in the Checkout Blocks app, https://help.shopify.com/en/manual/checkout-settings/checkout-blocks/blocks/create-block
47. Using the checkout and accounts editor - Shopify Help Center, https://help.shopify.com/en/manual/checkout-settings/customize-checkout-configurations/checkout-editor
48. ReConvert Post Purchase Upsell - Reviews - Shopify App Store, https://apps.shopify.com/reviews/2271624
49. Customizing payment methods and delivery options at checkout, https://help.shopify.com/en/manual/checkout-settings/checkout-customization
50. Marking your order as on hold - Shopify Help Center, https://help.shopify.com/en/manual/fulfillment/fulfilling-orders/holding-fulfillments
51. Using Adyen on Shopify, https://help.shopify.com/en/manual/payments/third-party-providers/adyen-gateway
52. Advanced Subscriptions App - Offers seamless experience for, https://apps.shopify.com/advanced-subscription-pro
53. Essential Subscriptions App - Subscribe and save with bundles, free, https://apps.shopify.com/essential-subscriptions
54. Drive more sales with subscriptions - Shopify App Store, https://apps.shopify.com/shopify-subscriptions
55. Casa Subscriptions & Bundles - Shopify App Store, https://apps.shopify.com/recurring-order-subscription
56. Supr Bundle & Subscription App - Shopify App Store, https://apps.shopify.com/subscriptions-app
57. Reviews: Shopify Subscriptions - Drive more sales with subscriptions, https://apps.shopify.com/shopify-subscriptions/reviews
58. Use the Section Rendering API for dynamic ... - Shopify Dev Docs, https://shopify.dev/docs/storefronts/themes/best-practices/performance/use-section-rendering-api
59. cartTransforms - GraphQL Admin - Shopify Dev Docs, https://shopify.dev/docs/api/admin-graphql/latest/queries/cartTransforms
60. Customization options for Thank you and Order status pages, https://help.shopify.com/en/manual/checkout-settings/customize-checkout-configurations/customization-options
61. Shopify Plus plan launch checklist, https://help.shopify.com/en/manual/intro-to-shopify/plus-launch-checklist
62. AI-powered tools - Shopify Help Center, https://help.shopify.com/en/manual/ai-powered-tools
63. Agentic plan - Shopify Help Center, https://help.shopify.com/en/manual/intro-to-shopify/pricing-plans/plans-features/shopify-agentic-plan
64. Checkout Extensibility: What Replaced Scripts | BLKDG, https://www.blkdg.com/blog/checkout-extensibility-shopify-functions/
65. Shopify Scripts Are Gone: Mastering the Migration to Functions, https://coderapper.com/blog/commerce/migrating-from-shopify-scripts-to-functions/
66. Shopify checkout.liquid Is Gone: How to Replace Your Checkout, https://www.tryplusapps.com/blog/shopify-checkout-liquid-alternative
67. Customize Shopify Checkout Without Shopify Scripts (2026 Guide), https://webcontrive.com/blogs/newsroom/customize-shopify-checkout-without-shopify-scripts
68. Add Shopify 2.0 storefront product filtering - GitBook, https://themihub.gitbook.io/isotech-shopify-theme/general-topics-faq/add-shopify-2.0-storefront-product-filtering
69. ReConv Post Purchase Upsell - Reconvert Client with One Click, https://apps.shopify.com/post-purchase-upsell-funnel
70. Shopify Checkout Blocks - Customize your Checkout, Thank you, https://apps.shopify.com/checkout-blocks
71. Best Product bundles Apps For 2026 - Shopify App Store, https://apps.shopify.com/categories/marketing-and-conversion-upsell-and-bundles-product-bundles/all?page=3
72. Apps by Upsell.com ex ReConvert - Shopify App Store, https://apps.shopify.com/partners/stilyo
73. ReConvert: Features & Reviews | adtribute Directory, https://www.adtribute.io/directory/reconvert
74. Reconvert Post Purchase Upsell & Cross Sell - YouTube, https://www.youtube.com/watch?v=147IfynjiF0
75. Shopify Upsell and Cross-sell Apps: involve.me vs ReConvert Post, https://www.releas.it/cs/blogs/compare/shopify-upsell-and-cross-sell-apps-involve-me-vs-reconvert-post-purchase-upsell
76. Reviews: Post Purchase Upsell—ReSell - Shopify App Store, https://apps.shopify.com/resell/reviews
77. 429 Too many requests - Page 3 - Shopify CLI and Libraries, https://community.shopify.dev/t/429-too-many-requests/29212?page=3
