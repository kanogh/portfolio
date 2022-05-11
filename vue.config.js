module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pages: {
    index: {
      entry: 'src/main.js',
      title: "Kanogh's Portfolio",
    }
  }
  /*
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio/'   //任意
    : '/'*/
}