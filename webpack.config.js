const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // 入口js路径
    entry: './src/index.js',
    // 动态监测并实时更新页面
    devServer: {
       contentBase: './dist',
       // 默认8080，可不写
       port: 8030,
       // 热更新，无需刷新
       hot: true
    },
    plugins: [
      // 自动清空dist目录
      new CleanWebpackPlugin(),
      // 设置html模板生成路径
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './public/index.html',
        chunks: ['index']
      }),
    ],
    // 编译输出配置
    output: {
      // js 生成到 dist/static/js，[name]表示保留原js文件名
      filename: 'static/js/[name].js',
      // 输出路径为 dist
      path: path.resolve(__dirname, 'dist')
    }
}