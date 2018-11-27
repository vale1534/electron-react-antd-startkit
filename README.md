## electron-react-antd-startkit

构建 Electron + React + AntD 应用，同时应用了 Redux、Thunk、Saga 工具包。

工具链有点复杂，Flow 静态类型检查是个负担，少些关注工具链，多花些时间写实际代码。

### 开发常用命令

Flow 静态类型检查：`yarn flow` ；

运行热加载开发模式应用程序：`yarn dev`；

其他详见 `packages.json` 文件。

### 怎么加入 AntD 包的？

```
yarn add -D antd less
```

增加 `app/antd-styles/antd-theme.less` 文件，内容如下：

```
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
