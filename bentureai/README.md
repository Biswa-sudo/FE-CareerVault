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

## Endpoint map

- GET/POST /auth.php?action=session|signup|login|logout
- GET/POST /subscription.php
- GET/POST/PUT/DELETE /cvs.php
- GET/POST/DELETE /documents.php
- GET/PUT /spoken-progress.php
- GET/PUT /topic-practice.php
- GET/PUT /chat-history.php
- GET/PUT /portfolio.php?type=data|template
