const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'devcjkim',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: '소개',
        link: '/resume/',
      },
      {
        text: '포트폴리오',
        link: '/portfolio/'
      },
      // {
      //   text: '기술 블로그',
      //   link: '/blog/'
      // },
      {
        text: 'github',
        link: 'https://github.com/centell/'
      },
    ],
    sidebar: {
      '/portfolio/': [
        {
          title: "포트폴리오",
          collapsable: false,
          children: [
            '/portfolio/personal',
            '/portfolio/company',
            '/portfolio/freelancer',
          ]
        },
      ],
      // '/blog/': [
      //   {
      //     title: "기술 블로그",
      //     collapsable: false,
      //     children: [
      //       '/blog/macos-terminal-settings',
      //     ]
      //   },
      // ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
