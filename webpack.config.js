//实现热刷新，引入html-webpack-plugin获取插件对象
var htmlwp = require('html-webpack-plugin');
module.exports={
    entry:'./src/main.js',
    output:{
        path:__dirname+'/dist',
        filename:'build.js'
    },
    module:{
        loaders:[
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                test:/\.scss$/,
                loader:'style-loader!css-loader!sass-loader'
            },
            {
                test:/\.less$/,
                loader:'style-loader!css-loader!less-loader'
            },
            {
                test:/\.(png|jpg|gif|ttf)$/,
                loader:'url-loader?limit=20000'
            },
            //webpack2.0本身支持es6转成es5，所以这里不用配置babel
            // {
            //     test:/\.js$/,
            //     loader:'babel-loader',
            //     exclude:/node_modules/
            // },
            {
                test:/.vue$/,
                loader:'vue-loader'
            },
        ]
    },
    plugins:[
        new htmlwp({
            title:'首页',
            filename:'index.html',
            template:'index1.html'
        })
    ],
    //webpack2.0本身支持es6转成es5，所以这里不用配置babel
    // babel:{
    //     presets:['es2015'],
    //     plugins:['transform-runtime']
    // }
}