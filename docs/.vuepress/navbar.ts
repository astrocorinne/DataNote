import { navbar } from "vuepress-theme-hope";

// 精选图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default navbar([
  
  {
    text: "项目",
    icon: "flower",
    prefix: "/",
    children: [
      "project-A/",
      "project-B/",
      "project-C/",
    ],
  },
  {
    text: "小程序",
    icon: "leaf",
    prefix: "/",
    children: [
      "project-E/",
      "project-F/",
    ],
  },
  { text: "练习集", icon: "debug", link: "/codingcollection" },
  {
    text: "知识库",
    icon: "guide",
    prefix: "/",
    children: ["front-end/", "CS/", "hotspot/"],
  },

]);
