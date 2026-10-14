# RISE 2027 — GitHub Pages 部署包

这是当前最新版静态网页：包含10个征稿方向、26位候选PC、两位联系人；组织者卡片已删除职责标签。

## 推荐部署方式：独立项目仓库

1. 在你的 GitHub 账号下新建公开仓库 `rise2027`。
2. 解压本包，上传包内的文件及 `images` 文件夹。确保仓库根目录直接有 `index.html`，不要直接上传ZIP，也不要多套一层文件夹。
3. 包内的空文件 `.nojekyll` 用于直接发布静态文件；如果上传时遗漏，可在仓库根目录补建同名空文件。
4. 在仓库 `Settings → Pages → Build and deployment` 中，将 Source 设为 `Deploy from a branch`，选择上传文件的分支（通常是 `main`）及 `/(root)`，保存。
5. 等待部署完成，打开 Pages 设置显示的地址。默认格式为 `https://USERNAME.github.io/rise2027/`；绑定自定义域名时以实际显示地址为准。

本包不需要 npm 安装、后端服务或编译。所有资源均使用相对路径，可放在项目子路径下。

## 发布后

- 用未登录的浏览器确认网页、图片、导航和邮箱链接可用。
- 将 workshop proposal 中的网页链接换成最终 GitHub Pages 地址。
- 已移除指向原站点的 canonical 和 og:url 标签；地址确定后可按需加回。
- 保留页脚图片署名与许可证链接；来源见 ASSET_SOURCES.txt。
- 此包是导出快照，后续改动需要同步上传 GitHub。

## 已有个人主页仓库

如果想直接放入现有 `USERNAME.github.io` 仓库，可把网页文件放到其发布目录的 `rise2027/` 子目录，沿用现有 Pages 配置。不要用本包的 `.nojekyll` 覆盖现有主页仓库根目录的构建设置；使用自定义构建流程时，还需确认该静态子目录会进入发布产物。

官方说明：
- https://docs.github.com/en/pages/quickstart
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
