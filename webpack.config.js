const path = require('path');

module.exports = {
  entry: path.join(__dirname, "/src/index.js"), // 入口文件
  output: {
    path: path.join( __dirname, "/dist"), //打包后的文件存放的地方
    filename: "bundle.js" //打包后输出文件的文件名
  },
  devServer: {
    contentBase: "./dist", // 本地服务器所加载文件的目录
    port: "8888",
    inline: true, // 文件修改后实时刷新
    historyApiFallback: true //不跳转
  }
}
