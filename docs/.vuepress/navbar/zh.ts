import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/dev-env/",
  "/zh/guide/",
  {
    text: "文档",
    icon: "book",
    children: [
      {
        text: "VuePress 文档",
        icon: "book",
        link: "https://vuepress.vuejs.org/zh/",
      },
      {
        text: "vuepress-theme-hope 文档",
        icon: "book",
        link: "https://theme-hope.vuejs.press/zh/",
      },
    ]
  },
]);
