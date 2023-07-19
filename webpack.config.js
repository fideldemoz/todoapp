const path = require('path');

 module.exports = {
  entry: {
    constructor: './src/constructor.js',
    dom: './src/dom.js',
    app: './src/app.js',
    defaults: './src/defaults.js',
  },
   output: {
    filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        generator: {
      		filename: '[name][ext]',
    		},
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
 };