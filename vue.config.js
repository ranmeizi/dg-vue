module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  css: {
    loaderOptions: {
      less: {
        test: /\.less$/,
        loader: 'less-loader', // compiles Less to CSS
      },
    }
  }
}