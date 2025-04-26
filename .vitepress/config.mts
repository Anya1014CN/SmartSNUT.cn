import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link',{rel: 'icon',href: '/favicon.ico'}],
    [
      'script',
      { charset: 'UTF-8', id: 'LA_COLLECT', src: '//sdk.51.la/js-sdk-pro.min.js' }
    ],
    [
      'script',
      {},
      `LA.init({id:"Kl6zy40vYScdryDY",ck:"Kl6zy40vYScdryDY"})`
    ]
  ],
  title: "智慧陕理 - 官网",
  description: "智慧陕理 APP 官方网站",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    darkModeSwitchLabel: '深色模式',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    lastUpdated:{
      text: '本文更新于'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '功能介绍', link: '/Functions' },
      { text: '立即下载', link: '/Downloads' },
      { text: '更新日志', link: '/Docs/Changelog' },
      { text: '用户手册', link: '/Docs/UserManual' },
    ],

    sidebar: [
      {
        text: ' - 用户手册 - ',
        items: [
          { text: '电费账号绑定教程', link: '/Docs/UserManual/EMBindGuide.md' },
        ]
      },
      {
        text: ' - 功能介绍 - ',
        items: [
          {
            text: ' - 教务功能',
            items: [
              { text: '我的课表', link: '/Docs/UserManual/Functions/JiaoWu/CourseTableForStd' },
              { text: '学籍信息', link: '/Docs/UserManual/Functions/JiaoWu/StdDetail' },
              { text: '我的考试', link: '/Docs/UserManual/Functions/JiaoWu/StdExam' },
              { text: '我的成绩', link: '/Docs/UserManual/Functions/JiaoWu/StdGrades' },
              { text: '空闲教室查询', link: '/Docs/UserManual/Functions/JiaoWu/publicFree' },
            ]
          },
          {
            text: ' - 后勤功能',
            items: [
              { text: '网费查询', link: '/Docs/UserManual/Functions/HouQin/SchoolNetworkQuery' },
              { text: '电费查询', link: '/Docs/UserManual/Functions/HouQin/ElectricMeterQuery' },
            ]
          },
          {
            text: ' - 学工系统',
            items: [
              { text: '班级通讯录', link: '/Docs/UserManual/Functions/XueGong/ClassContacts' },
            ]
          },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Anya1014CN/SmartSNUT' }
    ],
    
    footer: {
      message: '智慧陕理并非陕西理工大学官方 APP，智慧陕理 APP 与陕西理工大学无任何从属关系，智慧陕理从未有意标榜或冒充是陕西理工大学官方 APP',
      copyright: 'Copyright © 2025-智慧陕理 <a href="https://beian.miit.gov.cn/">陕ICP备2024023952号-2</a>'
    }
  }
})
