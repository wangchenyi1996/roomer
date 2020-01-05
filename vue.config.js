// 拼接路径
const resolve = dir => require('path').join(__dirname, dir)
let publicPath = process.env.NODE_ENV === 'production' ? '/roomer/' : '/'
module.exports = {
    publicPath,
    outputDir: 'dist',
    productionSourceMap: false,
    chainWebpack: config => {
        // 重新设置 alias
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@view', resolve('src/views'))
            .set('@fonts', resolve('src/assets'))
            .set('@common', resolve('src/common'))
            .set('api', resolve('src/config'))
            .set('image', resolve('src/assets/imgs'))
            .set('utils', resolve('src/config'))

        // 发布模式
        // config.when(process.env.NODE_ENV === 'production', config => {
        //     config
        //         .entry('app')
        //         .clear()
        //         .add('./src/main-prod.js')

        //     config.set('externals', {
        //         vue: 'Vue',
        //         'vue-router': 'VueRouter'
        //     })
        // })

        // set svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    },
    css: {
        loaderOptions: {
            // 设置 scss 公用变量文件
            sass: {
                prependData: `@import '~@/common/style.scss';`
            }
        }
    }

}