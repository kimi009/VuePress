const themeConfig = require('./themeConfig')
module.exports = {
  title: '工作笔记',
  description: '副业的工作回忆录',
  searchMaxSuggestions: 10, //显示搜索数量
  serviceWorker: true,
  head: [['link', { rel: 'icon', href: '/img/logo.ico' }]],
  themeConfig,
  configureWebpack: {
    resolve: {
      alias: {
        '@img': '../image/'
      }
    }
  }
}
