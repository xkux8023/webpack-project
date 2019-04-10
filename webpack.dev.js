const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devServer: {
    contentBase: "./dist", // 本地服务器所加载文件的目录
    port: "8888",
    inline: true, // 文件修改后实时刷新
    historyApiFallback: true //不跳转
  }
})