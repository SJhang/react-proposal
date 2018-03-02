const path = require('path');

module.exports = {
  context: __dirname,
  entry: [
    'babel-polyfill',
    "./frontend/myAccount.jsx"
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
    publicPath: "/"
  },
  devServer: {
    proxy: {
      '**': {
        target: 'http://localhost:3000/',
        secure: false,
        changeOrigin: true
      }
    },
    contentBase: path.resolve(__dirname, 'dist'),
    inline: true,
    // https: false,
    port: "3000"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env']
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", "*" ]
  },
  devtool: 'source-map',
};