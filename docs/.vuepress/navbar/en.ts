import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/dev-env/",
  {
    text: "Developer Guide",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
      },
    ],
  },
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
