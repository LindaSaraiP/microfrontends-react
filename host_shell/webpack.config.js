const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    port: 3000,
    open: true,
    headers: {
    'Access-Control-Allow-Origin': '*',
  }
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
      name: 'host_shell',
      remotes: {
        mfe_header: 'mfe_header@http://localhost:3001/remoteEntry.js',
        mfe_tabmenu: 'mfe_tabmenu@http://localhost:3002/remoteEntry.js',
        //mfe_formprojectstage: 'mfe_formprojectstage@http://localhost:3004/remoteEntry.js',
      },
      exposes: {
        
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.2.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.2.0' },
        primereact: { singleton: true, eager: true },
        primeicons: { singleton: true, eager: true },
        'react-transition-group': { singleton: true }
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
