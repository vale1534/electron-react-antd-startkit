## electron-react-antd-startkit

构建 electron-react-antd-startkit 应用。

### 引入 AntD 界面包

```
yarn add -D antd less
```

增加 app/antd-styles/antd-theme.less 文件，内容如下：

```
@import "node_modules/antd/lib/style/index.less";
@import "node_modules/antd/lib/style/components.less";

// 定制主题，覆盖上面定义的变量
// @primary-color : #f8900f;
```

这里可以对 AntD 进行样式定制，但将 less 编译整合到现有的配置不太方便，已有 scss 编译器了，所以手动编译再引入到 app.global.css 中。

因此在 package.json 增加下面 less 编译指令：

```
"less": "lessc --js ./app/antd-styles/antd-theme.less ./app/antd-styles/antd-theme.css"
```

### 开发模式运行

