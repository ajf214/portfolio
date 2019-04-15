module.exports = {
    chainWebpack: config => {
      config.module
        .rule('md')
        .test(/\.md/)
        .use('vue-markdown-loader')
        .loader('vue-markdown-loader/lib/markdown-compiler')
        .options({
          raw: true
        })
    }
  }