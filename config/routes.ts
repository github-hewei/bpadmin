export default [
  {
    title: "首页",
    path: "/",
    component: "index",
  },
  {
    title: "文档",
    path: "/docs",
    component: "docs",
  },
  {
    title: "功能列表",
    path: "/xxx",
    routes: [
      {
        title: "文档",
        path: "/xxx/docs",
        component: "docs",
      },
    ],
  },
  {
    title: "登录",
    path: "/login",
    component: "login/login",
    layout: false,
  },
  {
    title: "404",
    path: "/*",
    component: "404",
    layout: false,
  },
];
