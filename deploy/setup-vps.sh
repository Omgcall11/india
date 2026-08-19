#!/usr/bin/env bash
set -euo pipefail

# Run on the Ubuntu VPS as root:
#   sudo bash deploy/setup-vps.sh

APP_DIR="/var/www/sakura-jp.wiki"
REPO_URL="${REPO_URL:-https://github.com/Omgcall11/india.git}"
BRANCH="${BRANCH:-cursor/unpack-lovable-project-c1f0}"
SSL_DIR="/etc/ssl/sakura-jp.wiki"

if [[ "${EUID}" -ne 0 ]]; then
  echo "Run as root: sudo bash deploy/setup-vps.sh" >&2
  exit 1
fi

export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y nginx git curl ca-certificates openssl

if ! command -v node >/dev/null 2>&1; then
  curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
  apt-get install -y nodejs
fi

mkdir -p "${APP_DIR}" "${SSL_DIR}"
if [[ ! -d "${APP_DIR}/.git" ]]; then
  git clone --branch "${BRANCH}" "${REPO_URL}" "${APP_DIR}"
else
  git -C "${APP_DIR}" fetch origin
  git -C "${APP_DIR}" checkout "${BRANCH}"
  git -C "${APP_DIR}" pull --ff-only origin "${BRANCH}"
fi

if [[ ! -f "${SSL_DIR}/origin.crt" || ! -f "${SSL_DIR}/origin.key" ]]; then
  openssl req -x509 -nodes -newkey rsa:2048 \
    -keyout "${SSL_DIR}/origin.key" \
    -out "${SSL_DIR}/origin.crt" \
    -days 3650 \
    -subj "/CN=sakura-jp.wiki"
  chmod 600 "${SSL_DIR}/origin.key"
fi

cd "${APP_DIR}"
npm ci
npm run build

install -m 644 "${APP_DIR}/deploy/nginx-sakura-jp.wiki.conf" /etc/nginx/sites-available/sakura-jp.wiki
ln -sfn /etc/nginx/sites-available/sakura-jp.wiki /etc/nginx/sites-enabled/sakura-jp.wiki
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx

if command -v ufw >/dev/null 2>&1; then
  ufw allow 80/tcp >/dev/null 2>&1 || true
  ufw allow 443/tcp >/dev/null 2>&1 || true
fi

install -m 644 "${APP_DIR}/deploy/streamone.service" /etc/systemd/system/streamone.service
systemctl daemon-reload
systemctl enable --now streamone.service
systemctl restart streamone.service

echo
echo "Origin is listening on :80 and :443 (needed because Cloudflare proxies HTTPS)."
echo "In Cloudflare: SSL/TLS → Overview → set mode to Full (not Full strict unless you install an Origin CA cert)."
echo "Open firewall if needed: sudo ufw allow 80/tcp && sudo ufw allow 443/tcp"
