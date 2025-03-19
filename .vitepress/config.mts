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
              { text: '绩点计算器', link: '/Docs/UserManual/Functions/JiaoWu/GPACalculator' },
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
            text: ' - 外部链接',
            items: [
              { text: '图书检索', link: '/Docs/UserManual/Functions/ExternalLink/Library' },
              { text: '人脸信息采集系统', link: '/Docs/UserManual/Functions/ExternalLink/Face' },
              { text: 'WebVPN', link: '/Docs/UserManual/Functions/ExternalLink/WebVPN' },
              { text: '一网通办', link: '/Docs/UserManual/Functions/ExternalLink/NewHall' },
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
