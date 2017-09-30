const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
config.entry.app.unshift("webpack-dev-server/client?http://localhost:3000/", "webpack/hot/only-dev-server");

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    historyApiFallback: true, 
    hot: true,
    inline:true,
    noInfo: false,
    stats: {
        colors: true,
    },
    proxy: {
        '/kugou': {
            target: 'http://m.kugou.com/',
            changeOrigin:true,
            pathRewrite: {"^/kugou" : ""}
        },
        "/yy_kugou": {
            target: "http://www.kugou.com/yy/",
            changeOrigin: true,
            pathRewrite: {"^/yy_kugou" : ""}
        },
        "/mobilecdn": {
            target: "http://mobilecdn.kugou.com",
            changeOrigin: true,
            pathRewrite: {"^/mobilecdn" : ""}
        }
    }
}).listen(3000, 'localhost', function(err) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:3000');
});
