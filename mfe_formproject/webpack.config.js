const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
  port: 3007,
  open: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,OPTIONS',
    'Access-Control-Allow-Headers': '*',
  },
},

  output: {
    publicPath: 'auto',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
      test: /\.svg$/i,
      type: 'asset/resource',
    },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mfe_formproject',
      filename: 'remoteEntry.js',
      exposes: {
        //'./FormProject': './src/App',
        './FormProject': './src/components/FormProject',
      },
        remotes: {
        //host_shell: 'host_shell@http://localhost:3000/remoteEntry.js', 
  },
      shared: {
        react: { singleton: true, requiredVersion: '^18.2.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.2.0' },
        primereact: { singleton: true, eager: true },
        primeicons: { singleton: true, eager: true  },
        'react-transition-group': { singleton: true},
        
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
