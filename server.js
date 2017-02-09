const Webpack = require("webpack")
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require("./webpack.config")
const config = require('./config/')
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

// for(val in webpackConfig.entry){
//     if(!(webpackConfig.entry[val] instanceof Array)){
//         var obj = new Array();
//         obj.push(webpackConfig.entry[val]);
//         webpackConfig.entry[val]=obj;
//     }
//     webpackConfig.entry[val].push("webpack-dev-server/client?http://localhost:81");
//     webpackConfig.entry[val].push("webpack/hot/dev-server");
//     console.log("######添加模块："+val+"热加载成功######")
// }
webpackConfig.plugins.push(new Webpack.HotModuleReplacementPlugin());
var compiler = Webpack(webpackConfig);
var server = new WebpackDevServer(compiler, {
    publicPath: "/app/",
    stats: {
        colors: true //显示不同的颜色区分打包的文件
    },
    proxy: { //代理服务器
        '*.do': 'http://127.0.0.1:8080'
    },
    hot:true,
    inline:true,
    progress:true,
    historyApiFallback:true,
})

server.listen(3000, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('http://localhost:3000/' + config.publicPath)
})