# BentureAI — AI Development & Architecture Guidelines

Last updated: 2026-08-17

---

# 1. PROJECT IDENTITY

BentureAI is a multi-product platform designed to help:

* Students
* Employees / job seekers
* Businesses

The long-term vision is to provide multiple affordable products and SaaS solutions through a common BentureAI account.

Current and planned product areas include:

## Students

* Spoken English
* School curriculum / tuition
* Competitive job preparation
* Practice sessions
* Future educational products

## Employees / Job Seekers

* Career Vault
* AI resume analysis
* ATS-friendly resume improvement
* Resume builder
* Multiple resume storage
* Job/onboarding document storage
* Shareable candidate profile
* Recruiter-facing profile
* AI-assisted interviewer
* Topic mastery

## Businesses

* HRMS
* Billing software
* Project management software
* Other business SaaS products

## Future Products / Services

* Chatbots
* Landing pages
* Custom software
* Other SaaS products and digital services

IMPORTANT:

The above describes the business vision.

Do NOT assume a product is implemented merely because it appears in this document.

Always inspect the actual repository before claiming a feature/product exists.

---

# 2. CURRENT TECHNICAL ARCHITECTURE

The current repository is a hybrid application:

```text
BentureAI
│
├── React + Vite Frontend
│
├── PHP API Backend
│
├── MySQL Database
│
├── PHP Session Authentication
│
├── Razorpay Payment Integration
│
└── Product Modules
    ├── Career Vault
    ├── Spoken English
    ├── AI Interview
    └── Other partial/experimental modules
```

Important directories:

```text
src/
    Frontend React application

bentureai/
    PHP backend
    Database schema

tests/
    Automated tests

docs/
    Architecture and project documentation
```

Important existing files include:

```text
src/App.jsx
src/context/AuthContext.jsx
src/routes/ProtectedRoute.jsx
src/lib/apiClient.js
src/lib/localStorage.js
src/lib/paymentService.js
src/lib/paymentPlans.js

bentureai/api/config.php
bentureai/api/auth.php
bentureai/api/payment.php
bentureai/api/subscription.php
bentureai/api/cvs.php
bentureai/api/documents.php
bentureai/api/spoken-progress.php
bentureai/api/topic-practice.php
bentureai/api/chat-history.php
bentureai/api/portfolio.php

bentureai/schema.sql
```

---

# 3. CURRENT AUTHENTICATION

Authentication is centralized at the BentureAI platform level.

Current architecture:

```text
React
  ↓
AuthContext
  ↓
PHP API
  ↓
PHP Session
  ↓
MySQL users
```

The backend uses:

```php
$_SESSION['user_id']
```

Authentication enforcement is centralized through the PHP backend configuration/authentication helpers.

The existing authentication system MUST be preserved.

DO NOT create a separate authentication system for Career Vault, Spoken English, or future products.

---

# 4. CURRENT PAYMENT

BentureAI currently uses Razorpay.

The existing payment flow includes:

```text
Frontend
  ↓
PHP API
  ↓
Razorpay Order
  ↓
Razorpay Checkout
  ↓
Payment
  ↓
Server-side Signature Verification
  ↓
Database
```

Existing payment integration MUST be preserved.

DO NOT replace Razorpay.

DO NOT create another payment system.

DO NOT move payment verification to the frontend.

Payment verification must remain server-side.

---

# 5. CURRENT PRODUCT ARCHITECTURE

## Career Vault

Career Vault is currently the strongest implemented product.

Implemented areas include:

* CV Builder
* CV CRUD
* CV templates
* CV preview
* CV printing/download
* Document management
* AI Interview
* Topic practice
* AI chat history
* Public profile/portfolio functionality in partial form

Relevant database tables include:

```text
cvs
documents
topic_questions
user_topics
ai_chat_history
portfolios
```

---

## Spoken English

Spoken English is an actual product module.

Current route:

```text
/spoken-english
```

Progress is persisted through:

```text
spoken_english_progress
```

and the existing PHP API.

Spoken English should use the same BentureAI authentication and subscription architecture.

---

# 6. MULTI-PRODUCT BUSINESS RULES

These rules are FIXED and must be respected by all AI agents.

## Rule 1 — One BentureAI Account

A user has one BentureAI account.

The same account can subscribe to multiple products.

Example:

```text
User
 ├── Career Vault
 ├── Spoken English
 └── School Tuition
```

---

## Rule 2 — One Product = One Subscription

Each product has an independent subscription.

Example:

```text
User
 ├── Career Vault subscription
 └── Spoken English subscription
```

A user may have subscriptions for multiple products simultaneously.

---

## Rule 3 — Multiple Plans Per Product

Every product may have multiple plans.

Example:

```text
Career Vault
 ├── Basic
 ├── Premium
 └── Future plans

Spoken English
 ├── Basic
 └── Premium
```

A plan belongs to exactly one product.

---

## Rule 4 — Feature-Level Access

Access is not determined only at the product level.

Plans may provide different features.

Example:

```text
Career Vault Basic
 ├── CV Builder
 ├── CV Storage
 └── Document Vault

Career Vault Premium
 ├── CV Builder
 ├── CV Storage
 ├── Document Vault
 ├── AI Resume Analysis
 ├── ATS Analysis
 └── AI Interview
```

The authorization architecture MUST support both:

```text
Product access
```

and:

```text
Feature access
```

---

## Rule 5 — Products Are Purchased Separately

Initial checkout model:

```text
Career Vault
    ↓
Career Vault Plan
    ↓
Razorpay
    ↓
Career Vault Subscription
```

and independently:

```text
Spoken English
    ↓
Spoken English Plan
    ↓
Razorpay
    ↓
Spoken English Subscription
```

There is no multi-product cart/checkout requirement for the initial implementation.

The architecture should not prevent bundled purchases in the future.

---

## Rule 6 — No Plan Upgrade/Downgrade Initially

The initial version does NOT support:

```text
Basic → Premium
Premium → Basic
```

Do not implement upgrade/downgrade logic.

The database should remain extensible enough to support this in the future.

---

## Rule 7 — Organizations Are Future Scope

Business/organization SaaS will be implemented later.

The future direction may use separate subdomains for organization/business SaaS.

Do NOT implement:

* Organizations
* Tenants
* Organization membership
* Organization roles
* Tenant billing

in the current phase.

However, do not design the individual-user architecture in a way that makes organizations impossible later.

---

# 7. TARGET SUBSCRIPTION ARCHITECTURE

The target architecture is:

```text
User
 │
 ├── Subscription ─────── Product
 │          │                │
 │          │                └── Plans
 │          │                     │
 │          │                     └── Features
 │          │
 │          └── Payment
 │
 └── Access derived from:
       Subscription
          ↓
       Product
          ↓
        Plan
          ↓
       Features
```

Conceptually:

```text
User
 ↓
Active Subscription
 ↓
Product + Plan
 ↓
Plan Features
 ↓
Allowed Product Features
```

---

# 8. TARGET DATABASE CONCEPTS

The platform should eventually have these first-class concepts:

```text
users
products
plans
features
plan_features
subscriptions
payments
```

The existing user/authentication/CV/document tables should be preserved.

Do not create redundant user/account systems.

---

# 9. PRODUCT

A product is a purchasable BentureAI offering.

Examples:

```text
career-vault
spoken-english
school-tuition
hrms
billing
project-management
```

Products should have stable slugs.

Example:

```text
career-vault
spoken-english
```

Avoid hardcoding product access using boolean fields such as:

```text
hasCareerVault
hasSpokenEnglish
isCareerVaultUser
```

---

# 10. PLAN

A plan belongs to one product.

Example:

```text
Career Vault
 ├── Basic
 └── Premium
```

A plan contains pricing/subscription configuration.

Plans should be database entities rather than only frontend constants.

---

# 11. FEATURE

Features represent specific functionality.

Use stable machine-readable identifiers.

Examples:

```text
career-vault.cv-builder
career-vault.cv-storage
career-vault.document-vault
career-vault.public-profile
career-vault.ai-resume-analysis
career-vault.ats-analysis
career-vault.ai-interviewer

spoken-english.course
spoken-english.practice
spoken-english.progress
spoken-english.ai-practice
```

Do not use fragile frontend page names as the authorization identifier.

---

# 12. PLAN → FEATURE

A plan grants features.

Relationship:

```text
Product
 ↓
Plan
 ↓
Plan Features
```

Example:

```text
Career Vault Basic
 ├── cv-builder
 ├── cv-storage
 └── document-vault
```

and:

```text
Career Vault Premium
 ├── cv-builder
 ├── cv-storage
 ├── document-vault
 ├── public-profile
 ├── ai-resume-analysis
 ├── ats-analysis
 └── ai-interviewer
```

---

# 13. SUBSCRIPTION

A subscription belongs to:

```text
User
Product
Plan
```

A user may have multiple subscriptions, but they are for different products.

The current single-user subscription constraint must not remain as the long-term architecture.

Do not allow multiple simultaneous active subscriptions for the same user + product unless future business rules explicitly support it.

---

# 14. AUTHORIZATION

Frontend authorization is NOT security.

The backend must independently verify access.

The architecture should eventually support centralized backend checks equivalent to:

```text
requireProductAccess(userId, productId)
```

and:

```text
requireFeatureAccess(userId, featureId)
```

Function names may differ according to the existing PHP architecture.

---

# 15. AUTHORIZATION FLOW

Product:

```text
Request
 ↓
Authenticate user
 ↓
Find active subscription for product
 ↓
Allow / deny
```

Feature:

```text
Request
 ↓
Authenticate user
 ↓
Find active subscription
 ↓
Find subscribed plan
 ↓
Check plan feature
 ↓
Allow / deny
```

---

# 16. FRONTEND ACCESS

Frontend should eventually support reusable protection mechanisms such as:

```text
ProtectedRoute
SubscriptionGate
FeatureGate
```

These are UX mechanisms.

They MUST NOT replace backend authorization.

Locked products may be displayed with:

```text
🔒 Locked
Subscribe
```

but users must still be prevented from accessing the underlying API.

---

# 17. API SECURITY

Every protected API must verify:

1. Authentication
2. Product access
3. Feature access when required

Example:

```text
Career Vault CV API
    ↓
Authenticated?
    ↓
Career Vault subscription active?
    ↓
CV feature allowed?
    ↓
Proceed
```

Never trust:

* localStorage
* sessionStorage
* frontend state
* hidden UI buttons
* route visibility

for security decisions.

---

# 18. EXISTING DATA MUST BE PRESERVED

The application already has real users, payments, subscriptions, CVs, documents, and product data.

Do NOT perform destructive migrations without explicit approval.

Do NOT:

```text
DROP TABLE
DROP DATABASE
DELETE existing users
DELETE existing payments
DELETE existing subscriptions
```

unless explicitly instructed.

Existing active subscribers must retain their access during migration.

---

# 19. MIGRATION PRINCIPLE

When changing the current subscription model:

```text
Current system
     ↓
Migration
     ↓
New product-aware subscription model
```

Do not replace working functionality in one uncontrolled step.

Migration must preserve existing data.

If an existing subscription cannot be reliably mapped to a product/plan, stop and report the ambiguity instead of guessing.

---

# 20. CODE CHANGE PRINCIPLES

AI coding agents MUST:

1. Inspect existing implementation before changing it.
2. Reuse existing authentication.
3. Reuse existing Razorpay integration.
4. Reuse existing API architecture.
5. Reuse existing database connection/configuration.
6. Make minimal targeted changes.
7. Preserve existing URLs wherever possible.
8. Preserve existing UI unless a change is required.
9. Keep product logic centralized.
10. Avoid duplicating authorization logic.

---

# 21. DO NOT DO THESE THINGS

Do NOT:

* Rebuild the application
* Replace React
* Replace PHP
* Replace MySQL
* Replace Razorpay
* Create a second auth system
* Create a second payment system
* Add hardcoded product booleans
* Put subscription security only in React
* Rewrite working Career Vault functionality unnecessarily
* Rewrite Spoken English unnecessarily
* Implement organizations now
* Implement plan upgrades/downgrades now
* Introduce unnecessary microservices
* Over-engineer the first version

---

# 22. DEVELOPMENT APPROACH

For major architectural changes:

### Step 1

Inspect existing code.

### Step 2

Explain proposed changes.

### Step 3

Identify files to modify.

### Step 4

Identify database migration.

### Step 5

Implement database changes.

### Step 6

Implement backend authorization.

### Step 7

Integrate payment/subscription flow.

### Step 8

Implement frontend route/product/feature protection.

### Step 9

Test existing functionality.

### Step 10

Test new authorization scenarios.

Never make large uncontrolled changes across the project.

---

# 23. CURRENT PRODUCT STATUS

Based on the current repository:

| Product                  | Status                   |
| ------------------------ | ------------------------ |
| Career Vault             | Implemented              |
| Spoken English           | Implemented              |
| AI Interview             | Implemented              |
| Portfolio/Public Profile | Partial                  |
| Competitive Practice     | Partial                  |
| Education/Tuition        | Not confirmed            |
| HRMS                     | Not implemented / future |
| Billing SaaS             | Not implemented / future |
| Project Management       | Not implemented / future |

This list is not permanent.

Always verify the code before making claims.

---

# 24. CURRENT DATABASE

Important existing tables include:

```text
users
subscriptions
payments
cvs
documents
spoken_english_progress
topic_questions
user_topics
ai_chat_history
portfolios
```

Existing tables should be extended carefully rather than unnecessarily replaced.

---

# 25. CURRENT ARCHITECTURAL PRIORITY

The immediate architectural objective is:

```text
CURRENT

User
 ↓
Global subscription
 ↓
All protected products


TARGET

User
 ↓
Multiple subscriptions
 ↓
Product
 ↓
Plan
 ↓
Features
 ↓
Product + feature authorization
```

This is the primary platform architecture task.

Do not introduce unrelated refactoring while implementing this objective.

---

# 26. DEFINITION OF DONE FOR MULTI-PRODUCT ACCESS

The implementation will eventually be considered successful when:

### User A

Has:

```text
Career Vault → Premium
Spoken English → Basic
```

Then:

```text
Career Vault pages → accessible
Career Vault Premium features → accessible
Spoken English → accessible
School Tuition → locked
HRMS → locked
```

### User B

Has only:

```text
Career Vault → Basic
```

Then:

```text
Career Vault Basic features → accessible
Career Vault Premium features → locked
Spoken English → locked
HRMS → locked
```

### Backend

A user cannot bypass access control by manually calling APIs.

### Existing functionality

Existing users, CVs, documents, payments, authentication, and product functionality continue working.

---

# 27. FUTURE EXTENSIBILITY

The architecture should leave room for:

```text
AI Resume Builder
School Tuition
Competitive Practice
HRMS
Billing
Project Management
CRM
Other SaaS
```

without creating a separate authentication/subscription/authorization system for each product.

Organizations and subdomain-based SaaS tenancy are future architecture concerns and should be considered later without implementing them now.

---

# 28. SOURCE OF TRUTH

When documentation conflicts with the source code:

```text
Actual source code
        >
Database schema
        >
Tests
        >
Documentation
```

Agents must inspect the implementation rather than blindly trusting this file.

This file describes architecture and business rules; it is not a substitute for inspecting the current repository.

---

# 29. IMPORTANT CURRENT STATUS CORRECTION

Older documentation may describe:

* localStorage authentication
* simulated payment
* simulated subscriptions
* localStorage-only CV/document storage

The current repository has evolved beyond that in important areas.

The actual current architecture includes:

* PHP session authentication
* MySQL persistence
* Razorpay payment integration
* server-side payment signature verification
* API-backed product persistence

Always verify current implementation before making changes.

---

# 30. PRIMARY GOAL

BentureAI must evolve from:

```text
A product with a global subscription gate
```

into:

```text
A multi-product platform with:

One Account
    ↓
Multiple Products
    ↓
Multiple Plans
    ↓
Independent Subscriptions
    ↓
Feature-Level Access
    ↓
Secure Backend Authorization
```

while preserving the existing working platform.

All future architectural decisions should support this goal.
