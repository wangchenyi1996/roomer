// 拼接路径
const resolve = dir => require('path').join(__dirname, dir)
// let publicPath = process.env.NODE_ENV === 'production' ? '/roomer/' : '/'
module.exports = {
    //publicPath,
    publicPath: './', //解决 vue 打包后 dist下面的index.html 空白页页面

    devServer: {
        // port: 8080, // 端口号
        // host: "10.1.1.183",
        // https: false, // https:{type:Boolean}
        // open: true, //配置自动启动浏览器
        // proxy: {
        //     "/api": {
        //         target: "http://172.11.11.11:7071",
        //         changeOrigin: true,
        //         // ws: true,//websocket支持
        //         secure: false,
        //         pathRewrite: {
        //             "^/api": "/"
        //         }
        //     },
        //     "/api2": {
        //         target: "http://172.12.12.12:2018",
        //         changeOrigin: true,
        //         //ws: true,//websocket支持
        //         secure: false,
        //         pathRewrite: {
        //             "^/api2": "/"
        //         }
        //     },
        // } 
    },


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

        // const imagesRule = config.module.rule('images')
        // imagesRule
        //     .use('image-webpack-loader')
        //     .loader('image-webpack-loader')
        //     .options({
        //         bypassOnDebug: true
        //     })
        //     .end()

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