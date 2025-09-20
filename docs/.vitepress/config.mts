import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/startiga-rules/',
  lang: 'fa-IR',
  title: "STARTIGA Rules",
  description: "Official rules and ethical framework of the STARTIGA community",
  head: [
  ['link', { rel: 'stylesheet', href: '/startiga-rules/docs/.vitepress/styles/rtl.css' }]
],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'عضویت',
        items: [
          { text: 'قوانین عضویت', link: '/membership/rules' }
        ]
      },
      {
        text: 'تیم‌ها و پروژه‌ها',
        items: [
          { text: 'ساختار تیم‌ها', link: '/teams/structure' },
          { text: 'اصول مشارکت در پروژه‌ها', link: '/projects/contributions' }
        ]
      },
      {
        text: 'گروه‌های تلگرام',
        items: [
          { text: 'قوانین عمومی', link: '/telegram/general' },
          { text: 'بحث‌ها و گفتگوها', link: '/telegram/discussions' },
          { text: 'ضد اسپم و ایمنی', link: '/telegram/spam-and-safety' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
