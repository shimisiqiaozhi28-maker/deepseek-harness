#!/bin/bash
cd "$(dirname "$0")"
export VITE_AUTH_ENABLED=false

if ! command -v node >/dev/null 2>&1; then
  echo "未检测到 Node.js。请先安装：https://nodejs.org"
  read -r -p "按回车关闭..."
  exit 1
fi

if curl -sf -o /dev/null --max-time 1 http://127.0.0.1:8080/; then
  open "http://127.0.0.1:8080/"
  echo "服务已在运行，已打开浏览器。"
  read -r -p "按回车关闭..."
  exit 0
fi

if [ ! -d node_modules ]; then
  echo "第一次运行，正在安装依赖..."
  npm install || {
    echo "依赖安装失败。"
    read -r -p "按回车关闭..."
    exit 1
  }
fi

if [ -f scripts/restore-assets.mjs ]; then
  node scripts/restore-assets.mjs
fi

echo "正在启动。浏览器会在服务就绪后自动打开。"
echo "关闭此窗口即停止服务。"

(
  for _ in $(seq 1 60); do
    if curl -sf -o /dev/null --max-time 1 http://127.0.0.1:8080/; then
      open "http://127.0.0.1:8080/"
      exit 0
    fi
    sleep 1
  done
) &

npm run dev
echo
echo "服务已停止。"
read -r -p "按回车关闭..."
