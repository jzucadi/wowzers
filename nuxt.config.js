module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'Wisdomco Test | Loan Form Example',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Loan Form Example' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
    },
    /*
     ** Global CSS
     */
    css: ['~assets/main.css'],
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#2196f3' },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** Run ESLINT on save
         */
        extend(config, ctx) {
            if (ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}