module.exports = [{
  context: `${__dirname}/example`,
  entry: {
    javascript: `./app.js`
  },
  output: {
    filename: `/app.compiled.js`,
    path: `${__dirname}/example`
  },
  module: {
    loaders: [
      {
        test: /\.js(x?)$/,
        include: /example/,
        loader: `babel-loader`,
        query: {
          presets: [`es2015`, `react`]
        }
      }
    ]
  }
}];
