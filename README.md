## electron-react-antd-startkit

[![Dependency Status](https://david-dm.org/wenris/electron-react-antd-startkit/status.svg)](https://david-dm.org/wenris/electron-react-antd-startkit)
[![Dependency Status](https://david-dm.org/wenris/electron-react-antd-startkit/dev-status.svg)](https://david-dm.org/wenris/electron-react-antd-startkit)
[![MIT Licensed](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](https://opensource.org/licenses/MIT)

构建 Electron + React + AntD 应用，同时应用了 Redux、Thunk、Saga 工具包。

工具链有点复杂，~~Flow 静态类型检查是个负担~~ ，少些关注工具链，多花些时间写实际代码。

**Flow 工具已移除，优化 ESLint 代码检查，用好 Jest 测试工具。**

![11](https://user-images.githubusercontent.com/11177691/49055389-5b5e6680-f232-11e8-84d9-f28bcb053abe.JPG)

### 起步方法

克隆项目：

```
git clone https://github.com/wenris/electron-react-antd-startkit.git project-name
```

推荐中国国内用户使用 `taobao.org` 源，依赖包下载：

```
set SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/
set ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/
yarn install --registry=http://registry.npm.taobao.org
```

### 开发常用命令

~~Flow 静态类型检查：`yarn flow` ；~~

运行热加载开发模式应用程序：`yarn dev`；

其他详见 `packages.json` 文件。

### 怎么加入 AntD 包的？

添加 `antd` 与 `less` 包：

```
yarn add -D antd less
```

增加 `app/antd-styles/antd-theme.less` 文件，内容如下：

```less
@import "node_modules/antd/lib/style/index.less";
@import "node_modules/antd/lib/style/components.less";

// 定制主题，覆盖上面定义的变量
// @primary-color : #f8900f;
```

在 `package.json` 增加下面 `less` 编译指令：

```
"less": "lessc --js ./app/antd-styles/antd-theme.less ./app/antd-styles/antd-theme.css"
```

定制好 AntD 主题，手动将 `antd-theme.less` 转译成 `antd-theme.css` 文件后，引入到 `app.global.css` 样式中。

再也不要去折腾在工具链中引入 less 支持了，毫无意义。

### 为什么 Thunk 与 Saga 共用？

因为两者不冲突，优劣势互补，提供了最大的设计弹性。

### 关于样式表

暂且支持 css 和 scss ，默认导入以 [css-module](https://github.com/css-modules/css-modules) 方式导入，除非文件名以 `*.global.css` 或 `*.global.scss` 。在样式表中，除了以 `:global` 修饰的选择类名都会加以本地命名，比如：

```css
.local-class { ... }
:global(.other-class) { ... }
```

`local-class` 将会重写命名，`other-class` 不会，在 js 代码中使用如下：

```jsx
import styles from 'mycomponent.css';

function MyComponent((props) => {
  return (<div className={styles["local-class"}/>
    ...
  <div>);
});
```
