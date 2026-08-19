#!/usr/bin/env bash
set -euo pipefail

# Run on the Ubuntu VPS as root:
#   sudo bash deploy/setup-vps.sh

APP_DIR="/var/www/sakura-jp.wiki"
REPO_URL="${REPO_URL:-https://github.com/Omgcall11/india.git}"
BRANCH="${BRANCH:-main}"

if [[ "${EUID}" -ne 0 ]]; then
  echo "Run as root: sudo bash deploy/setup-vps.sh" >&2
  exit 1
fi

export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y nginx git curl ca-certificates

if ! command -v node >/dev/null 2>&1; then
  curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
  apt-get install -y nodejs
fi

mkdir -p "${APP_DIR}"
if [[ ! -d "${APP_DIR}/.git" ]]; then
  git clone --branch "${BRANCH}" "${REPO_URL}" "${APP_DIR}"
else
  git -C "${APP_DIR}" fetch origin
  git -C "${APP_DIR}" checkout "${BRANCH}"
  git -C "${APP_DIR}" pull --ff-only origin "${BRANCH}"
fi

cd "${APP_DIR}"
npm ci
npm run build

install -m 644 "${APP_DIR}/deploy/nginx-sakura-jp.wiki.conf" /etc/nginx/sites-available/sakura-jp.wiki
ln -sfn /etc/nginx/sites-available/sakura-jp.wiki /etc/nginx/sites-enabled/sakura-jp.wiki
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx

install -m 644 "${APP_DIR}/deploy/streamone.service" /etc/systemd/system/streamone.service
systemctl daemon-reload
systemctl enable --now streamone.service
systemctl restart streamone.service

echo
echo "App is proxied at http://sakura-jp.wiki"
echo "Enable HTTPS:"
echo "  sudo apt-get install -y certbot python3-certbot-nginx"
echo "  sudo certbot --nginx -d sakura-jp.wiki -d www.sakura-jp.wiki"
