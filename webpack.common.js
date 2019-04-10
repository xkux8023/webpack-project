const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, "/src/index.js"), // 入口文件
  output: {
    path: path.join( __dirname, "/dist"), //打包后的文件存放的地方
    filename: "bundle.js" //打包后输出文件的文件名
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 正则匹配以.css结尾的文件
        // 需要用的loader，一定是这个顺序，因为调用loader是从右往左编译的
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss|sass)$/, // 正则匹配以.scss和.sass结尾的文件
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    // new一个插件的实例
    new webpack.BannerPlugin('已经学不动了'),
    new HtmlWebpackPlugin({
      // new一个这个插件的实例，并传入相关的参数
      template: path.join(__dirname, "/src/index.template.html")
    }),
    new webpack.HotModuleReplacementPlugin() // 热更新插件
  ]
}
