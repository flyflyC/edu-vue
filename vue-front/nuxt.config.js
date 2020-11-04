module.exports = {
  /*
  ** Headers of the page
  */
  plugins: [
    { src: "~plugins/vue-markdown.js", ssr: false },
    { src: '~/plugins/nuxt-swiper-plugin.js', ssr: false }
  ],

  css: [
    {src:'swiper/swiper-bundle.css'},
    { src: "mavon-editor/dist/css/index.css" }
  ],
  head: {
    title: '微教育',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
      chainWebpack: config => {
        config.module
          .rule('md')
          .test(/\.md$/)
          .use('vue-loader')
          .loader('vue-loader')
          .end()
          .use('vue-markdown-loader')
          .loader('vue-markdown-loader/lib/markdown-compiler')
          .options({
            raw: true
          })
      }
  }
}

