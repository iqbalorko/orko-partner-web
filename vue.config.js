module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api/': {
        target: 'https://orko.site/',
        // target: 'localhost:8000/',
        changeOrigin: true
      }
    }
  },
};
