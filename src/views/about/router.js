// 懒加载路由
const Home = () => import("./aboutPage.vue");
export default {
  path: "/about",
  name: "aboutPage",
  component: Home,
  children: [],
};
