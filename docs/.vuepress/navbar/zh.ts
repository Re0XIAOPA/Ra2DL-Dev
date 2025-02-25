import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/dev-env/",
  {
    text: "开发指南",
    icon: "lightbulb",
    prefix: "/zh/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
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
