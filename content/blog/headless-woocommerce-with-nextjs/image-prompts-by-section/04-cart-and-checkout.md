# Cart sessions and checkout choices

Dimensions: 1600 × 1000 px (8:5).

Placement: After the two checkout approaches in “Building the Checkout”.

Suggested alt text: A cart session uses a Cart Token for later requests. Checkout can stay in WooCommerce with a session handoff or use a Next.js interface with a compatible gateway.

## Google Flow prompt

Create a still editorial diagram for a technical ecommerce blog. Use a white background, near-black text, thin gray outlines, restrained orange accents, and flat illustrations. Use the supplied headings and supporting copy with readable type and clear spacing.

Create a two-part diagram titled “From cart session to checkout”. Across the top, show “Request cart” → “WooCommerce returns a Cart Token” → “Send the token with later cart requests”. Add a short line below the flow: “WooCommerce uses the token to identify the same cart.”

Below, split into two checkout paths with this copy:

- “Keep WooCommerce checkout” / “Hand off the cart session before redirecting the shopper.”
- “Build checkout in Next.js” / “Submit through the Store API and verify that your payment gateway supports the flow.”

Use a cart icon in the shared flow and a distinct checkout screen for each path. Leave space for both explanations to sit below their headings.
