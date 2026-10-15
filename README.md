# DeepSeek Harness

Browser recreation of the DeepSeek Harness opening sequence: logo, access gate, identity check, outline-to-fill whale, scan bar, radar verify, and welcome flash.

## 一键启动

需要已安装 [Node.js](https://nodejs.org)。

- Windows：双击 `一键启动.bat`
- macOS：在终端执行一次 `chmod +x 一键启动.command`，之后双击 `一键启动.command`

脚本会在第一次运行时安装依赖、还原字体，等服务就绪后自动打开浏览器：http://127.0.0.1:8080 。关闭该窗口即停止服务。

## 手动运行

```bash
node scripts/restore-assets.mjs
npm install
npm run dev
```

开发服务器监听 8080 端口。

字体和分享图以 base64（`.b64` 或 `.b64.partNN`）存放。`scripts/restore-assets.mjs` 会在首次运行前写回二进制文件。
