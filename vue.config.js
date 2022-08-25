module.exports = {
  lintOnSave: false, /*关闭语法检查*/
  //开启代理服务器
  devServer: {
    proxy: {
      '/api': {// 匹配所有以 '/api'开头的请求路径
        target: 'http://127.0.0.1:3000',// 代理目标的基础路径
        changeOrigin: true,
        // pathRewrite: { '^/api': '' }
      },
    }
  }
}