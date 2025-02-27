import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    {
      text: "Development",
      icon: "house",
      prefix: "dev-env/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Guide",
      icon: "book",
      prefix: "guide/",
      collapsible: true,
      children: "structure",
    },
  ],
});
