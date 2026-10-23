---
status: draft
title: "Aesthetika: Shopify Website Development for Rakhis and Jewellery"
seo_title: "Aesthetika | Shopify Development for Rakhis & Jewellery"
meta_description: "Shopify frontend development for Aesthetika, covering product metafields, collection filters, infinite scroll, a custom cart drawer, checkout, and SEO."
primary_keyword: "Shopify development for jewellery and accessories"
secondary_keywords:
  - "Shopify rakhi store development"
  - "Shopify jewellery website development"
  - "Shopify collection filtering"
  - "Shopify cart drawer customization"
---

# Aesthetika: Shopify Website Development for Rakhis and Jewellery

Aesthetika sells rakhis, jewellery, and accessories such as hair clips and bracelets. The website has different product categories, so users need a way to find products by type, style, colour, and price without going through the entire collection.

My work was mainly focused on frontend development and connecting it to the Shopify backend. This included the homepage, dynamic product pages, collection pages with advanced filtering, custom metafields, and a Shopify cart drawer with related products and add-ons. I also integrated a one-click checkout option and worked on the website SEO.

The frontend follows a responsive layout and was developed for a mobile-first experience. The main focus was to make product browsing, viewing product details, and moving towards checkout easier for users.

## What did I develop for Aesthetika?

The work included these parts of the website:

- Homepage with product categories and collection sections.
- Dynamic product pages connected to the Shopify backend.
- Custom metafields for product descriptions and other product details.
- Collection pages with advanced filtering and infinite scroll.
- Shopify cart drawer with related products and add-ons.
- One-click checkout integration.
- Product page SEO, image optimization, structured data, and FAQs.

These parts are connected. For example, a user can start from a rakhi category on the homepage, filter the collection, open a product, and add it to the cart. The frontend needs to support this complete process, along with showing the correct product information from Shopify.

## How is the homepage structured?

The homepage has a search bar, category navigation, and a large banner for the rakhi collection. The navigation includes Rakhis, Bhai Bhabhi Rakhis, Rakhis for Girls, Kids Jewellery, Hair Accessories, and other store sections.

Below the banner, the website shows separate categories such as Premium Rakhis, Funky Rakhis, Kids Rakhis, Thread Rakhis, Bracelet Rakhi Sets, Bhai Bhabhi Sets, and Lumbas. Each category has an image, so users can see the type of product before opening the collection.

This is useful because someone looking for a bracelet rakhi and someone looking for a kids rakhi do not need to browse the same set of products first. They can directly open the category that matches what they are looking for.

The homepage also has Women Jewellery and Unisex Jewellery sections, followed by kids jewellery and hair accessories. This gives the other products a place on the homepage along with the rakhi collection.

## How did I connect product pages to the Shopify backend?

I developed dynamic product pages and connected the frontend to the Shopify backend. I also made several custom metafields to store product descriptions and other product details.

Different products need different information. A rakhi, a jewellery set, and a hair clip can use a common product page layout, but the details shown on that page need to belong to the selected product.

The custom metafields were used for storing this additional information. The frontend can then display the information for that product in the required part of the page. Shopify explains this use of custom product data in its [metafields documentation](https://help.shopify.com/en/manual/custom-data/metafields).

The product page shows a large product image along with the title, price, product code, quantity selector, Add to Cart button, and Buy It Now button. It also has separate expandable sections for Product Details, Shipping and Delivery, and Return & Exchange.

This keeps the purchase options visible while giving users access to the other details before placing an order.

## Collection pages with advanced filtering

I developed collection pages with advanced filtering so users can narrow down the products instead of checking every item in the collection.

The collection pages show filters for price, product type, product style, and colour. For example, the Bhai Bhabhi collection shows styles such as Evil Eye, Floral, Kundan, Om, and Peacock. The hair clips collection has options such as Bow, Butterfly, Floral, Rainbow, and Unicorn.

The filters need to match the type of products in the collection. A style that is useful for a rakhi collection may not be useful for hair clips, so the available options should help users choose from the products they are actually viewing.

The product grid shows images, names, and prices. The hair clips collection also shows the product count and a sorting control, which gives users another way to browse the collection.

### Infinite scroll for loading more products

I used infinite scroll on the collection pages so users can continue browsing products without opening the next collection page manually.

This reduces the number of separate page loads during browsing. It is useful when users want to look through more designs before choosing one, rather than stopping at the end of each page to continue.

Infinite scroll still needs to work with the selected filters. Loading more products should continue the collection the user is browsing, including the filters they have already applied.

## Product recommendations and the sticky Add button

The product page also includes a Best Sellers section with other products from the store. This gives users more products to look at after viewing the main product information.

The lower product page view shows a compact Add button with the current product image, name, and price. This keeps an option to add the product available further down the page, where the main Add to Cart button is no longer in view.

For a product page with multiple sections, this is useful because a user may read more information before deciding to buy. They can use the compact Add button without going back to the top of the page.

## Shopify cart drawer with related products and add-ons

I integrated a Shopify cart drawer which shows the selected products and supports related products and add-ons. The purpose was to let users review their cart and see other relevant products before proceeding to checkout.

The cart drawer shows product images, names, prices, quantity controls, and an option to remove products. It also has an order note option, savings, subtotal, and a checkout button with the cart amount.

The cart view includes progress towards free shipping and a discount threshold. Instead of only showing an offer message, it also shows how much more the user needs to spend to reach the next benefit.

For a store selling rakhis and accessories, users may want to buy more than one product. Related products and add-ons give them an option to add another item while reviewing the cart.

This was part of the conversion rate optimization work on the website. The focus was on making the cart more useful before checkout, including product selection, offer information, and the order total.

## One-click checkout integration

I integrated a one-click checkout option to give users a faster way to move towards checkout. The product page has both Add to Cart and Buy It Now, so users have an option to continue shopping or move directly towards buying the selected product.

Reducing extra steps in this process was the main purpose of the checkout work. However, a faster route into checkout does not mean every customer can complete payment with a single click. The remaining steps depend on the checkout setup and the information required for that order.

## What SEO work did I do?

I worked on the product page meta titles, meta descriptions, and SEO-friendly slugs. The purpose was to give each product page information that describes the product, rather than using the same generic text across different pages.

I also worked on image optimization. The website uses large product images, so image size is an important part of the page loading experience. WebP can help reduce image file size, but the image dimensions and compression also need attention. Google's [image performance guide](https://web.dev/learn/performance/image-performance) covers these factors.

Product structured data was also part of the SEO work. This provides product information in a format that search engines can process and can make pages eligible for supported product search features. Google describes these features in its [product structured data documentation](https://developers.google.com/search/docs/appearance/structured-data/product).

I also added FAQs on the homepage and product pages for common user questions. These give users another way to find answers before deciding to buy, along with the product details, shipping information, and return information already available on the website.

## What this project covered

For Aesthetika, my work covered the frontend and its connection to the Shopify backend, along with collection browsing, product information, cart functionality, checkout integration, and SEO.

The website needed to handle different types of products while keeping the buying process easy to follow. The category sections help users start browsing, the filters help them narrow down products, and the product pages and cart provide the details needed before checkout.

If you need similar work for a rakhi, jewellery, or accessories store, you can [share your Shopify project requirements](/contact-us).

## Frequently asked questions

### 1. Can Shopify be used for a rakhi and jewellery website?

Yes. Aesthetika uses Shopify for a store with rakhis, jewellery, hair accessories, and other product categories. My work included developing the frontend and connecting product information and shopping functionality to the Shopify backend.

### 2. What pages did you develop for Aesthetika?

I developed the homepage, dynamic product pages, and collection pages with advanced filtering. The work also included a Shopify cart drawer, infinite scroll on collection pages, and a one-click checkout integration.

### 3. Why use custom metafields on Shopify product pages?

Custom metafields store additional information for products. For this project, I used them for product descriptions and other product details, which were then connected to the frontend for displaying the relevant information.

### 4. What filters are useful for a jewellery and accessories store?

Price, product type, style, and colour are useful starting points. The options need to match the collection. For example, the hair clips collection shows styles such as Bow and Butterfly, while the rakhi collection has different style options.

### 5. Can Shopify collection pages have infinite scroll?

Yes. I used infinite scroll on Aesthetika's collection pages so users could continue browsing more products without manually opening the next page. This was part of the collection page development work.

### 6. What does a Shopify cart drawer do?

A cart drawer lets users review their selected products without moving to a separate cart page. Aesthetika's cart drawer shows product details, quantity controls, savings, subtotal, offer progress, and a checkout button.

### 7. Can related products and add-ons be included in the cart?

Yes. Related products and add-ons were part of the cart drawer work for this project. They give users an option to consider another product while reviewing the items they have already selected.

### 8. Is one-click checkout the same as the Add to Cart button?

No. Add to Cart puts the selected product in the cart, where users can review it or continue shopping. The direct checkout option gives users a route towards buying that product without following the same browsing steps.

### 9. What SEO work was included in this project?

The work included product page meta titles, meta descriptions, SEO-friendly slugs, image optimization, product structured data, and FAQs on the homepage and product pages. These were included along with the frontend development work.

### 10. Was the website developed for mobile users?

Yes. The frontend was developed with a mobile-first approach and a responsive layout. This included considering how users browse collections, view product information, and use shopping controls on smaller screens.

<!-- REVIEW NOTES — exclude from the public portfolio page.
Voice sources read: scalefront-voice/VOICE.md and all five references/voice-*.md files. The user's latest correction takes priority over a polished agency tone. Keep their direct first-person phrasing, concrete feature names, and explanations of what each part does. Correct spelling without replacing their phrasing with abstract marketing copy.
Project source: content/portfolio/aesthetika/index.md. Do not treat Klaviyo or Shopify Flow from the user's STYLE example as Aesthetika integrations; no app or checkout provider was named in the project notes.
All nine supplied PNG files were visually reviewed:
- /portfolio/aesthetica/covers/cover.png: homepage banner, search, navigation, and collection entry.
- /portfolio/aesthetica/home/home-1.png: byte-identical to covers/cover.png; reviewed independently.
- /portfolio/aesthetica/home/home-2.png: Women Jewellery, Unisex Jewellery, kids jewellery and accessories sections.
- /portfolio/aesthetica/home/home-3.png: category tiles for different rakhi types and sets.
- /portfolio/aesthetica/collection/collection-1.png: Bhai Bhabhi product grid with price/type/style/colour filters.
- /portfolio/aesthetica/collection/collection-2.png: hair clips collection, product count, sorting, and filters.
- /portfolio/aesthetica/product/product-1.png: product photography, title, pricing, quantity, product code, Add to Cart, Buy It Now, and expandable details.
- /portfolio/aesthetica/product/product-2.png: Best Sellers, footer, and compact Add control; a visible placeholder product card is not described as finished work.
- /portfolio/aesthetica/cart/cart.png: cart items, quantity/removal controls, note, offer progress, savings, subtotal, and checkout.
Screenshots establish visible presentation. Mobile-first development, metafields, infinite scroll, related products/add-ons, checkout integration, and SEO implementation come from the author's notes, not behaviour tested in screenshots. Exact metafield definitions and app/provider identities are unconfirmed.
The cart screenshot does not visibly show recommendations/add-ons; those are documented in index.md. Do not claim the screenshot demonstrates the recommendation system.
The notes describe substantially improved conversion. This draft describes the work and its purpose without inventing an uplift or measured result. Confirm the checkout provider and actual flow before making a stronger one-click/payment claim.
The SEO section does not claim WebP alone guarantees Core Web Vitals, structured data guarantees rich results, or FAQs/product schema guarantee AI citations. PNG portfolio screenshots do not establish the live storefront's delivered image formats.
Google's general structured data guidelines explicitly do not guarantee rich-result display: https://developers.google.com/search/docs/appearance/structured-data/sd-policies
Brand spelling follows the user's project overview, Aesthetika. The screenshots appear to use Asthetika; confirm the preferred published spelling. Keep the supplied asset folder aesthetica distinct from the content folder aesthetika.
Draft only. No route, website layout, listing, or deployment has been changed.
-->
