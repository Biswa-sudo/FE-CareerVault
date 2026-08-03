# BentureAI PHP API (Hostinger Shared Hosting)

## Folder layout

- backend/schema.sql
- backend/api/config.php
- backend/api/auth.php
- backend/api/subscription.php
- backend/api/cvs.php
- backend/api/documents.php
- backend/api/spoken-progress.php
- backend/api/topic-practice.php
- backend/api/chat-history.php
- backend/api/portfolio.php
- backend/api/.htaccess

## MySQL setup

1. Create a MySQL database in Hostinger hPanel.
2. Import backend/schema.sql.
3. Set environment variables (or edit config.php defaults):
   - DB_HOST
   - DB_NAME
   - DB_USER
   - DB_PASS

## Deploy API on Hostinger

1. Upload backend/api to public_html/bentureai/api (or your preferred path).
2. Confirm Apache has mod_rewrite and mod_headers enabled (Hostinger shared hosting usually has both).
3. Keep .htaccess in the same api directory.

## Frontend env

Set this in Vite env:

VITE_API_BASE_URL=https://your-domain.com/bentureai/api

For local development with Vite on localhost:5173 and PHP on another host:
- CORS is handled in config.php.
- Credentials (cookies/sessions) are enabled by default in frontend api client.

## Razorpay UPI setup

1. Create a Razorpay account at https://razorpay.com
2. In Dashboard → Settings → API Keys, generate **Test** keys first
3. Set these on your PHP server (Hostinger env or edit `config.php` defaults):
   - `RAZORPAY_KEY_ID` — public key (e.g. `rzp_test_...`)
   - `RAZORPAY_KEY_SECRET` — secret key (server only, never expose to frontend)
4. Import the updated `schema.sql` (adds `payments` table) or run:

```sql
CREATE TABLE IF NOT EXISTS payments (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id BIGINT UNSIGNED NOT NULL,
  razorpay_order_id VARCHAR(64) NOT NULL,
  razorpay_payment_id VARCHAR(64) NULL,
  amount_paise INT UNSIGNED NOT NULL,
  currency CHAR(3) NOT NULL DEFAULT 'INR',
  status ENUM('created', 'paid', 'failed') NOT NULL DEFAULT 'created',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  paid_at TIMESTAMP NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_payments_order (razorpay_order_id),
  UNIQUE KEY uq_payments_payment (razorpay_payment_id),
  KEY idx_payments_user (user_id),
  CONSTRAINT fk_payments_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

5. Test UPI flow: sign up → `/payment` → Pay with UPI → use Razorpay test mode
6. For live UPI, complete Razorpay KYC and switch to **Live** keys

Payment flow:
- User must be logged in before paying
- Backend creates a Razorpay order (`create-order`)
- Razorpay checkout opens with UPI as the primary method
- After payment, frontend sends signature to `verify` endpoint
- Server verifies HMAC signature and activates subscription

## Endpoint map

- GET/POST /auth.php?action=session|signup|login|logout
- GET /subscription.php
- GET/POST /payment.php?action=config|create-order|verify
- GET/POST/PUT/DELETE /cvs.php
- GET/POST/DELETE /documents.php
- GET/PUT /spoken-progress.php
- GET/PUT /topic-practice.php
- GET/PUT /chat-history.php
- GET/PUT /portfolio.php?type=data|template
