# DeepSeek Harness

Browser recreation of the DeepSeek Harness opening sequence: logo, access gate, identity check, outline-to-fill whale, scan bar, radar verify, and welcome flash.

## 一键启动

克隆之后不需要安装 Node.js，也不需要 `npm install`。Node.js 22.23.3 的官方运行时和已经打包好的页面都在 `portable/` 里。

- Windows：双击 `一键启动.bat`
- macOS：在终端执行一次 `chmod +x 一键启动.command`，之后双击 `一键启动.command`
- Linux：`chmod +x 一键启动.sh && ./一键启动.sh`

第一次双击会把仓库里的 Node.js 解压到本机（不联网）。之后直接启动，并自动打开 http://127.0.0.1:8080 。关闭该窗口即停止服务。

内置运行时：

- `portable/node-dist/`：Windows x64 / ARM64、macOS Apple 芯片 / Intel、Linux x64 / ARM64
- `portable/server` 与 `portable/site`：已经编译进仓库的页面和依赖，启动时不再下载任何包

## 开发

改源码时才需要本机的 Node.js：

```bash
npm install
npm run dev
```
