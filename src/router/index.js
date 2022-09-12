import { createRouter, createWebHistory } from "vue-router";

// 获取views下面每个文件中的router.js然后添加路由
const files = require.context("@/views", true, /router\.js$/);
const routes = files.keys().map((key) => {
  const page = require("@/views" + key.replace(".", ""));
  return page.default;
});
// 默认情况下重定向到 /home
routes.unshift({
  path: "/",
  redirect: "/home",
});
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
