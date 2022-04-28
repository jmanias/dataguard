const path = require('path')

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack : {
    resolve: {
      modules : [
        path.resolve("./src"),
        path.resolve("./node_modules")
      ]
    },
  }
}
