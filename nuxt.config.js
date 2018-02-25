module.exports = {
  //  Headers of the page
  head: {
    title: '郑贤锋 · Codexian',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'personal-website for codexian' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // whole situation css
  css: [
    '~assets/css/reset.css'
  ],
  // Customize the progress bar color
  loading: { color: '#3B8070' },
  // Build configuration
  build: {
    // vendor
    vendor: ['typed.js'],
    // Run ESLint on save
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        // add sass
        const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader')
        vueLoader.options.loaders.sass = 'vue-style-loader!css-loader!sass-loader'
      }
    }
  }
}
