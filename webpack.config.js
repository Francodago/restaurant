const path =require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
   bundle: './src/index.js',
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'build'),
      clean:true
    },
    plugins:[
      new HtmlWebpackPlugin({
          hash: true,
          filename: 'index.html',
          inject: 'body',
          title: 'Pizza Piacere',
          meta: {
            description: 'Handcrafted Italian pizzas.'
          }
      })
    ],
    devServer: {
       static: {
        directory: path.join(__dirname, 'build'),
    },
    open:true,
    },
    module:{
      rules: [
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
      ],
    },
  };