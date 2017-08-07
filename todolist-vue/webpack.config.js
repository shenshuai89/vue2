//生产环境
//var debug = process.env.NODE_ENV === "production";
//开发环境
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
    //声明文件来源路径，指定文件的映射关系，利于以后的debug
    devtool: debug ? "sourcemap" : null,
    //入口文件
    entry:"./js/entry.js",
    //输出文件
    output:{
        path: __dirname,
        filename:"bundle.js"
    },
    devServer:{
        hot:true,
        inline:true,
        port:2000
    },
    module:{
        loaders:[
//css-loader style-loader babel-core babel-loader babel-plugin-transform-runtime babel-preset-es2015 babel-preset-stage-0 babel-runtime
            { 
                test:/\.scss$/,
                loader:"style!css"
            },
            {
                test:/\.js$/,
                loader:"babel",
                exclude:/node_modules/
            },
//npm vue vue-loader vue-html-loader vue-style-loader --save-dev
            {
                test:/\.vue$/,
                loader:"vue"
            }
        ]
    },
    plugins:debug? [] :[
        new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurenceOrderPlugin(),
                new webpack.optimize.UglifyJsPlugin({
                    compress: {
                        warnings: false
                    },
                }),
    ],
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.common.js'
      }
    },
    babel:{
        presets:['es2015','stage-0'],
        plugins:['transform-runtime']
    }
}