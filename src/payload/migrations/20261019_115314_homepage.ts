import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE SCHEMA IF NOT EXISTS "payload";
   CREATE TABLE "payload"."cms_users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "payload"."cms_users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"reset_password_requested_at" timestamp(3) with time zone,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "payload"."payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload"."payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload"."payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"cms_users_id" integer
  );
  
  CREATE TABLE "payload"."payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload"."payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"cms_users_id" integer
  );
  
  CREATE TABLE "payload"."payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload"."homepage_logos_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "payload"."homepage_projects_items_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "payload"."homepage_projects_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Iron Crate' NOT NULL,
  	"category" varchar DEFAULT 'Storefront' NOT NULL,
  	"description" varchar DEFAULT 'A custom sports nutrition store featuring an interactive 3-step supplement bundle builder, clear dosage accordions, and an AJAX drawer cart with real-time spend rewards.' NOT NULL,
  	"image_placeholder" varchar DEFAULT '/portfolio/iron-crate/covers/cover.png' NOT NULL,
  	"link" varchar DEFAULT '/work/iron-crate' NOT NULL
  );
  
  CREATE TABLE "payload"."homepage_services_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"no" varchar DEFAULT '01' NOT NULL,
  	"icon" varchar DEFAULT '{ }' NOT NULL,
  	"title" varchar DEFAULT 'Custom Shopify development' NOT NULL,
  	"blurb" varchar DEFAULT 'We build custom Shopify themes, private apps, and API integrations that match how you actually manage products and fulfill orders.' NOT NULL
  );
  
  CREATE TABLE "payload"."homepage_case_studies_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"brand" varchar DEFAULT 'Iron Crate' NOT NULL,
  	"industry" varchar DEFAULT 'Sports & Fitness' NOT NULL,
  	"headline" varchar DEFAULT 'Custom 3-step bundle builder and drawer cart.' NOT NULL,
  	"metric" varchar DEFAULT '+42%' NOT NULL,
  	"metric_label" varchar DEFAULT 'Increase in AOV' NOT NULL,
  	"description" varchar DEFAULT 'We replaced a generic theme with a custom build featuring a 3-tier supplement stack builder, clinical dosage tabs, and a slide-out cart with live free-shipping rewards.' NOT NULL,
  	"image_placeholder" varchar DEFAULT '/portfolio/iron-crate/covers/cover.png' NOT NULL,
  	"link" varchar DEFAULT '/work/iron-crate' NOT NULL
  );
  
  CREATE TABLE "payload"."homepage_results_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar DEFAULT '50+' NOT NULL,
  	"label" varchar DEFAULT 'Custom Shopify stores and storefronts launched' NOT NULL
  );
  
  CREATE TABLE "payload"."homepage_testimonials_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rating" numeric DEFAULT 5 NOT NULL,
  	"quote" varchar DEFAULT 'They rebuilt our storefront in six weeks and our conversion rate jumped 38% the first month. No agency has ever moved this fast.' NOT NULL,
  	"name" varchar DEFAULT 'Priya Sundaram' NOT NULL,
  	"role" varchar DEFAULT 'Founder, Verdant Skincare' NOT NULL,
  	"image" varchar DEFAULT 'https://i.pravatar.cc/150?u=1' NOT NULL
  );
  
  CREATE TABLE "payload"."homepage_pricing_items_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "payload"."homepage_pricing_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar DEFAULT 'Starter' NOT NULL,
  	"tagline" varchar DEFAULT 'Perfect for emerging brands needing a professional launch.' NOT NULL,
  	"price_i_n_r" varchar DEFAULT '₹25,000' NOT NULL,
  	"price_u_s_d" varchar DEFAULT '$490' NOT NULL,
  	"unit" varchar DEFAULT '1-2 weeks' NOT NULL,
  	"featured" boolean DEFAULT false,
  	"cta" varchar DEFAULT 'Start here' NOT NULL
  );
  
  CREATE TABLE "payload"."homepage_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"q" varchar DEFAULT 'How much does it cost to build a custom Shopify store in India?' NOT NULL,
  	"a" varchar DEFAULT 'Custom Shopify store development starts at ₹25,000 for standard theme setups. Full custom Liquid themes range between ₹50,000 and ₹75,000, while complex headless builds start at ₹1,00,000 depending on integrations and catalog size.' NOT NULL
  );
  
  CREATE TABLE "payload"."homepage" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_shopify_partner_based_in_gurgaon" varchar DEFAULT 'Shopify Partner · Based in Gurgaon' NOT NULL,
  	"hero_hire_shopify" varchar DEFAULT 'Hire Shopify' NOT NULL,
  	"hero_developer" varchar DEFAULT 'Developer' NOT NULL,
  	"hero_based_in_gurgaon_working_with" varchar DEFAULT 'Based in Gurgaon, working with Shopify brands across India. We build fast custom stores, private apps, and headless storefronts designed to convert.' NOT NULL,
  	"hero_href_contact_us" varchar DEFAULT '/contact-us' NOT NULL,
  	"hero_src_icons_call_png" varchar DEFAULT '/icons/call.png' NOT NULL,
  	"hero_alt_call_icon" varchar DEFAULT 'Call icon' NOT NULL,
  	"hero_book_a_call" varchar DEFAULT 'Book a call →' NOT NULL,
  	"hero_href_https_wa_me919650296375" varchar DEFAULT 'https://wa.me/919650296375' NOT NULL,
  	"hero_src_icons_whatsapp_png" varchar DEFAULT '/icons/whatsapp.png' NOT NULL,
  	"hero_alt_whatsapp_icon" varchar DEFAULT 'WhatsApp icon' NOT NULL,
  	"hero_whatsapp_us" varchar DEFAULT 'WhatsApp Us' NOT NULL,
  	"hero_text41" varchar DEFAULT '+41%' NOT NULL,
  	"hero_avg_conversion_lift" varchar DEFAULT 'avg. conversion lift' NOT NULL,
  	"hero_text180" varchar DEFAULT '180+' NOT NULL,
  	"hero_stores_shipped" varchar DEFAULT 'stores shipped' NOT NULL,
  	"hero_text49" varchar DEFAULT '4.9' NOT NULL,
  	"hero_client_rating" varchar DEFAULT 'client rating' NOT NULL,
  	"hero_nomad" varchar DEFAULT 'Nomad' NOT NULL,
  	"hero_coffee_co" varchar DEFAULT 'Coffee Co.' NOT NULL,
  	"hero_reserve_blend" varchar DEFAULT 'Reserve blend' NOT NULL,
  	"hero_single_origin" varchar DEFAULT 'Single origin' NOT NULL,
  	"hero_text24" varchar DEFAULT '$24' NOT NULL,
  	"hero_add_to_cart" varchar DEFAULT 'Add to cart' NOT NULL,
  	"hero_revenue_visit" varchar DEFAULT 'Revenue / visit' NOT NULL,
  	"hero_text482" varchar DEFAULT '$4.82' NOT NULL,
  	"hero_text28" varchar DEFAULT '▲ 28%' NOT NULL,
  	"hero_a" varchar DEFAULT 'A+' NOT NULL,
  	"hero_cwv" varchar DEFAULT 'CWV' NOT NULL,
  	"logos_trusted_by_brands_scaling_on" varchar DEFAULT 'Trusted by brands scaling on Shopify' NOT NULL,
  	"intro_shopify_engineering" varchar DEFAULT 'Shopify Engineering' NOT NULL,
  	"intro_shopify_development_in" varchar DEFAULT 'Shopify development in' NOT NULL,
  	"intro_india" varchar DEFAULT 'India' NOT NULL,
  	"intro_focused_on_technical_precision" varchar DEFAULT 'focused on technical precision.' NOT NULL,
  	"intro_based_in_gurgaon_we_provide" varchar DEFAULT 'Based in Gurgaon, we provide dedicated' NOT NULL,
  	"intro_shopify_development_services" varchar DEFAULT 'Shopify development services' NOT NULL,
  	"intro_to_fast_growing_dtc_brands" varchar DEFAULT 'to fast-growing DTC brands. Instead of installing pre-made templates, we build storefronts from the ground up using custom Liquid sections, Metaobjects, and the Storefront API to match how you actually sell.' NOT NULL,
  	"intro_from_custom_private_apps_to" varchar DEFAULT 'From custom private apps to dedicated' NOT NULL,
  	"intro_shopify_theme_development" varchar DEFAULT 'Shopify theme development' NOT NULL,
  	"intro_the_focus_is_on_writing" varchar DEFAULT ', the focus is on writing clean, lightweight code. Building native features directly into your theme removes the need for 10+ slow third-party apps. This reduces your monthly app fees, speeds up mobile page loads, and gives you total control over your store.' NOT NULL,
  	"intro_when_you" varchar DEFAULT 'When you' NOT NULL,
  	"intro_hire_a_shopify_expert" varchar DEFAULT 'hire a Shopify expert' NOT NULL,
  	"intro_you_work_directly_with_the" varchar DEFAULT ', you work directly with the developer building your store — no account managers or telephone games. Just direct technical work for theme redesigns, headless storefronts, catalog migrations, and custom ERP connections.' NOT NULL,
  	"projects_recent_work" varchar DEFAULT 'Recent Work' NOT NULL,
  	"projects_featured" varchar DEFAULT 'Featured ' NOT NULL,
  	"projects_projects" varchar DEFAULT 'Projects' NOT NULL,
  	"projects_view_project" varchar DEFAULT 'View Project →' NOT NULL,
  	"services_what_we_do" varchar DEFAULT 'What we do' NOT NULL,
  	"services_everything_your_store_needs_under" varchar DEFAULT 'Everything your store needs, under one roof.' NOT NULL,
  	"services_href_contact_us" varchar DEFAULT '/contact-us' NOT NULL,
  	"services_discuss_your_project" varchar DEFAULT 'Discuss your project →' NOT NULL,
  	"case_studies_proven_results" varchar DEFAULT 'Proven Results' NOT NULL,
  	"case_studies_case_studies_that_move_the" varchar DEFAULT 'Case studies that move the needle.' NOT NULL,
  	"results_the_receipts" varchar DEFAULT 'The receipts' NOT NULL,
  	"results_we_don_t_just_build" varchar DEFAULT 'We don''t just build looks. We build for speed and conversion.' NOT NULL,
  	"testimonials_kind_words" varchar DEFAULT 'Kind words' NOT NULL,
  	"testimonials_founders_who_came_back_for" varchar DEFAULT 'Founders who came back for round two.' NOT NULL,
  	"secondary_direct_technical_work" varchar DEFAULT 'Direct Technical Work' NOT NULL,
  	"secondary_why_brands_choose_a_dedicated" varchar DEFAULT 'Why brands choose a dedicated' NOT NULL,
  	"secondary_shopify_development_partner_in_india" varchar DEFAULT 'Shopify development partner in India' NOT NULL,
  	"secondary_when_merchants_look_into" varchar DEFAULT 'When merchants look into' NOT NULL,
  	"secondary_ecommerce_website_development_cost_in" varchar DEFAULT 'ecommerce website development cost in India' NOT NULL,
  	"secondary_the_real_benefit_goes_beyond" varchar DEFAULT ', the real benefit goes beyond rates. It is working directly with experienced developers who understand store speed, Liquid code, and checkout conversion.' NOT NULL,
  	"secondary_when_you" varchar DEFAULT 'When you' NOT NULL,
  	"secondary_hire_shopify_developers_in_india" varchar DEFAULT 'hire Shopify developers in India' NOT NULL,
  	"secondary_through_scalefront_you_talk_directly" varchar DEFAULT 'through ScaleFront, you talk directly with the developer writing your code. There are no middle layers, account managers, or miscommunication. If a cart feature needs an update or a product feed breaks, you get it fixed right away.' NOT NULL,
  	"secondary_from_erp_inventory_syncing_and" varchar DEFAULT 'From ERP inventory syncing and warehouse connections to custom Online Store 2.0 themes and Next.js headless storefronts, we focus on clean code that holds up under high traffic. Your store stays fast during sales and peak seasons without surprise crashes.' NOT NULL,
  	"pricing_engagements" varchar DEFAULT 'Engagements' NOT NULL,
  	"pricing_ways_to_work_together" varchar DEFAULT 'Ways to work together.' NOT NULL,
  	"pricing_fixed_scope_or_embedded_every" varchar DEFAULT 'Fixed-scope or embedded — every engagement starts with a free store audit.' NOT NULL,
  	"pricing_inr" varchar DEFAULT '🇮🇳 INR (₹)' NOT NULL,
  	"pricing_usd" varchar DEFAULT '🌎 USD ($)' NOT NULL,
  	"pricing_most_picked" varchar DEFAULT 'Most picked' NOT NULL,
  	"pricing_from" varchar DEFAULT 'from' NOT NULL,
  	"pricing_href_contact_us" varchar DEFAULT '/contact-us' NOT NULL,
  	"pricing_rarr" varchar DEFAULT '&rarr;' NOT NULL,
  	"faq_faq" varchar DEFAULT 'FAQ' NOT NULL,
  	"faq_frequently_asked_questions" varchar DEFAULT 'Frequently asked questions' NOT NULL,
  	"faq_common_questions_about_pricing_timelines" varchar DEFAULT 'Common questions about pricing, timelines, custom themes, and our development process.' NOT NULL,
  	"contact_let_s_build_the_store" varchar DEFAULT 'Let''s build the store your brand deserves.' NOT NULL,
  	"contact_tell_us_where_you_are" varchar DEFAULT 'Tell us where you are today. We''ll send back a free audit with the three highest-impact wins — no pitch deck, no fluff.' NOT NULL,
  	"contact_href_contact_us" varchar DEFAULT '/contact-us' NOT NULL,
  	"contact_get_your_free_audit" varchar DEFAULT 'Get your free audit →' NOT NULL,
  	"contact_href_contact_us2" varchar DEFAULT '/contact-us' NOT NULL,
  	"contact_book_a_call" varchar DEFAULT 'Book a call' NOT NULL,
  	"contact_response_time" varchar DEFAULT 'RESPONSE TIME' NOT NULL,
  	"contact_text24h" varchar DEFAULT '< 24h' NOT NULL,
  	"contact_every_inquiry_gets_a_direct" varchar DEFAULT 'Every inquiry gets a direct reply from a developer — never a bot.' NOT NULL,
  	"contact_based_in" varchar DEFAULT 'Based in' NOT NULL,
  	"contact_gurgaon_india" varchar DEFAULT 'Gurgaon · India' NOT NULL,
  	"contact_availability" varchar DEFAULT 'Availability' NOT NULL,
  	"contact_open_for_new_builds" varchar DEFAULT 'Open for new builds' NOT NULL,
  	"seo_title" varchar DEFAULT 'Shopify Development Agency & Experts' NOT NULL,
  	"seo_description" varchar DEFAULT 'ScaleFront is an elite Shopify development agency. We engineer custom themes, private apps, headless stores, and CRO fixes for scaling brands.' NOT NULL,
  	"seo_image" varchar DEFAULT 'https://www.scalefront.io/og-image.jpg' NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "payload"."cms_users_sessions" ADD CONSTRAINT "cms_users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "payload"."cms_users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "payload"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_cms_users_fk" FOREIGN KEY ("cms_users_id") REFERENCES "payload"."cms_users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload"."payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "payload"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload"."payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_cms_users_fk" FOREIGN KEY ("cms_users_id") REFERENCES "payload"."cms_users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload"."homepage_logos_items" ADD CONSTRAINT "homepage_logos_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "payload"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload"."homepage_projects_items_tags" ADD CONSTRAINT "homepage_projects_items_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "payload"."homepage_projects_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload"."homepage_projects_items" ADD CONSTRAINT "homepage_projects_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "payload"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload"."homepage_services_items" ADD CONSTRAINT "homepage_services_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "payload"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload"."homepage_case_studies_items" ADD CONSTRAINT "homepage_case_studies_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "payload"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload"."homepage_results_items" ADD CONSTRAINT "homepage_results_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "payload"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload"."homepage_testimonials_items" ADD CONSTRAINT "homepage_testimonials_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "payload"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload"."homepage_pricing_items_features" ADD CONSTRAINT "homepage_pricing_items_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "payload"."homepage_pricing_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload"."homepage_pricing_items" ADD CONSTRAINT "homepage_pricing_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "payload"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload"."homepage_faq_items" ADD CONSTRAINT "homepage_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "payload"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "cms_users_sessions_order_idx" ON "payload"."cms_users_sessions" USING btree ("_order");
  CREATE INDEX "cms_users_sessions_parent_id_idx" ON "payload"."cms_users_sessions" USING btree ("_parent_id");
  CREATE INDEX "cms_users_updated_at_idx" ON "payload"."cms_users" USING btree ("updated_at");
  CREATE INDEX "cms_users_created_at_idx" ON "payload"."cms_users" USING btree ("created_at");
  CREATE UNIQUE INDEX "cms_users_email_idx" ON "payload"."cms_users" USING btree ("email");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload"."payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload"."payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload"."payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload"."payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload"."payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload"."payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload"."payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_cms_users_id_idx" ON "payload"."payload_locked_documents_rels" USING btree ("cms_users_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload"."payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload"."payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload"."payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload"."payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload"."payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload"."payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_cms_users_id_idx" ON "payload"."payload_preferences_rels" USING btree ("cms_users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload"."payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload"."payload_migrations" USING btree ("created_at");
  CREATE INDEX "homepage_logos_items_order_idx" ON "payload"."homepage_logos_items" USING btree ("_order");
  CREATE INDEX "homepage_logos_items_parent_id_idx" ON "payload"."homepage_logos_items" USING btree ("_parent_id");
  CREATE INDEX "homepage_projects_items_tags_order_idx" ON "payload"."homepage_projects_items_tags" USING btree ("_order");
  CREATE INDEX "homepage_projects_items_tags_parent_id_idx" ON "payload"."homepage_projects_items_tags" USING btree ("_parent_id");
  CREATE INDEX "homepage_projects_items_order_idx" ON "payload"."homepage_projects_items" USING btree ("_order");
  CREATE INDEX "homepage_projects_items_parent_id_idx" ON "payload"."homepage_projects_items" USING btree ("_parent_id");
  CREATE INDEX "homepage_services_items_order_idx" ON "payload"."homepage_services_items" USING btree ("_order");
  CREATE INDEX "homepage_services_items_parent_id_idx" ON "payload"."homepage_services_items" USING btree ("_parent_id");
  CREATE INDEX "homepage_case_studies_items_order_idx" ON "payload"."homepage_case_studies_items" USING btree ("_order");
  CREATE INDEX "homepage_case_studies_items_parent_id_idx" ON "payload"."homepage_case_studies_items" USING btree ("_parent_id");
  CREATE INDEX "homepage_results_items_order_idx" ON "payload"."homepage_results_items" USING btree ("_order");
  CREATE INDEX "homepage_results_items_parent_id_idx" ON "payload"."homepage_results_items" USING btree ("_parent_id");
  CREATE INDEX "homepage_testimonials_items_order_idx" ON "payload"."homepage_testimonials_items" USING btree ("_order");
  CREATE INDEX "homepage_testimonials_items_parent_id_idx" ON "payload"."homepage_testimonials_items" USING btree ("_parent_id");
  CREATE INDEX "homepage_pricing_items_features_order_idx" ON "payload"."homepage_pricing_items_features" USING btree ("_order");
  CREATE INDEX "homepage_pricing_items_features_parent_id_idx" ON "payload"."homepage_pricing_items_features" USING btree ("_parent_id");
  CREATE INDEX "homepage_pricing_items_order_idx" ON "payload"."homepage_pricing_items" USING btree ("_order");
  CREATE INDEX "homepage_pricing_items_parent_id_idx" ON "payload"."homepage_pricing_items" USING btree ("_parent_id");
  CREATE INDEX "homepage_faq_items_order_idx" ON "payload"."homepage_faq_items" USING btree ("_order");
  CREATE INDEX "homepage_faq_items_parent_id_idx" ON "payload"."homepage_faq_items" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "payload"."cms_users_sessions" CASCADE;
  DROP TABLE "payload"."cms_users" CASCADE;
  DROP TABLE "payload"."payload_kv" CASCADE;
  DROP TABLE "payload"."payload_locked_documents" CASCADE;
  DROP TABLE "payload"."payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload"."payload_preferences" CASCADE;
  DROP TABLE "payload"."payload_preferences_rels" CASCADE;
  DROP TABLE "payload"."payload_migrations" CASCADE;
  DROP TABLE "payload"."homepage_logos_items" CASCADE;
  DROP TABLE "payload"."homepage_projects_items_tags" CASCADE;
  DROP TABLE "payload"."homepage_projects_items" CASCADE;
  DROP TABLE "payload"."homepage_services_items" CASCADE;
  DROP TABLE "payload"."homepage_case_studies_items" CASCADE;
  DROP TABLE "payload"."homepage_results_items" CASCADE;
  DROP TABLE "payload"."homepage_testimonials_items" CASCADE;
  DROP TABLE "payload"."homepage_pricing_items_features" CASCADE;
  DROP TABLE "payload"."homepage_pricing_items" CASCADE;
  DROP TABLE "payload"."homepage_faq_items" CASCADE;
  DROP TABLE "payload"."homepage" CASCADE;`)
}
