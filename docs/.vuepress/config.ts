import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/Ra2DL-Dev/",

  head: [
      ["link", { rel: "icon", href: "/logo.svg" }],
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "Ra2DL Dev",
      description: "Development and design documents for the Red Alert download station",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Ra2DL Dev",
      description: "红色警戒下载站的开发文档，有关于开发下载站的开发流程设计",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
