const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.js',
    "form-handler": './src/form-handler.js',
    populate: './src/populate.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  },
  module: {
    rules: [
    {test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ],
    },
    {
     test: /\.(png|svg|jpg|jpeg|gif)$/i,
     type: 'asset/resource',
    },
    {
     test: /\.(woff|woff2|eot|ttf|otf)$/i,
     type: 'asset/resource',
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
      generator: {
        filename: '[name][ext]',
      },
    },
    ],
  },
}