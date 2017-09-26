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
            // secure: false,
            changeOrigin:true,
            pathRewrite: {"^/kugou" : ""}
        }
    }
}).listen(3000, 'localhost', function(err) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:3000');
});
