module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'trousers',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Trousers' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&amp;subset=latin-ext'}
    ]
  },
  css: [
    {src: '~/assets/scss/import.scss', lang: 'scss'}
  ],
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
      }
    },
    plugins: [{ src: '~plugins/vue-slick', ssr: false }],
    vendor: ['vue-slick'],
    
    postcss: [
      require('autoprefixer')({
        browsers: ['> 5%']
      })
    ],
    extractCSS: {
      allChunks: true
    }
  }

