import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    {
      text: "开发",
      icon: "house",
      prefix: "dev-env/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "指南",
      icon: "book",
      prefix: "guide/",
      collapsible: true,
      children: "structure",
    },
  ],
});
