// 懒加载路由
const Home = () => import("./homePage.vue");
export default {
  path: "/home",
  name: "homePage",
  component: Home,
  children: [],
};
