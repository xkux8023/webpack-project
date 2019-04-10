const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    index: path.join(__dirname, "/src/index.js"),
    two: path.join(__dirname, "/src/two.js")
  },
  output: {
    path: path.join(__dirname, "/dist"), //打包后的文件存放的地方
    filename: "[name].js" //打包后输出文件的文件名
  },
  module: {
    rules: [{
        test: /\.css$/, // 正则匹配以.css结尾的文件
        use: ExtractTextPlugin.extract({
          // 这里我们需要调用分离插件内的extract方法
          // 相当于回滚，经postcss-loader和css-loader处理过的css最终再经过style-loader处理
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader'],
          publicPath: '../'  // 给背景图片设置一个公共路径
        })
      },
      {
        test: /\.(scss|sass)$/, // 正则匹配以.scss和.sass结尾的文件
        use: [
          // 这里采用的是对象配置loader的写法
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' } // 使用postcss-loader
        ]
      },
      {
        test: /\.(png|jpg|svg|gif)$/, // 正则匹配图片格式名
        use: [{
          loader: 'url-loader', // 使用url-loader
          options: {
            limit: 8192,
            outputPath: 'images'  // 设置打包后图片存放的文件夹名称
          }
        }]
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
    new webpack.HotModuleReplacementPlugin(), // 热更新插件
    // 将css分离到/dist文件夹下的css文件夹中的index.css
    new ExtractTextPlugin('css/index.css')
  ]
}
