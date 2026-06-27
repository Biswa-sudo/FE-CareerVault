# FE-CareerVault Progress Report

Last updated: 2026-06-24

## Project Status

Overall status: MVP is functional end-to-end for local usage (landing -> payment simulation -> auth -> dashboard -> template selection -> CV editing -> preview/print -> saved CV/document management).

## Completed Milestones

1. App shell and routing
- Vite + React app scaffold is working.
- Public and protected route structure is implemented.
- Dashboard layout with sidebar/navbar and responsive sidebar toggling is implemented.

2. Access and subscription flow
- Signup and login flows are implemented with localStorage-backed auth.
- Subscription gating is implemented in protected routes.
- Payment page and success page are implemented (currently simulated payment, no real gateway integration).

3. CV management core
- CV create/update/delete is implemented in localStorage.
- CV count limit (10) is enforced.
- My CVs page supports edit/download(delete via print route)/delete actions.

4. CV editor and live preview
- Editor form is implemented using react-hook-form + field arrays.
- Print/download flow is implemented via browser print.
- Data normalization for loaded CVs exists to keep backward compatibility with defaults.
- Section heading and technical label customization is implemented.

5. Section layout controls (advanced)
- Section move up/down, duplicate, and delete actions are implemented.
- Duplicate section instance data model is implemented (`sectionInstances`, `sectionLayout`, `sectionContent`).
- Duplicate section editing UI is implemented for all supported section types.

6. Template system
- Template registry and template lookup are implemented.
- `classic-professional` and `executive-blue` templates are wired in preview renderer.
- Template default data pipeline exists and is connected for `classic-professional`.

7. Document vault
- Document upload, download, and delete is implemented with localStorage persistence.

## Partially Complete / Inconsistent Areas

1. Template defaults parity
- `executive-blue` template exists, but its `defaultFormData.js` is empty.
- `templateDefaults` currently maps only `classic-professional`.

2. Preview fallback path
- `CVPreview` includes a generic fallback renderer using `personal/experiences` keys that do not match current editor shape (`personalInfo/experience`).
- Fallback likely renders incomplete data if a non-wired template is selected.

3. UX/content consistency
- There are multiple landing experiences (`LandingPage`, main `Landing`, and `Landing2`) combined on the root route, with mixed branding/copy (`CV Pro`, `CareerVault`, `Benture AI`).
- This is functional but not product-consistent.

4. Payment/auth robustness
- Payment is simulation-only (`setTimeout` + localStorage flag).
- No server-side identity, session, or subscription validation.

## Known Risks

1. Data durability and security
- All data (auth credentials, CV content, documents) is stored in browser localStorage.
- No encryption, backend persistence, or multi-device sync.

2. Production readiness
- No automated tests found (unit/integration/e2e).
- No lint/test scripts in `package.json`.

3. Structural drift
- Some components appear legacy/experimental (`Template1`, extra landing variants) and may confuse future maintenance if not consolidated.

## Suggested Next Milestones

1. Stabilize template architecture
- Add `executive-blue` defaults and register them in `templateDefaults`.
- Remove or harden `CVPreview` fallback path to one canonical data contract.

2. Product consistency pass
- Choose one landing flow and one brand voice.
- Remove or isolate experimental pages/components.

3. Quality and safety baseline
- Add linting and formatting scripts.
- Add smoke tests for: auth gating, CV create/update/delete, template selection, print/download route.

4. Backend migration plan
- Move auth/subscription/CV/document storage from localStorage to API + DB.
- Keep local draft autosave as optional client-side cache.

## Current Functional Scope (Quick Summary)

- Users can subscribe (simulated), sign up, log in, and access protected dashboard routes.
- Users can create up to 10 CVs, edit rich form data, reorder/duplicate sections, and print/download CVs.
- Users can upload and manage supporting documents locally.
- Two template renderers exist; one has complete seeded defaults, one needs defaults integration.