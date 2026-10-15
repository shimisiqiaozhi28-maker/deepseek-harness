#!/bin/bash
cd "$(dirname "$0")"
ROOT="$(pwd)"
case "$(uname -m)" in
  arm64|aarch64) ARCH="darwin-arm64" ;;
  *) ARCH="darwin-x64" ;;
esac
NODE="$ROOT/portable/node/node-v22.23.3-$ARCH/bin/node"

if curl -sf -o /dev/null --max-time 1 http://127.0.0.1:8080/; then
  open "http://127.0.0.1:8080/"
  echo "服务已在运行，已打开浏览器。"
  read -r -p "按回车关闭..."
  exit 0
fi

if [ ! -x "$NODE" ]; then
  echo "正在解压内置 Node.js，只需这一次..."
  mkdir -p "$ROOT/portable/node"
  tar --no-same-owner -xzf "$ROOT/portable/node-dist/node-v22.23.3-$ARCH.tar.gz" -C "$ROOT/portable/node" || true
  chmod +x "$NODE" 2>/dev/null || true
fi

if [ ! -x "$NODE" ]; then
  echo "内置 Node.js 解压失败。"
  read -r -p "按回车关闭..."
  exit 1
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
"$NODE" "$ROOT/portable/serve.mjs"
echo
echo "服务已停止。"
read -r -p "按回车关闭..."
