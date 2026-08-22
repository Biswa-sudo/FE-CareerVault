# BentureAI Project Status

## 1) Tech Stack & Structure

### Frontend
- React 18 SPA with Vite build tool
- Main app entry: [src/App.jsx](src/App.jsx)
- Routing via React Router DOM v6
- UI styling uses Bootstrap + Tailwind + component CSS
- Frontend API wrapper: [src/lib/apiClient.js](src/lib/apiClient.js)

### Backend
- PHP API layer under [bentureai/api](bentureai/api)
- Session-based server authentication and DB access configured in [bentureai/api/config.php](bentureai/api/config.php)
- MySQL database schema in [bentureai/schema.sql](bentureai/schema.sql)

### Database
- MySQL / MariaDB style schema
- Core tables: users, subscriptions, payments, cvs, documents, spoken_english_progress, topic_questions, user_topics, ai_chat_history, portfolios

### Authentication mechanism
- PHP session-backed authentication using `$_SESSION['user_id']`
- Frontend state is managed in [src/context/AuthContext.jsx](src/context/AuthContext.jsx)
- Backend auth checks are centralized in [bentureai/api/config.php](bentureai/api/config.php)

### Payment gateway
- Razorpay is the active payment integration
- Backend order creation and verification in [bentureai/api/payment.php](bentureai/api/payment.php)
- Frontend checkout in [src/lib/paymentService.js](src/lib/paymentService.js)

### AI providers
- Active product code uses Groq through [src/services/interviewService.js](src/services/interviewService.js)
- `@google/genai` is present in [package.json](package.json), but the active interview implementation is Groq-based; no separate Google adapter is currently wired as the primary product flow

### Important top-level folders
- [src](src) — frontend application
- [bentureai](bentureai) — backend API and DB schema
- [tests](tests) — current automated tests
- [docs](docs) — product/design notes

### Concise folder structure

```text
FE-CareerVault/
├── src/
│   ├── App.jsx
│   ├── context/AuthContext.jsx
│   ├── routes/ProtectedRoute.jsx
│   ├── lib/
│   ├── pages/
│   ├── components/
│   ├── spokenEnglish/
│   └── services/
├── bentureai/
│   ├── api/
│   ├── schema.sql
│   └── README.md
├── tests/
│   └── paymentPlans.test.js
├── package.json
├── vite.config.js
├── tailwind.config.js
└── BENTUREAI_PROJECT_STATUS.md
```

---

## 2) Current Products

The repo contains multiple product-like modules, but not all are equally implemented. The route list in [src/App.jsx](src/App.jsx) is the strongest signal of what actually exists.

| Product | Status | Main routes | Main components | Backend/API | Database/storage |
|---|---|---|---|---|---|
| Career Vault | Implemented | `/dashboard`, `/templates`, `/editor/:cvId?`, `/my-cvs`, `/documents`, `/account` | [src/pages/Editor.jsx](src/pages/Editor.jsx), [src/pages/MyCVs.jsx](src/pages/MyCVs.jsx), [src/pages/Templates.jsx](src/pages/Templates.jsx), [src/pages/Documents.jsx](src/pages/Documents.jsx), [src/components/CVPreview.jsx](src/components/CVPreview.jsx) | [bentureai/api/cvs.php](bentureai/api/cvs.php), [bentureai/api/documents.php](bentureai/api/documents.php) | `cvs`, `documents` tables in [bentureai/schema.sql](bentureai/schema.sql) |
| Spoken English | Implemented | `/spoken-english` | [src/pages/SpokenEnglish.jsx](src/pages/SpokenEnglish.jsx), [src/spokenEnglish](src/spokenEnglish) | [bentureai/api/spoken-progress.php](bentureai/api/spoken-progress.php) | `spoken_english_progress` table |
| AI Interview | Implemented | `/ai-interview` | [src/pages/AIInterview.jsx](src/pages/AIInterview.jsx), [src/services/interviewService.js](src/services/interviewService.js), [src/lib/topicPracticeStore.js](src/lib/topicPracticeStore.js) | [bentureai/api/topic-practice.php](bentureai/api/topic-practice.php), [bentureai/api/chat-history.php](bentureai/api/chat-history.php) | `topic_questions`, `user_topics`, `ai_chat_history` |
| Billing / Subscription | Implemented | `/payment`, `/payment/success` | [src/pages/Payment.jsx](src/pages/Payment.jsx), [src/lib/paymentPlans.js](src/lib/paymentPlans.js) | [bentureai/api/payment.php](bentureai/api/payment.php), [bentureai/api/subscription.php](bentureai/api/subscription.php) | `subscriptions`, `payments` |
| Portfolio / Public profile | Partial | `/portfolio` | [src/pages/PortfolioPage.jsx](src/pages/PortfolioPage.jsx) | [bentureai/api/portfolio.php](bentureai/api/portfolio.php) | `portfolios` |
| HRMS / recruiter marketplace | Partial / Mock | `/recruiter-marketplace` | [src/pages/RecruiterMarketplace.jsx](src/pages/RecruiterMarketplace.jsx) | No clear product API | No dedicated HRMS schema |
| Education / Tuition | Not confirmed as a real product | No dedicated route set in app shell | No stable product module identified | No dedicated backend area found | No dedicated access tables |
| Competitive practice | Partial | topic-based practice flows within AI Interview and education-like content elsewhere | [src/lib/topicPracticeStore.js](src/lib/topicPracticeStore.js), [src/pages/AIInterview.jsx](src/pages/AIInterview.jsx) | Topic practice backend exists | `topic_questions`, `user_topics` |
| Project Management | Not confirmed | No dedicated route or API found | None identified in actual app shell | None identified | No dedicated tables |

### Notes
- The product set is real, but it is not yet a single coherent multi-product platform.
- Some pages are clearly more demo/mock than real product modules.
- “Product” is defined here by actual route + backend + storage evidence, not marketing language.

---

## 3) Authentication

### Where login/signup/logout are implemented
- Frontend auth state: [src/context/AuthContext.jsx](src/context/AuthContext.jsx)
- Session fetch and login wrapper: [src/lib/localStorage.js](src/lib/localStorage.js)
- Backend endpoints: [bentureai/api/auth.php](bentureai/api/auth.php)

### How authentication is stored
- Server-side: PHP session cookie with `$_SESSION['user_id']`
- Frontend: auth state is kept in React context and hydrated from the backend session
- Session API: `GET /auth.php?action=session`

### How frontend auth state works
- `AuthProvider` initializes `user`, `authenticated`, and `authLoading`
- `signUp`, `login`, and `logoutUser` all update local React state after API calls
- App-level protected route uses this state

### How backend auth works
- [bentureai/api/config.php](bentureai/api/config.php) defines `requireAuth()` and `currentUserId()`
- Every protected API route calls `requireAuth()` before doing work
- `auth.php` validates password with `password_verify()` and stores a hash from `password_hash()` on signup

### How protected routes work
- [src/routes/ProtectedRoute.jsx](src/routes/ProtectedRoute.jsx)
- It checks:
  1. `authenticated`
  2. `getSubscriptionStatus()` via [src/lib/localStorage.js](src/lib/localStorage.js)
  3. Redirects to `/login` or `/payment` if not allowed

### Is auth centralized across products?
- At the user/session level: yes
- At the product entitlement level: no

This is a single-user global auth layer, not a product-by-product entitlement system.

---

## 4) Payment + Subscription

This is the most important section for the future platform design.

### Payment gateway
- Razorpay is the configured payment provider
- Order creation and payment verification are implemented in [bentureai/api/payment.php](bentureai/api/payment.php)
- Checkout script loading happens in [src/lib/paymentService.js](src/lib/paymentService.js)

### Payment flow
- Frontend starts checkout from [src/pages/Payment.jsx](src/pages/Payment.jsx)
- It resolves a plan from [src/lib/paymentPlans.js](src/lib/paymentPlans.js)
- Payment API creates a Razorpay order with `action=create-order`
- Razorpay checkout runs in browser
- Handler sends verification to `action=verify`
- Server verifies the signature and updates payment/subscription records

### Where payment order is created
- [bentureai/api/payment.php](bentureai/api/payment.php)
- Route logic inside `if ($method === 'POST' && ($action === 'create-order' || $action === 'create_order'))`

### Where payment is verified
- [bentureai/api/payment.php](bentureai/api/payment.php)
- Route logic inside `if ($method === 'POST' && ($action === 'verify' || $action === 'verify-payment'))`
- It validates `razorpay_order_id`, `razorpay_payment_id`, and `razorpay_signature`
- It compares the HMAC against Razorpay signature using `hash_hmac('sha256', ...)`

### Does verification happen server-side?
- Yes. This is server-side signature verification, not merely client-side success simulation.

### Where payment/subscription data is stored
- `payments` table in [bentureai/schema.sql](bentureai/schema.sql)
- `subscriptions` table in [bentureai/schema.sql](bentureai/schema.sql)

### How subscription status is determined
- [bentureai/api/subscription.php](bentureai/api/subscription.php)
- It selects `status` and `payment_date` from `subscriptions` for the current user
- Frontend then checks `response.status === 'active'` in [src/lib/localStorage.js](src/lib/localStorage.js)
- Protected gate checks this in [src/routes/ProtectedRoute.jsx](src/routes/ProtectedRoute.jsx)

### How subscription expiration works
- There is no expiry field in the schema
- There is no recurring billing logic
- There is no grace period, no renewal schedule, no plan duration enforcement in DB
- Current subscription status is effectively a single `active` or `inactive` boolean row per user

### How ProtectedRoute checks subscription
- It reads `sessionStorage.getItem('bentureai_active_subscription')` first
- If authenticated, it calls `getSubscriptionStatus()` from [src/lib/localStorage.js](src/lib/localStorage.js)
- If the backend says `active`, it stores `'active'` in sessionStorage
- If not, it redirects to `/payment`

### Can one user currently have multiple subscriptions?
- Database-level: no
- The schema defines `UNIQUE KEY uq_subscriptions_user (user_id)` in [bentureai/schema.sql](bentureai/schema.sql)
- One user can only have one subscription row in the current schema

### Are subscriptions associated with a specific product?
- Not in the current model
- The `subscriptions` table only stores `user_id`, `status`, and `payment_date`
- There is no `product_id`, `plan_id`, `sku`, `entitlement`, or per-product access table

### Do plans exist?
- Yes, as frontend plan metadata in [src/lib/paymentPlans.js](src/lib/paymentPlans.js)
- There is no persisted plans table in the DB schema
- Plans are effectively configuration values, not modeled as first-class entities

### Do webhooks exist?
- No webhook implementation was found in the API files reviewed
- Payment verification is synchronous and request-driven, not event-driven

### Current flow

```text
User → Product/Plan → Payment → Verification → Subscription → Access
```

Actual implementation path:

```text
src/pages/Payment.jsx
  → src/lib/paymentService.js
  → bentureai/api/payment.php?action=create-order
  → Razorpay checkout
  → bentureai/api/payment.php?action=verify
  → subscriptions table update
  → ProtectedRoute checks status
  → access granted to protected product routes
```

---

## 5) Database — only relevant tables

These are the tables that matter to the current architecture.

### users
- Purpose: account identity and login credentials
- Important fields: `id`, `name`, `email`, `password_hash`, `created_at`, `updated_at`
- Relationships: parent table for subscriptions, payments, CVs, docs, AI progress, portfolios

### subscriptions
- Purpose: global user subscription state
- Important fields: `user_id`, `status`, `payment_date`
- Relationships: one row per user (`UNIQUE KEY uq_subscriptions_user`)
- Current limitation: no product, plan, expiry, or entitlement metadata

### payments
- Purpose: payment history and verification linkage
- Important fields: `user_id`, `razorpay_order_id`, `razorpay_payment_id`, `amount_paise`, `currency`, `status`, `created_at`, `paid_at`
- Relationships: one-to-many per user, but one `razorpay_order_id` is unique

### cvs
- Purpose: saved CV records
- Important fields: `user_id`, `public_id`, `name`, `template_id`, `data_json`
- Relationships: user-owned CVs

### documents
- Purpose: uploaded supporting documents
- Important fields: `user_id`, `public_id`, `name`, `mime_type`, `data_url`, `uploaded_at`
- Relationships: user-owned docs

### spoken_english_progress
- Purpose: per-user progress for the Spoken English product
- Important fields: `user_id`, `key_name`, `data_json`, `language_preference`, `updated_at`
- Relationships: one user, many progress entries keyed by progress name

### topic_questions
- Purpose: AI interview practice questions and user ratings
- Important fields: `user_id`, `question_id`, `topic`, `question_text`, `concept_text`, `user_answer`, `user_rating`, `created_at_ms`
- Relationships: one user has many practice questions

### user_topics
- Purpose: tracked topic list for AI interview practice
- Important fields: `user_id`, `topic`
- Relationships: unique user-topic pair

### ai_chat_history
- Purpose: saved user chat history for AI coaching
- Important fields: `user_id`, `store_json`, `updated_at`
- Relationships: one row per user

### portfolios
- Purpose: portfolio/public profile data
- Important fields: `user_id`, `kind`, `data_json`, `updated_at`
- Relationships: user-owned portfolio profiles; `kind` distinguishes data vs template

---

## 6) Access Control

Current access decision is essentially:

> Is this user logged in and does the user have a global active subscription?

### What exists
- [src/routes/ProtectedRoute.jsx](src/routes/ProtectedRoute.jsx)
- [bentureai/api/config.php](bentureai/api/config.php) with `requireAuth()`
- [bentureai/api/subscription.php](bentureai/api/subscription.php)

### What is missing
- No product-level access table
- No `product_id` / `sku` / `entitlement` logic
- No role-based authorization beyond global login state
- No product-specific access grant on the backend

### Can the system support this?

```text
User
 ├── Career Vault → Active
 ├── Spoken English → Active
 └── HRMS → Not subscribed
```

Current answer: No, not in the actual system.

Why:
- All protected routes rely on one global boolean subscription check.
- The schema has one `subscriptions` row per user, not per product.
- There is no product entitlement model.
- Frontend protection is primarily boolean check + route gating; backend auth is centralized but not product-authorization aware.

### Backend vs frontend
- Backend APIs do verify authenticated user via `requireAuth()`
- But they do not verify product entitlement by product or feature
- Protection is therefore mainly frontend route protection plus a global subscription gate

---

## 7) Career Vault

### Status by feature

| Feature | Status | Evidence |
|---|---|---|
| CV Builder | Implemented | [src/pages/Editor.jsx](src/pages/Editor.jsx), [src/pages/MyCVs.jsx](src/pages/MyCVs.jsx) |
| CV storage | Implemented | [src/lib/localStorage.js](src/lib/localStorage.js), [bentureai/schema.sql](bentureai/schema.sql) (`cvs`) |
| Templates | Implemented | [src/data/templates.js](src/data/templates.js), [src/data/templateDefaults.js](src/data/templateDefaults.js) |
| Documents | Implemented | [src/pages/Documents.jsx](src/pages/Documents.jsx), `documents` table |
| AI Interview | Implemented | [src/pages/AIInterview.jsx](src/pages/AIInterview.jsx) |
| Topic practice | Implemented | [src/lib/topicPracticeStore.js](src/lib/topicPracticeStore.js), [bentureai/api/topic-practice.php](bentureai/api/topic-practice.php) |
| Public profile | Partial | [src/pages/PortfolioPage.jsx](src/pages/PortfolioPage.jsx), `portfolios` table |
| AI resume analysis | Missing / not clearly wired as a deterministic core feature | no dedicated route or backend workflow found in the reviewed architecture |
| ATS optimization | Missing / not clearly wired as a product module | no dedicated route/API found |

### Career Vault summary
This is the strongest real product in the repo. It has actual CRUD, templates, document management, and real database-backed structure. It is not just a landing mock.

---

## 8) Spoken English

### Is it implemented?
- Yes, as a real product route and learning flow
- Main route: `/spoken-english`
- Parent route: [src/pages/SpokenEnglish.jsx](src/pages/SpokenEnglish.jsx)
- App shell: [src/spokenEnglish](src/spokenEnglish)

### Main routes/components
- [src/pages/SpokenEnglish.jsx](src/pages/SpokenEnglish.jsx)
- [src/spokenEnglish/context](src/spokenEnglish/context)
- [src/spokenEnglish/components](src/spokenEnglish/components)
- [src/spokenEnglish/pages](src/spokenEnglish/pages)

### Subscription/access mechanism
- It is not independently gated by a product-specific subscription system
- It sits behind the global protected route in [src/App.jsx](src/App.jsx)
- Access is controlled by the same global `authenticated + active subscription` gate

### Central authentication usage
- Yes, it uses the central BentureAI auth session and route protection

### Progress persistence
- Yes, progress is persisted through [src/spokenEnglish/services/progressService.js](src/spokenEnglish/services/progressService.js)
- Backend API: [bentureai/api/spoken-progress.php](bentureai/api/spoken-progress.php)
- DB table: `spoken_english_progress`

---

## 9) Current Architectural Problem

### What prevents BentureAI from becoming a proper multi-product platform?

#### Critical
1. Single global subscription model
   - One `subscriptions` row per user
   - No product or entitlement dimension
   - No product-specific access control

2. No product entitlement model
   - No `product_access`, `plans`, or `entitlements` tables
   - All product access is effectively global subscription-based

3. Frontend route gating is stronger than backend product authorization
   - Protected routes are aware of a global boolean, not per-product access
   - The backend does not enforce product-level access in a structured way

#### High
4. Payment is coupled to a single subscription state
   - Payment plan metadata exists, but it is not persisted as actual plans linked to access rules

5. Authentication is centralized but not product-aware
   - Good for a single platform identity
   - Not sufficient for multiple independent products with separate entitlements

#### Medium
6. Route/product maturity is inconsistent
   - Some modules are real; some are demo/mock/building blocks
   - This makes the platform look broader than it is architecturally

7. No webhook/event-driven billing layer
   - Current system is request-driven and simpler, but not robust for multi-product lifecycle management

---

## 10) What Should We Preserve?

These are existing systems that already work and should likely be extended rather than rewritten:

- Global user authentication model with PHP session + React context
- Razorpay payment integration and verification flow
- Single-user identity model for the initial platform
- Career Vault builder/editor + template system
- AI Interview practice + question persistence
- Spoken English progress persistence
- API structure under [bentureai/api](bentureai/api) and database-first persistence in [bentureai/schema.sql](bentureai/schema.sql)

These systems are already in place and provide a realistic base for building a proper multi-product platform.

---

## 11) Recommended Next Architectural Direction

### Target architecture

```text
BentureAI
    ↓
One User Account
    ↓
Multiple Products
    ↓
Multiple Plans
    ↓
Multiple Subscriptions
    ↓
Product-specific Entitlements
    ↓
Product-specific Features/APIs
```

### Preserve
- User authentication core
- Razorpay checkout pattern
- Global session model
- Career Vault product concepts
- AI Interview and Spoken English product concepts
- DB-backed persistence pattern

### Extend
- Add a proper `products` dimension
- Add `plans` and `subscriptions` as first-class entities with product mapping
- Add `user_product_access` or equivalent entitlement table
- Add product-aware authorization checks in backend APIs

### Refactor
- Replace the current global single-subscription gate with product entitlement checks
- Separate product access from account access
- Split product capabilities by plan and entitlement rather than one boolean flag

### Eventually replace
- The current single-row `subscriptions` pattern
- Frontend-only assumptions around active subscription checks
- Hardcoded route gating by a single access boolean

---

## 12) Final Summary

| Area | Current Status | Main Issue |
|---|---|---|
| Frontend | Strong | Multi-product UI exists but not fully unified |
| Backend | Strong | PHP API layer is present and active |
| Authentication | Functional | Global session auth, but not product-aware |
| Payment | Functional | Razorpay works; subscription model is too simple |
| Subscription | Partial | One global active/inactive subscription only |
| Authorization | Partial | Product-specific access is not modeled |
| Database | Functional | Missing plan and entitlement modeling |
| Career Vault | Strong | Real CV product and storage |
| Spoken English | Strong | Real learning product and persistence |
| Multi-product readiness | Partial | No multi-product entitlement/plan system |

### Top 5 Things We Need to Understand Before Coding
1. There is currently only one global subscription state per user, not a multi-product entitlement model.
2. The app already has a working session-based auth layer and a real Razorpay payment flow.
3. Career Vault and Spoken English are real product modules with persistence; they are not just onboarding pages.
4. AI Interview is implemented with practice data, topic tracking, and persisted chat history, but it is still under the same global access model.
5. The main architectural blocker is not product idea creation — it is the lack of product-specific access, plan, and entitlement design in both the schema and route authorization rules.

---

This document is intentionally focused on architecture and product reality. It does not claim that every product idea in the repo is fully complete; it records what is materially implemented, what is partial, and what is missing from a multi-product platform perspective.
