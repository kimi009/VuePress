module.exports = {
  nav: [
    { text: '主页', link: '/' },
    {
      text: '前端基础',
      items: [
        { text: 'HTML', link: '/html/' },
        { text: 'JS', link: '/js/' },
        { text: 'CSS', link: '/css/' }
      ]
    },
    {
      text: '前端框架',
      items: [
        { text: 'Vue', link: '/vue/' },
        { text: 'React', link: '/React/' },
        { text: 'Angular', link: '/angular/' }
      ]
    },
    { text: 'nodejs', link: '/nodejs/' },
    { text: 'mongodb', link: '/mongodb/' },
    {
      text: '工具',
      items: [
        { text: 'nginx', link: '/deploy/linux/' },
        { text: 'nginx', link: '/deploy/nginx/' },
        { text: 'jenkins', link: '/deploy/jenkins/' }
      ]
    }
  ],
  sidebar: {
    '/html/': [
      {
        title: 'html基础知识',
        collapsable: false,
        children: ['']
      }
    ],
    '/js/': [
      {
        title: 'JavaScript',
        collapsable: false,
        children: ['', 'Cookie相关问题', 'Url编码']
      }
    ],
    '/css/': [
      {
        title: 'css',
        collapsable: false,
        children: ['']
      }
    ],
    '/vue/': [
      {
        title: 'vue基础知识',
        collapsable: false,
        children: [
          '',
          'watch和computed的异同点',
          '组件之间通讯方式',
          'vue中jsx'
        ]
      }
    ],
    '/React/': [
      {
        title: 'React基础知识',
        collapsable: false,
        children: ['', ['react1', '日常问题']]
      }
    ],
    '/angular/': [
      {
        title: 'angular基础知识',
        collapsable: false,
        children: ['']
      }
    ],
    '/nodejs/': [
      {
        title: 'nodejs',
        collapsable: false,
        children: ['']
      }
    ],
    '/mongodb/': [
      {
        title: 'mongodb',
        collapsable: false,
        children: ['']
      }
    ],
    '/deploy/linux/': [
      {
        title: 'linux',
        collapsable: false,
        children: ['']
      }
    ],
    '/deploy/nginx/': [
      {
        title: 'nginx',
        collapsable: false,
        children: ['']
      }
    ],
    '/deploy/jenkins/': [
      {
        title: 'jenkins',
        collapsable: false,
        children: ['']
      }
    ]
  },
  sidebarDepth: 2
}
