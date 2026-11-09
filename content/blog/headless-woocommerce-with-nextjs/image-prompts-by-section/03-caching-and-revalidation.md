# Storefront caching and revalidation

Dimensions: 1600 × 1000 px (8:5).

Placement: At the end of “Step 6: Plan Caching Before Going Live”.

Suggested alt text: Public catalog data can be cached, price and stock updates need a freshness plan, and customer data stays out of the shared cache.

## Google Flow prompt

Create a still editorial diagram for a technical ecommerce blog. Use a white background, near-black text, thin gray outlines, restrained orange accents, and flat illustrations. Use the supplied headings and supporting copy with readable type and clear spacing.

Create a diagram titled “What should the storefront cache?”. Use three lanes with labels and supporting lines:

- “Public catalog” / “Cache stable details such as descriptions, images, and categories.”
- “Price and stock” / “Refresh after changes so product pages show current information.”
- “Customer sessions” / “Keep carts, checkout details, and accounts out of the shared cache.”

In the price and stock lane, illustrate a small flow labeled “Product changes in WooCommerce” → “Webhook notifies Next.js” → “Revalidate product cache”. In the private lane, draw a separate path with a lock icon that bypasses the shared cache. Make the short explanations easy to read without relying on the lane colors.
