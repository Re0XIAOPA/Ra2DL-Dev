import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    {
      text: "install",
      icon: "laptop-code",
      prefix: "install/",
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
