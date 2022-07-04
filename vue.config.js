const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,//关闭语法检查
  // 方式1
  /* devServer: {
    proxy:'http://localhost:5000',
  } */
  // 方式2
  devServer: {
    proxy: {
      '/cjlu': {
        target: 'http://localhost:5000',
        pathRewrite: { '^/cjlu': '' },//去掉前缀
        ws: true,//用于支持websocket
        changeOrigin: true,
      },
      '/car': {
        target: 'http://localhost:5001',
        pathRewrite: { '^/car': '' },//去掉前缀
        ws: true,//用于支持websocket
        changeOrigin: true,
      }
    }
  }
})
