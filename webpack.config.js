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
  },
   devtool: 'source-map'  // 会生成对于调试的完整的.map文件，但同时也会减慢打包速度
}
