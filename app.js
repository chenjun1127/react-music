// 引入模块
const express = require('express');
const webpackDevMiddleware = require("webpack-dev-middleware");
const WebpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require("webpack");
const proxy = require('http-proxy-middleware');
const app = express();
const config = require('./webpack.config');
config.entry.app.unshift("webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000");
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    hot: true,
    inline: true,
    noInfo: false,
    stats: {
        colors: true,
    }
}));
app.use(WebpackHotMiddleware(compiler));
const kugou = proxy('/kugou', {
    target: 'http://m.kugou.com/',
    changeOrigin: true,
    pathRewrite: {"^/kugou": ""}
});
const yy_kugou = proxy('/yy_kugou', {
    target: 'http://www.kugou.com/yy/',
    changeOrigin: true,
    pathRewrite: {"^/yy_kugou": ""}
});
const mobilecdn = proxy('/mobilecdn', {
    target: 'http://mobilecdn.kugou.com',
    changeOrigin: true,
    pathRewrite: {"^/mobilecdn": ""}
});
app.use('/kugou/*', kugou);
app.use('/yy_kugou/*', yy_kugou);
app.use('/mobilecdn/*', mobilecdn);
const server = app.listen(3000, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Listening at http://%s:%s', host, port);
});