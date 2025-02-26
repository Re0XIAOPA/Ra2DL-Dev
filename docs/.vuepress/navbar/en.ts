import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/dev-env/",
  "/guide/",
  {
    text: "Docs",
    icon: "book",
    children: [
      {
        text: "VuePress Docs",
        icon: "book",
        link: "https://vuepress.vuejs.org/zh/",
      },
      {
        text: "vuepress-theme-hope Docs",
        icon: "book",
        link: "https://theme-hope.vuejs.press/zh/",
      },
    ]
  },
]);
