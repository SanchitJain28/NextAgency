# Homepage CMS

Payload 3.91.0 remains configured for the homepage editor and preview; the published homepage now uses local content. The public design and all other pages remain in the existing frontend. The integration follows the current [Payload installation](https://payloadcms.com/docs/getting-started/installation), [Globals](https://payloadcms.com/docs/configuration/globals), [Postgres](https://payloadcms.com/docs/database/postgres), and [migration](https://payloadcms.com/docs/database/migrations) documentation, with package peer dependencies checked against the installed release.

## Current status: public homepage disconnected

The public homepage and its SEO metadata now read directly from `src/content/homepage.ts`. They do not load Payload, query its database, or use the CMS content cache. To change the published homepage, edit that local file and deploy the website.

Payload remains installed, with its existing admin, database content, and authenticated Live Preview. These now serve only the CMS preview: saving there does not change the public homepage. The previous public cache invalidation hook has been removed.

The sections below describe the retained CMS setup, not a connection to the published homepage.

## Editing

1. Start the website with `npm run dev`.
2. Open `/admin` and sign in with your CMS account. For a fresh database, Payload presents the first-user setup.
3. Open **Website → Homepage**.
4. Choose the appropriate tab: Hero, Trusted brands, Introduction, Featured projects, Services, Case studies, Results, Testimonials, Why ScaleFront, Pricing, FAQ, Contact, or SEO.
5. Save. Changes update the CMS document only; the public homepage is disconnected.

Arrays support adding, removing, and reordering entries. Pricing supports both INR and USD. Text fragments around highlighted words have separate fields so that the existing markup is retained. Image fields accept image URLs or existing public paths; uploading files is not configured in this integration.

The public header and footer are not CMS-controlled. Blogs continue using their existing data sources.

## Live Preview

Open **Website → Homepage**, then click the **Live Preview** icon beside Save. The editor shows the homepage preview alongside the form on wider screens. Use the preview toolbar to switch between responsive, mobile, tablet and desktop sizes. On narrow screens, toggle Live Preview to switch between editing and previewing.

Changes appear in the preview while typing. They do not change the public homepage, including after Save is clicked. This is field-based Live Preview, not on-page click-to-edit.

The iframe loads `/preview/homepage`, a separate authenticated route restricted to CMS users. It is dynamic, excluded from indexing, served without public caching, and can only be framed by the same origin. It receives unsaved form state using Payload's official `@payloadcms/live-preview-react` hook. Because these homepage fields have no relationships, the custom population handler resolves form data locally instead of fetching the CMS on each keystroke. If relationship/upload fields are added later, extend that handler to populate them safely.

The public `/` route uses static rendering with local content. The live-preview package is only loaded by the preview route. No schema migration or additional environment variable is required for Live Preview.

## Environment

Local CMS variables are stored in the ignored `.env.local` file:

- `PAYLOAD_DATABASE_URL`: PostgreSQL connection string. This setup uses the same database as the existing application, but a separate `payload` schema.
- `PAYLOAD_SECRET`: a long random secret for CMS authentication. Use the same secret across deployments that share a CMS database.

The existing `DATABASE_URL` remains the Prisma connection. Payload uses its own adapter and never runs Prisma migrations.

For Vercel, set both `PAYLOAD_DATABASE_URL` and `PAYLOAD_SECRET` in the project environment settings. Copy them through your normal secret-management process; do not commit them. Configure preview deployments deliberately: using the same database gives preview editors access to the same homepage content.

## Schema and initial content

The initial migration and seed have already been applied to the selected database. On a fresh environment:

```sh
npm run cms:migrate
npm run cms:seed
npm run build
```

The seed will not overwrite an existing homepage document. It initializes the CMS from `src/content/homepage.ts`, which contains the original homepage content. Development schema push is explicitly disabled. Changes to the CMS fields require a new migration:

```sh
npm run cms:migrate:create -- describe-your-change
npm run cms:types
npm run cms:importmap
```

Review new migrations, then apply them with `npm run cms:migrate`. For automated deployment, use `npm run cms:migrate && npm run build` as the build command after configuring the environment.

The initial migration only creates tables in `payload`; the existing application's tables are not altered. CMS migrations live in `src/payload/migrations`.

## Caching and compute

The public homepage is statically generated from local content. There are no CMS reads or CMS-triggered revalidations for `/`. Admin and preview requests still use Payload and its database. Updating the public homepage requires editing `src/content/homepage.ts` and deploying.

## Routes and layout

Public pages and the public root layout live under `src/app/(app)`. Payload has an independent root layout under `src/app/(payload)` to keep public styles, navigation and analytics out of the CMS admin. Route groups do not change public URLs.

- `/admin`: authenticated CMS interface.
- `/api/cms/*`: Payload REST API. Homepage reads are public; edits require a CMS user.
- GraphQL is disabled.

Password reset email delivery is not configured. Add a production email adapter before relying on emailed reset links.

## Checks

```sh
npm run test:cms
npm run cms:check
npm run build
```

`test:cms` checks content conversion, fallback values, nested arrays and presentation isolation without accessing a database. `cms:check` reads the configured CMS and verifies that unauthenticated edits are rejected.

The homepage uses local content and is statically rendered. The repository's existing `ignoreBuildErrors` setting is unchanged. A standalone TypeScript check still reports pre-existing errors in the newsletter, audit tooling and Sanity image helper; the CMS integration has no reported TypeScript errors.
