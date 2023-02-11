import { sidebar } from "vuepress-theme-hope";

// 精选图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default sidebar([
  
  // 指定显示页面
  {
    text: "🐤 关于我",
    link: "/intro.md",
    icon: "",
  },
  {
    text: "🌷 项目|A",
    icon: "",
    prefix: "/project-A/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🌻 项目|B",
    icon: "",
    prefix: "/project-B/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🍓 项目|C",
    icon: "",
    prefix: "/project-C/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🌵 小程序|E",
    icon: "",
    prefix: "/project-E/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🌿 小程序|F",
    icon: "",
    prefix: "/project-F/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🐌 代码练习集",
    icon: "",
    prefix: "/codingcollection/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "⛅ 知识库|前端",
    icon: "",
    prefix: "/front-end/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "💧 知识库|CS基础",
    icon: "",
    prefix: "/CS/",
    link: "",
    collapsible: true,
    children: [
      "network.md",
      "system.md",
      {
        text: "算法与数据结构",
        icon: "structure",
        collapsible: true,
        children: ["a.md", "b.md", ],
      },

    ],
  },
  {
    text: "🐝 知识库|热点",
    icon: "",
    prefix: "/hotspot/",
    link: "",
    collapsible: true,
    children: "structure",
  },
 
]);
