module.exports = {
  entry: "./app/App.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
      },
      {
          test: /\.scss$/,
          loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}