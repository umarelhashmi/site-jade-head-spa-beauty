#!/usr/bin/env bash
# ==============================================================================
# JADE HEAD SPA & BEAUTY — STATIC DEPLOYMENT SCRIPT
# Target Host: HestiaCP (38.49.218.214) -> https://jadespa.aviaorlando.com
# ==============================================================================
set -euo pipefail

DEPLOY_HOST="${DEPLOY_HOST:-root@38.49.218.214}"
HESTIA_USER="${HESTIA_USER:-kvtjfIhctlu}"
DOMAIN="${DOMAIN:-jadespa.aviaorlando.com}"
DEPLOY_PATH="/home/${HESTIA_USER}/web/${DOMAIN}/public_html/"

echo "Deploying Jade Head Spa & Beauty static site to ${DEPLOY_HOST}:${DEPLOY_PATH}..."
rsync -avz --delete \
  --exclude '.git' \
  --exclude '.impeccable/review' \
  --exclude '.DS_Store' \
  --exclude '._*' \
  --exclude 'deploy.sh' \
  ./ "${DEPLOY_HOST}:${DEPLOY_PATH}"

ssh "${DEPLOY_HOST}" "chown -R ${HESTIA_USER}:${HESTIA_USER} /home/${HESTIA_USER}/web/${DOMAIN}/public_html && find /home/${HESTIA_USER}/web/${DOMAIN}/public_html -type d -exec chmod 755 {} + && find /home/${HESTIA_USER}/web/${DOMAIN}/public_html -type f -exec chmod 644 {} +"
echo "Deployment complete -> https://${DOMAIN}"
