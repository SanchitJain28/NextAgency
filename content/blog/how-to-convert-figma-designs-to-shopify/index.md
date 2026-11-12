---
title: "Figma to Shopify: How to Convert Designs into a Custom Shopify Theme"
description: "Learn how to convert Figma designs into editable Shopify themes using Liquid sections, blocks, JSON templates and responsive CSS, with a complete section implementation."
slug: "how-to-convert-figma-designs-to-shopify"
author: "Scalefront Team"
category: "Shopify Theme Customization"
date: "2025-12-05"
updatedAt: "2026-11-12"
faqs:
  - question: "Can you convert Figma to Shopify automatically?"
    answer: "There is no reliable one-click conversion from a Figma file to a production Shopify theme. Export tools and AI can help with assets, layout, and starter code. The theme still needs editable sections, real product and collection data, responsive layouts, and working variant selection and cart behavior."
  - question: "Can I use an existing Shopify theme for my Figma design?"
    answer: "Yes. Compare the design against the theme’s existing product templates, sections, and editor settings first. If most of the structure works and only a few areas differ, keep the theme and build custom sections for those areas. If most templates need to be rebuilt, scope a custom theme before piling on overrides."
  - question: "Can I paste Figma-exported HTML into a Shopify theme?"
    answer: "You can reuse portions of the HTML and CSS as a starting point. To make the result useful in Shopify, move repeated markup into Liquid sections or snippets, define section settings and blocks, and connect the templates to store data. A static Add to Cart button also needs to submit the selected variant through the theme’s product form."
  - question: "What should a designer include in a Figma handoff for Shopify?"
    answer: "Provide desktop and mobile layouts, reusable components, design tokens, image assets, and examples of long or missing content. Include states such as sold-out variants, cart errors, and empty collections. Mark the text, images, links, and layouts merchants need to change in the Theme Editor."
  - question: "Can Claude Code use Figma MCP to build Shopify theme sections?"
    answer: "Yes, as an assisted workflow. Figma MCP gives Claude Code design context from the selected frame, and the Shopify AI Toolkit can supply Liquid documentation and validation. Ask for one section that fits the existing theme, review the code and schema, and test its layout and behavior in an unpublished theme."
  - question: "How do I test a Figma-based Shopify theme without changing my live store?"
    answer: "Duplicate the current theme for a baseline, then work on a feature branch and use Shopify CLI to preview your changes with store data. Upload the reviewed code to an unpublished theme for stakeholder testing. Check Theme Editor controls, real products, mobile layouts, and cart interactions before publishing the approved theme."
  - question: "What is the difference between shopify theme dev and shopify theme push?"
    answer: "Use shopify theme dev for an interactive preview that updates as you edit local theme files. Use shopify theme push to upload files to a theme in the store’s theme library. For a separate review copy, push to a new unpublished theme and use the preview link Shopify CLI returns."
  - question: "How should a team use GitHub for Shopify theme changes?"
    answer: "Start from the current theme code, work in feature branches, and review changes in pull requests. Shopify’s GitHub integration syncs a connected theme with its branch and can commit changes made in Shopify Admin back to that branch. Connect a staging branch to an unpublished theme and pull its latest changes before editing the same files."
  - question: "Will merchants be able to edit the new sections in Shopify?"
    answer: "Yes, if the developer exposes the right controls through the section schema. For a promotional grid, the heading and spacing can be section settings, while images, links, and copy belong on editable card blocks. Test adding, deleting, and reordering blocks with the merchant’s own content."
  - question: "How much does it cost to convert Figma designs to Shopify?"
    answer: "Price depends on how much of the existing theme can be reused, how many unique sections and templates need development, and whether product forms, cart behavior, or apps need custom integration. Ask for a quote that lists the included templates, review rounds, testing, handoff, and any theme or app fees separately."
  - question: "How long does a Figma-to-Shopify project take?"
    answer: "A few sections on a compatible theme generally take less time than a custom build that replaces multiple templates. Confirm the designs and assets are ready, then account for mobile layouts, app integrations, merchant review, and launch testing. Agree on what starts the delivery window and what needs approval before launch."
  - question: "Do I need a headless storefront to match my Figma design?"
    answer: "Most unique storefront layouts can be built with Liquid, JSON templates, CSS, and JavaScript. Consider headless when the storefront needs architecture that a theme cannot adequately support, such as shared routing with a larger app or a separate content system. Include hosting, cart integration, accounts, and SEO in that decision."
image: "/blog/how-to-convert-figma-designs-to-shopify/cover.webp"
---

# Figma to Shopify: How to Convert Designs into a Custom Shopify Theme

Converting a Figma design into Shopify is not as simple as exporting the HTML and CSS from Figma and uploading it to Shopify. Figma gives you the design of a page, but Shopify needs a working theme where products, collections, images, prices and other content come from your store data.

**Can you convert Figma to Shopify automatically?** No, there is no reliable one-click conversion to a production Shopify theme. Export tools and AI can help with assets and starter code, but you still need to connect the layout to store data, make it editable, and test how variants, cart, and mobile layouts work.

Suppose your designer creates a product page with a product gallery, different color options, a custom size chart and an Add to Cart button. In Figma, all these elements can be placed using sample images and text. But when you build the page in Shopify, the gallery should show the correct product images, the price should change with the selected variant, and Add to Cart should submit the correct variant. It should also work when a product has no images, when a variant is sold out, and when the customer opens the store on mobile.

There are different approaches to converting a Figma design into Shopify. You can customize an existing theme, develop custom Liquid sections, build a new theme, or use a headless frontend. Let's discuss which approach makes sense, how the development works, and the problems you should check before publishing the theme.

## Different Ways to Convert Figma Designs to Shopify

### 1. Customize an existing Shopify theme

This is the first approach I recommend checking. If your Figma design follows a common ecommerce layout, you may not need to develop an entire theme from scratch.

Shopify themes such as [Dawn](https://themes.shopify.com/themes/dawn/styles/default) and other themes from the [Shopify Theme Store](https://themes.shopify.com/) already include product templates, collection pages, navigation, cart functionality and mobile layouts. You can change colors, typography, spacing and the order of available sections through the Theme Editor. For more specific changes, a developer can modify the theme's Liquid, CSS and JavaScript.

Suppose your Figma homepage has an image banner, a featured collection, a text-and-image section and customer testimonials. If an existing theme already supports most of this layout, modifying it is usually more practical than rebuilding every component.

**Recommendation:** Use an existing theme when the design is close to its current structure and the required functionality already works. Before buying a paid theme, check its demo and available section settings against the Figma file. A design that needs extensive structural changes may be harder to maintain if it is implemented only through CSS overrides.

### 2. Build custom sections on an existing theme

Sometimes the design is mostly standard, but a few sections are unique. In that case, I recommend keeping the existing theme and creating custom Liquid sections for those specific areas.

For instance, a fashion store might use a standard product template but need a custom homepage section with an unusual promotional grid. A developer can create that grid as a new Shopify section, add configurable images and links, and make it available in the Theme Editor.

This approach is especially useful because the merchant can update the content later without asking the developer to change the code every time a new campaign starts.

There are also visual page-building tools, including [Replo](https://www.replo.app/), [PageFly](https://pagefly.io/) and [Instant](https://instant.so/). They may be worth evaluating for campaign pages or when a team needs frequent visual changes. However, check how the generated content is hosted, how much of it can be edited without the app, and how it affects page performance. An app-built page is not automatically equivalent to native Shopify section code.

### 3. Build a completely custom Shopify theme

If most pages require a different layout or the existing theme has to be rewritten heavily, building a custom theme may make more sense.

Shopify themes use Liquid for dynamic content, JSON templates to arrange sections, and CSS and JavaScript for presentation and interactions. A custom theme can use the same Shopify products, collections and checkout while providing a different storefront design.

It is important to keep the theme editable. A custom theme should not mean hardcoding every product title, banner and button into Liquid files. If a merchant has to contact a developer just to change a homepage image, the implementation is unnecessarily difficult to manage.

Custom theme development gives more control over the storefront, but it also means your team must maintain the code and test it when Shopify, apps or store requirements change. It does not remove Shopify's platform restrictions.

### 4. Build a headless Shopify storefront

Another option is headless development, where Shopify handles commerce data and a separate frontend—such as a React-based application—handles the storefront.

I would not recommend headless simply because the Figma design looks different from an existing Shopify theme. Liquid themes can support a wide range of custom layouts, animations and interactions.

Consider headless when there is a specific architectural requirement, such as combining commerce with a larger web application, using a separate content architecture, or needing routing and frontend behavior that is difficult to achieve with Shopify themes. You will also need to plan for cart behavior, customer accounts, SEO, hosting and app integrations that might otherwise work directly in a Liquid theme.

For most design-to-Shopify projects, **an existing theme with custom sections or a well-built custom Liquid theme is the better starting point**.

![Four Figma-to-Shopify approaches compared by how much of the storefront needs to change](/blog/how-to-convert-figma-designs-to-shopify/01-conversion-approaches.webp)

## Why You Cannot Simply Export Figma to Shopify

The important difference is that Figma represents what the page should look like, while Shopify must decide what content to show and how the page behaves.

Take a featured-product card. In Figma, the designer might specify one product image, one title, one price and a button. In Shopify, that card should load actual product data. If the merchant changes the product image or price in Admin, the storefront should update without editing the theme.

The same issue applies to other parts of the store. A collection grid needs to work with different product counts. A product page needs to support available and unavailable variants. A testimonial section may contain three blocks this month and five next month.

A Figma-to-code tool can sometimes generate HTML and CSS that resembles the design, but that is only one part of the job. It does not necessarily create Shopify schema settings, dynamic content connections, product forms or reusable theme components.

## How Shopify Theme Architecture Works

Before converting the design, it helps to understand a few important folders in a Shopify theme.

| Theme folder | What it is used for                                                           |
| ------------ | ----------------------------------------------------------------------------- |
| `layout/`    | The shared HTML layout, including `theme.liquid`                              |
| `templates/` | JSON templates for product, collection, homepage and other page types         |
| `sections/`  | Editable sections such as banners, featured collections and promotional grids |
| `blocks/`    | Reusable theme blocks supported by modern Shopify themes                      |
| `snippets/`  | Reusable Liquid markup called from other theme files                          |
| `assets/`    | CSS, JavaScript and theme assets                                              |
| `config/`    | Theme settings and their saved values                                         |
| `locales/`   | Translation files                                                             |

The distinction between sections, blocks and snippets is important.

A **section** is usually a larger area of the page, such as a hero banner or product recommendations section. A **section block** is an editable item defined inside one section, like a single testimonial card. Modern **theme blocks** live in the `blocks/` folder and can be reused across compatible sections. A **snippet** is useful for repeated markup or logic but does not have its own merchant-facing schema settings.

Shopify also supports nesting compatible theme blocks. That can be useful when the Figma design has reusable elements inside other elements, although not every existing theme uses this newer architecture.

Your main goal should be to map the Figma design to sections and blocks that merchants can actually manage. Shopify's [theme architecture documentation](https://shopify.dev/docs/storefronts/themes/architecture) explains these components in detail.

## Preparing the Figma File Before Development

I recommend reviewing the complete Figma file before writing any Liquid code. Doing this can prevent a lot of rework later.

First, check whether the designs include mobile layouts. If the file only contains desktop screens, the developer still has to decide how the navigation, banners, product grids and interactive components should behave on smaller devices. These decisions should be agreed upon rather than guessed during development.

Next, identify repeated components. If the same image-and-text design appears on several pages, it may be better to build one configurable Shopify section instead of copying the same markup into multiple templates.

Also check the different states of each component. Product cards need to handle long names, missing images and sold-out products. Forms need error and loading states. Collection layouts should not break when only one product is returned.

For developer handoff, [Figma Dev Mode](https://www.figma.com/dev-mode/) can help inspect dimensions, spacing, styles and assets. But the measurements are still a starting point. They need to be translated into flexible CSS rather than copied as fixed pixel positions everywhere.

I would also decide which settings should be editable by the merchant. A banner's image, heading, link and spacing might need Theme Editor controls. The underlying responsive grid and interaction logic usually should remain part of the theme code.

## Develop on a Duplicate Theme With Shopify CLI and Git

Start in Shopify Admin under **Online Store → Themes** and [duplicate the current theme](https://help.shopify.com/en/manual/online-store/themes/managing-themes/duplicating-themes). Keep the duplicate as a baseline for the redesign. If the theme already has a Git repository, start from its current branch and check whether any recent Theme Editor changes need to be brought into Git. If there is no repository, pull the duplicate into an empty project directory and commit that starting point before changing it.

```bash
# Start from the duplicate in a new, empty project directory.
# Replace the store domain and theme ID with your own values.
SHOPIFY_THEME_STORE="example.myshopify.com"
shopify theme list --store "$SHOPIFY_THEME_STORE"
shopify theme pull --store "$SHOPIFY_THEME_STORE" --theme 123456789

git init -b main
git add .
git commit -m "Capture the current Shopify theme"
git switch -c figma-promo-grid

# Start a development preview that reloads as local files change.
shopify theme dev --store "$SHOPIFY_THEME_STORE"
```

Once the promotional grid below is in your working copy, open the preview URL and add the section in the development theme's Theme Editor. Check it with real products and merchant content. If you make Theme Editor changes that should ship with the code, bring the relevant template and settings changes into the working copy and review them alongside the section code before uploading the review theme.

```bash
# From the theme directory, after implementing and reviewing the changes.
shopify theme check
git add sections/figma-promo-grid.liquid
git commit -m "Add editable promotional grid section"

# Create a separate review theme and share the preview URL from the output.
shopify theme push --store example.myshopify.com --unpublished --theme "Figma redesign review"
```

Use the returned theme ID for later uploads to that same unpublished review theme. Confirm the ID before each push. Once the merchant approves the review theme, publish it from the theme library and keep the previous theme available if you need to switch back.

If the team uses the [Shopify GitHub integration](https://shopify.dev/docs/storefronts/themes/tools/github), connect a staging branch to an unpublished theme and use pull requests to review updates. Shopify syncs changes from that branch to the connected theme and commits saved Admin edits back to the branch. Pull those changes before editing the same settings locally. For a connected review theme, use the branch as the delivery path for code changes.

![A duplicate theme provides a baseline, a Git branch holds changes, and Shopify CLI creates development and unpublished review previews](/blog/how-to-convert-figma-designs-to-shopify/02-duplicate-theme-cli-git.webp)

For the command options and preview behavior, see [Shopify CLI for themes](https://shopify.dev/docs/storefronts/themes/tools/cli), [theme dev](https://shopify.dev/docs/api/shopify-cli/theme/theme-dev), and [theme push](https://shopify.dev/docs/api/shopify-cli/theme/theme-push).

## Actual Implementation: Convert a Figma Promotional Grid into a Shopify Section

Suppose your Figma homepage has a heading and a row of promotional cards. Each card contains an image, a title, some text and a button. The merchant wants to add or remove cards later and choose where each button links.

We can build this as a Shopify Liquid section without installing a page-builder app. The example below is a **complete, self-contained section** using section blocks, which are supported by standard Online Store 2.0 themes.

### Step 1: Create the section file

In your local theme project, create `sections/figma-promo-grid.liquid` and add the code below. If you are using Shopify Admin instead of the CLI workflow, open **Online Store → Themes → Edit code** on the duplicate theme and create the same file there.

```liquid
<section class="figma-promo figma-promo--{{ section.id }}">
  <div class="figma-promo__inner">
    {% if section.settings.heading != blank %}
      <h2 class="figma-promo__heading">
        {{ section.settings.heading | escape }}
      </h2>
    {% endif %}

    {% if section.settings.description != blank %}
      <div class="figma-promo__intro rte">
        {{ section.settings.description }}
      </div>
    {% endif %}

    <div class="figma-promo__grid">
      {% for block in section.blocks %}
        <article class="figma-promo__card" {{ block.shopify_attributes }}>
          {% if block.settings.image != blank %}
            <div class="figma-promo__media">
              {% liquid
                assign image_loading = 'eager'
                if section.index > 2 or forloop.index > 2
                  assign image_loading = 'lazy'
                endif
              %}
              {{ block.settings.image
                | image_url: width: 1200
                | image_tag:
                  widths: '320, 480, 640, 900, 1200',
                  sizes: '(min-width: 990px) 33vw, (min-width: 650px) 50vw, 100vw',
                  loading: image_loading,
                  class: 'figma-promo__image'
              }}
            </div>
          {% endif %}

          <div class="figma-promo__content">
            {% if block.settings.heading != blank %}
              <h3>{{ block.settings.heading | escape }}</h3>
            {% endif %}

            {% if block.settings.text != blank %}
              <p>{{ block.settings.text | escape }}</p>
            {% endif %}

            {% if block.settings.link != blank and block.settings.button_label != blank %}
              <a class="figma-promo__link" href="{{ block.settings.link }}">
                {{ block.settings.button_label | escape }}
              </a>
            {% endif %}
          </div>
        </article>
      {% endfor %}
    </div>
  </div>
</section>

{% style %}
  .figma-promo--{{ section.id }} {
    padding: {{ section.settings.padding_y }}px 20px;
  }

  .figma-promo--{{ section.id }} .figma-promo__inner {
    max-width: 1200px;
    margin-inline: auto;
  }

  .figma-promo--{{ section.id }} .figma-promo__heading {
    font-size: clamp(1.75rem, 3vw, 2.75rem);
    line-height: 1.2;
    margin: 0 0 12px;
  }

  .figma-promo--{{ section.id }} .figma-promo__intro {
    max-width: 65ch;
    margin-bottom: 28px;
  }

  .figma-promo--{{ section.id }} .figma-promo__grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
  }

  .figma-promo--{{ section.id }} .figma-promo__card {
    min-width: 0;
    border: 1px solid #e5e5e5;
    border-radius: 12px;
    overflow: hidden;
  }

  .figma-promo--{{ section.id }} .figma-promo__media {
    aspect-ratio: 4 / 3;
    overflow: hidden;
  }

  .figma-promo--{{ section.id }} .figma-promo__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .figma-promo--{{ section.id }} .figma-promo__content {
    padding: 20px;
  }

  .figma-promo--{{ section.id }} .figma-promo__content h3 {
    margin: 0 0 10px;
    font-size: 1.25rem;
  }

  .figma-promo--{{ section.id }} .figma-promo__content p {
    margin: 0 0 16px;
  }

  .figma-promo--{{ section.id }} .figma-promo__link {
    display: inline-block;
    padding: 10px 16px;
    background: #222;
    color: #fff;
    text-decoration: none;
    border-radius: 4px;
  }

  .figma-promo--{{ section.id }} .figma-promo__link:focus-visible {
    outline: 3px solid currentColor;
    outline-offset: 3px;
  }

  @media (max-width: 989px) {
    .figma-promo--{{ section.id }} .figma-promo__grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 649px) {
    .figma-promo--{{ section.id }} .figma-promo__grid {
      grid-template-columns: 1fr;
    }
  }
{% endstyle %}

{% schema %}
{
  "name": "Figma promo grid",
  "settings": [
    {
      "type": "text",
      "id": "heading",
      "label": "Section heading",
      "default": "Explore our collections"
    },
    {
      "type": "richtext",
      "id": "description",
      "label": "Description"
    },
    {
      "type": "range",
      "id": "padding_y",
      "label": "Vertical spacing",
      "min": 0,
      "max": 120,
      "step": 4,
      "unit": "px",
      "default": 48
    }
  ],
  "blocks": [
    {
      "type": "promo_card",
      "name": "Promo card",
      "settings": [
        {
          "type": "image_picker",
          "id": "image",
          "label": "Image"
        },
        {
          "type": "text",
          "id": "heading",
          "label": "Card heading"
        },
        {
          "type": "text",
          "id": "text",
          "label": "Card text"
        },
        {
          "type": "text",
          "id": "button_label",
          "label": "Button label",
          "default": "Shop now"
        },
        {
          "type": "url",
          "id": "link",
          "label": "Button link"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Figma promo grid",
      "blocks": [
        { "type": "promo_card" },
        { "type": "promo_card" },
        { "type": "promo_card" }
      ]
    }
  ]
}
{% endschema %}
```

### Step 2: Add the section in Shopify Theme Editor

After saving the file, open the Theme Editor, select the page you want to customize, and choose **Add section → Figma promo grid**. The preset creates three editable card blocks.

You can now upload images, change card headings, add text, set button links and reorder or delete the cards. The vertical spacing control is also available without changing the code.

This is the main benefit of converting Figma components into proper Shopify sections: the layout is developed once, but the content remains editable.

### Step 3: Understand what the code actually does

The code uses three important Shopify features.

First, `{% schema %}` creates the settings that appear in the Theme Editor. Without the schema, the merchant would not be able to manage the section's heading or promotional cards through these controls.

Second, `{% for block in section.blocks %}` renders however many cards the merchant has added. `{{ block.shopify_attributes }}` helps Shopify identify the correct card when the merchant selects it in the editor.

Third, the section uses Shopify's `image_url` and `image_tag` filters rather than old `img_url` markup. This provides responsive image sources and image dimensions. The loading strategy makes early cards eager in sections near the top of the page and lazy-loads later cards. For an actual store, check which image becomes the LCP element before setting a high fetch priority or adding preloads.

The CSS uses a three-column desktop grid, a two-column tablet layout and a single-column mobile layout. You would replace the styling values with the actual Figma design tokens and test the result at different widths.

This is usable section code rather than pseudocode, but it still needs to be checked in the target theme. Fonts, global styles, link appearance and other components may differ between themes. Run Shopify Theme Check and preview the section before publishing.

For source documentation, see [Shopify sections](https://shopify.dev/docs/storefronts/themes/architecture/sections), [section schema](https://shopify.dev/docs/storefronts/themes/architecture/sections/section-schema), and [image filter guidance](https://shopify.dev/docs/storefronts/themes/best-practices/performance/use-shopify-image-filters-efficiently).

![The Figma promotional grid becomes a Liquid section with editable heading, spacing, and card blocks](/blog/how-to-convert-figma-designs-to-shopify/03-editable-promotional-grid.webp)

## When Should You Use Theme Blocks Instead?

The example uses **section blocks**, which belong to a single section. This is enough when the promotional card is only needed in that grid.

Modern Shopify also supports **theme blocks** in separate files under `blocks/`. If the same content component needs to be reused across several sections, theme blocks may be a better solution. These can be nested inside compatible blocks, giving merchants more control over page composition.

There is one architectural rule worth remembering: a section generally uses either locally defined section blocks or Shopify's theme block system. You should not mix both approaches inside the same section schema as if they were interchangeable.

For a larger Figma design system, I would plan reusable components before converting every screen. Otherwise the codebase can end up with several slightly different versions of the same card, button or content section.

Read [Shopify's theme block documentation](https://shopify.dev/docs/storefronts/themes/architecture/blocks) for the current implementation pattern.

## Building Product and Collection Pages from Figma

The promotional grid is a useful starting point, but product and collection pages need more care because they contain live store functionality.

### Product pages

A Figma product page may show the image gallery, price, size selector, stock status and Add to Cart button. In the live theme, these elements must stay connected to the selected product and variant.

A common mistake is hardcoding the displayed price in the template or updating only the text when a customer changes a variant. That can make the interface look correct while the form still adds a different variant to the cart.

When implementing a product page, use the theme's existing product form and variant-selection architecture where possible. If you replace it, ensure that variant IDs, availability, prices, images and form submission are all updated together.

Shopify supports products with up to **2,048 variants**, but some older theme patterns were built around much smaller arrays. Shopify's `product.variants` Liquid array has additional limitations; a design requiring a large number of variants needs a selector that follows Shopify's current option-value and section-rendering approach instead of assuming every variant is present in one JSON array.

A design can also request more than three independent native variant options. Shopify's standard product model still has a three-option limit. Additional customer inputs may need line item properties, separate products or an options app, depending on whether those choices affect SKU, inventory and price.

**Recommendation:** Before implementing a custom variant picker from Figma, test the design with the largest and most complicated product in the catalog—not just the sample product used in the mockup.

### Collection pages

Collection pages should use Shopify's real collection and filter data. If the Figma design includes filters for size, color or material, those filters need to be connected to supported Shopify storefront filtering rather than being treated as decorative buttons.

The developer should also test empty results, long product titles, sold-out products, pagination and mobile filter controls.

For more advanced filtering and search requirements, Shopify's [Search & Discovery](https://help.shopify.com/en/manual/online-store/search-and-discovery) app is a reasonable starting point before building a custom filtering system.

### Cart drawers and AJAX interactions

A custom cart drawer should show the actual cart state after a customer adds a product. Shopify provides an [Ajax Cart API](https://shopify.dev/docs/api/ajax/reference/cart) and a [Section Rendering API](https://shopify.dev/docs/api/ajax/section-rendering) for these workflows.

Avoid hardcoding `/cart/add.js` in a custom storefront script if the store uses localized URLs or international market subfolders. Shopify provides `window.Shopify.routes.root` to construct locale-aware Ajax paths. Also, theme-specific cart drawers depend on their existing markup and JavaScript, so copying a cart script from a different theme is not guaranteed to work.

## Responsive Design: The Figma File Is Not the Final Layout

A Figma design often contains one desktop frame and one mobile frame. But real devices have many widths between those two designs.

Instead of trying to preserve exactly the same pixel positions at every width, developers should decide how the layout changes: when the navigation collapses, when product grids lose a column, and how images are cropped.

For typography, CSS `clamp()` can help headings scale between smaller and larger screens without creating separate rules for every device. For images, Shopify's responsive image filters help browsers select an appropriate file size.

There is also a performance issue that appears frequently in Figma-to-Shopify projects: the developer creates two separate hero images and hides one with CSS for mobile. This may lead to unnecessary downloads depending on how the images are referenced. When separate mobile and desktop crops are required, a `<picture>` element with media queries is generally a better approach.

Keep accessibility in mind as well. Buttons and links must remain keyboard accessible, text needs sufficient contrast, and animations should respect reduced-motion preferences. A visually accurate page is not a successful conversion if shoppers cannot use it.

## Common Problems When Converting Figma to Shopify

### Problem 1: Everything is hardcoded

This happens when the developer treats each Figma frame as a fixed HTML page. The store looks close to the design at launch, but merchants cannot change content without editing code.

Use sections, blocks and settings for content that will need regular updates. Use metafields and metaobjects for structured product-specific content, such as size guides or material specifications.

### Problem 2: The design works with sample content but breaks with real products

A card might look fine with a short product title but become uneven when the product name occupies several lines. A product gallery might work with five images but not with one.

Test with actual store data, including missing or unusual content. The layout should be flexible enough to handle normal changes without being rebuilt.

### Problem 3: Too much JavaScript is added for visual effects

Figma prototypes can include animations, transitions and interactions that look attractive in a demonstration. But not every effect needs a large JavaScript library.

I recommend using CSS where it can handle the interaction appropriately. For more complex effects, measure the impact on mobile devices and keep the animation optional when reduced motion is requested.

### Problem 4: Product forms stop working after customization

This is more serious than a visual mismatch. Replacing a product section may accidentally remove variant selection, inventory checks, accelerated checkout controls or accessibility behavior.

If you customize an existing theme, preserve its working commerce logic unless you have a clear reason to replace it. Test the entire buying process after making changes.

### Problem 5: The theme becomes difficult to maintain

If every campaign page uses a separate copied section with slightly different code, fixing one component will not automatically fix the others.

Build shared components where it makes sense, name settings clearly and document unusual parts of the theme. The goal is not only to match the Figma design today but to keep the store usable when the merchant changes content later.

## Practical Tools for Figma-to-Shopify Development

You do not need an expensive or complicated stack for every project. Start with the tools required by the actual workflow.

| Tool                                                                                              | When I recommend it                                              |
| ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| [Figma Dev Mode](https://www.figma.com/dev-mode/)                                                 | Inspecting design measurements, assets and component details     |
| [Shopify Theme Editor](https://help.shopify.com/en/manual/online-store/themes/customizing-themes) | Merchant-editable settings and section layouts                   |
| [Shopify CLI](https://shopify.dev/docs/storefronts/themes/tools/cli)                              | Developing and previewing Liquid theme changes locally           |
| [Shopify Theme Check](https://shopify.dev/docs/storefronts/themes/tools/theme-check)              | Checking Liquid syntax, schema issues and outdated code patterns |
| [Chrome DevTools](https://developer.chrome.com/docs/devtools/)                                    | Testing responsive layouts, JavaScript and browser performance   |
| [PageSpeed Insights](https://pagespeed.web.dev/)                                                  | Comparing field and lab performance after changes                |

## What AI Can Do in a Figma-to-Shopify Workflow

[Figma MCP for Claude Code](https://help.figma.com/hc/en-us/articles/39888612464151-Claude-Code-and-Figma-Set-up-the-MCP-server) gives the agent access to layout, components, and design variables from Figma. The [Shopify AI Toolkit](https://shopify.dev/docs/apps/build/ai-toolkit) gives it Shopify documentation and tools that can validate Liquid. For a practical example, see this [October 2026 walkthrough of using Claude Code to build Shopify theme sections from design files](https://beljic.dev/blog/figma-pdf-screenshot-shopify-theme-claude-code).

I would start with one frame and the existing theme code. For the promotional grid above, ask the agent to map the design to an editable Shopify Liquid section, reuse the theme's CSS variables where appropriate, and make each card a block. Give it the expected mobile layout and explain what the merchant must be able to change. Review its plan before asking it to edit the theme.

AI can draft the Liquid, CSS, and schema. The Figma file usually leaves out what happens with missing data, sold-out variants, app blocks, or invalid cart requests. Test those cases yourself. Run Theme Check and preview the result in an unpublished theme, then verify that merchants can edit the section and shoppers can use it with real store data.

![Figma MCP supplies design context, Shopify AI Toolkit supplies developer resources, and a developer reviews and tests the drafted section](/blog/how-to-convert-figma-designs-to-shopify/04-ai-assisted-theme-workflow.webp)

## How to Test the Theme Before Publishing

Once the design is converted, compare it with the Figma file, but do not stop at visual comparison.

Test the homepage, product pages, collection pages and cart on both desktop and mobile. Check what happens when content is missing, when a product is unavailable, and when a customer changes a variant.

Run Shopify Theme Check to identify structural errors. Use Chrome DevTools to look for broken scripts and unexpected layout changes. Review PageSpeed Insights and real-user Core Web Vitals where enough data is available, but do not treat a single Lighthouse score as the final measure of quality.

It is also important to test the Theme Editor itself. Can the merchant edit text, replace images, reorder sections and remove blocks without breaking the layout? If not, the development may be too hardcoded even if the visual result is accurate.

Finally, complete a test purchase using the store's supported payment testing workflow before publishing major product-form or cart changes. Make sure the selected variant and any line item properties reach the order correctly.

![Prelaunch checks cover the storefront, theme editor, code, and a test purchase](/blog/how-to-convert-figma-designs-to-shopify/05-prelaunch-theme-checklist.webp)

## When Should You Hire a Shopify Developer?

You can handle smaller design changes yourself if your theme already offers the required settings. Changing colors, adjusting typography or arranging existing sections usually does not require a completely new theme.

A developer becomes useful when the design requires new Liquid sections, custom product templates, advanced variant interactions, unique collection filtering or changes to the cart. These features need more than just matching the CSS to Figma.

Before hiring someone, share the Figma file, explain which elements must be editable, and identify the integrations or existing apps the store depends on. This makes it easier to decide whether you should customize a theme, add new sections or build a custom theme.

I would avoid agreeing to a full theme rebuild before checking what your current theme can already do. Reusing a working foundation may reduce development and maintenance work, as long as it does not force major compromises in the design or functionality.

## Figma-to-Shopify Cost and Delivery Ranges

The cost and delivery window depend on how much of the current theme we can reuse, how many unique templates and sections need to be built, and what needs to happen in the product form, cart, and app integrations.

| Scope                                      | What the work covers                                                                                   | Agency price range                  | Delivery range    |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ----------------------------------- | ----------------- |
| Customize an existing theme                | Adapt typography, spacing, and layouts using existing templates and sections                           | Rs25000 to 50000 (300$ - 600$)      | 7 days - 10 days  |
| Build custom sections on an existing theme | Develop and test new editable sections while reusing the rest of the theme                             | Rs40000 to 60000 (500$ - 750$)      | 10 days - 14 days |
| Build a custom Liquid theme                | Develop the agreed templates, sections, and storefront interactions, then test and hand over the theme | ₹70,000–₹90,000 ($900–$1,200)   | 14 days - 21 days |
| Build a headless storefront                | Scope a separate frontend, data and cart integrations, hosting, and testing                            | Rs100000 to 120000 (1500$ to 2000$) | 21 days - 30 days |

To scope the work, share the Figma file, the list of unique page templates, the current theme, and the apps or integrations you need to keep. Confirm when the delivery window starts and how much time to allow for design feedback, merchant review, and launch testing.

## Final Recommendation

Converting Figma to Shopify is about making the design work with real Shopify data, not just making the page look similar to a mockup.

For standard layouts, start by checking an existing Shopify theme. If only a few parts of the design are different, build custom sections for those areas. Consider a full custom theme when most of the storefront needs a different structure. Headless should be reserved for projects with a genuine architectural requirement, not simply a unique Figma design.

The important part is that product pages, collection filters, cart interactions and merchant editing all work correctly after the design is converted. A theme that looks accurate but breaks when a merchant changes content is not a finished implementation.

If you need help converting a Figma design into an editable Shopify theme, see our [Shopify theme development service](/services/theme-development) or [contact Scalefront](/contact-us) to discuss whether theme customization or custom theme development is the right approach for your store.

## Technical References

- [Shopify theme architecture](https://shopify.dev/docs/storefronts/themes/architecture)
- [Shopify sections](https://shopify.dev/docs/storefronts/themes/architecture/sections)
- [Shopify section schema](https://shopify.dev/docs/storefronts/themes/architecture/sections/section-schema)
- [Shopify theme blocks](https://shopify.dev/docs/storefronts/themes/architecture/blocks)
- [Shopify JSON templates](https://shopify.dev/docs/storefronts/themes/architecture/templates/json-templates)
- [Shopify image filter best practices](https://shopify.dev/docs/storefronts/themes/best-practices/performance/use-shopify-image-filters-efficiently)
- [Shopify product variant limit](https://shopify.dev/changelog/posts/the-product-variant-limit-is-now-2048-for-all-merchants)
- [Shopify Ajax Cart API](https://shopify.dev/docs/api/ajax/reference/cart)
- [Shopify Section Rendering API](https://shopify.dev/docs/api/ajax/section-rendering)
- [Shopify CLI](https://shopify.dev/docs/storefronts/themes/tools/cli)
- [Shopify Theme Check](https://shopify.dev/docs/storefronts/themes/tools/theme-check)
