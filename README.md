# React 面包店网站项目

## 项目简介

这是一个基于 React + Vite 的单页面包店展示网站，适合 React 初学者学习使用。项目包含首页、产品展示、关于我们等页面，使用 Tailwind CSS 进行样式设计，并集成 GSAP 实现动画效果。

## 技术栈

- **前端框架**：React 19.1.0
- **构建工具**：Vite 7.0.4
- **样式系统**：Tailwind CSS 4.1.11
- **动画库**：GSAP 3.13.0
- **图标库**：Remix Icon
- **代码检查**：ESLint

## 项目结构

```
react-bread-website/
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public/
├── src/
│   ├── App.jsx          # 应用入口组件
│   ├── assets/          # 静态资源
│   ├── components/      # 通用组件
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── index.css        # 全局样式
│   ├── main.jsx         # 渲染入口
│   └── pages/           # 页面组件
│       ├── About.jsx    # 关于我们
│       ├── Favourites.jsx # 客户喜爱
│       ├── Home.jsx     # 首页
│       ├── Location.jsx # 位置信息
│       └── New.jsx      # 新面包
└── vite.config.js       # Vite配置
```

## 主要功能

- 响应式设计，适配不同屏幕尺寸
- 平滑滚动和页面导航
- 产品展示和分类
- 动画效果增强用户体验
- 面包店信息展示

## 如何运行

1. 安装依赖

```bash
npm install
```

2. 启动开发服务器

```bash
npm run dev
```

3. 构建生产版本

```bash
npm run build
```

4. 预览生产版本

```bash
npm run preview
```

## 学习价值

通过这个项目，您可以学习到：

- React 组件化开发
- Tailwind CSS 的实际应用
- 动画效果的实现
- 响应式网站设计
- Vite 构建工具的使用
