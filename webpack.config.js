module.exports = [{
  context: `${__dirname}/src`,
  entry: {
    javascript: `./exports.js`
  },
  output: {
    filename: `/react-formbuilder.js`,
    path: `${__dirname}/dist`,
    library: `ReactFormBuilder`,
    libraryTarget: `umd`
  },
  externals: [
    {
      react: `react`
    }
  ],
  module: {
    loaders: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: `babel-loader`,
        query: {
          presets: [`es2015`, `react`]
        }
      }
    ]
  }
}];
