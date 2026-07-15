#!/bin/bash
# moo.log 一键部署脚本
# 用法: ./deploy.sh

set -e

cd "$(dirname "$0")"

# 加载环境变量
source .env
export CLOUDFLARE_API_TOKEN CLOUDFLARE_ACCOUNT_ID

# 清除代理
export HTTP_PROXY= HTTPS_PROXY= http_proxy= https_proxy= ALL_PROXY=

echo "=== 构建项目 ==="
npm run build

echo "=== 部署到 Cloudflare Pages ==="
wrangler pages deploy dist --project-name=moo-log --branch=main

echo "=== 部署完成 ==="
echo "访问: https://moo-log.pages.dev"
