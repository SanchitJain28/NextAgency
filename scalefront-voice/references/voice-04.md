# Headless woocommerce with NextJs

## Understanding headless woocommerce architecture

- Headless woocommerce in simple language can be said as a ecommerce platform in which the backend and the frontend are seperated
- In this setup , Wordpress / Woocommerce handle the backend of the website such as product , cotagories , order data , inventory management and other core ecommerce login
- While the frontend is hosted or run on a separate frontend framework such as NextJs , Swelte or any other framework , it handles frontend / consumer facing ecommerce actions like cart , wishlist , product page , categories page and other consumer facing pages
- frontend communicates why API endpoints such as Woocommerce REST API for fetching product data / categories data or Woocommerce GraphQL api , which is a single endpoint , and server sends only the requested data by the API (no overfetching)

## When Headless is suitable for you

- When you have different ecommerce channels to operate ,then this architecture is suitable as Woocommerce gives you the unified backend , and will be responsible for all the ecommece actions across multiple channels

- When you need custom frontend or 3D product models : Frontend Frameworks such as NextJS makes it possible to make a custom frontend or #d visuals , suppose a jewellery ecommerce needs a custom feature like where user can visualize the necklace on thier neck. then then this architecture is suitable for you

## How SEO gets changed ?

- NextJS handles SEO through Server side components which server pre rendered HTML directly on the server , but we needs to make sure that it is not client side rendered (through "use client directive") if website rendered through client side ,then it can make the SEO worse than before , and this practice should be avoided

- NextJS does not have any plugins like Yoast SEO , so you must configure the code directly to improve the on site SEO of the website
