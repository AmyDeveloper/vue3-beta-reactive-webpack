const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // 入口js路径
    entry: './src/index.ts',
    // 编译输出配置
    output: {
      // js 生成到 dist/static/js，[name]表示保留原js文件名
      filename: 'static/js/[name].js',
      // 输出路径为 dist
      path: path.resolve(__dirname, './dist')
    },
    //webpack-dev-server配置（仅开发环境需要）动态监测并实时更新页面
    devServer: {
      contentBase: path.join(__dirname, './dist'), //编译打包文件的位置
      publicPath: '/',    
      port: 8030,                 //服务器端口号
      host: '0.0.0.0',
      proxy: {},                  //代理列表
      compress: true,
      historyApiFallback: true,   //开启服务器history重定向模式
      hot: true,
    },
    plugins: [
      // 自动清空dist目录
      new CleanWebpackPlugin(),
      // 设置html模板生成路径
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
    // // 配置loder使用的规则、作用范围、控制输出的名称、位置等；主要作用是编译，解析文件
    module: {
      rules: [
        {
          test:/\.ts?$/,
          use:'ts-loader',
          exclude:/node_modules/
        }
      ]
    },
    resolve: {
      extensions:['.ts','.js']//
    }
}