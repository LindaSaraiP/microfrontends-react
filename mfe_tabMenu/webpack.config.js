const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
  port: 3002,
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
      name: 'mfe_tabmenu',
      filename: 'remoteEntry.js',
      exposes: {
        //'./TabMenu': './src/App',
        './TabMenuComponent': './src/components/TabMenuComponent.jsx',
      },
        remotes: {
          mfe_formproject: 'mfe_formproject@http://localhost:3007/remoteEntry.js',
          mfe_projectsearch: 'mfe_projectsearch@http://localhost:3005/remoteEntry.js',
          mfe_projectplan: 'mfe_projectplan@http://localhost:3006/remoteEntry.js',
          mfe_formprojectstage: 'mfe_formprojectstage@http://localhost:3004/remoteEntry.js',
          mfe_teamassignment: 'mfe_teamassignment@http://localhost:3008/remoteEntry.js',
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
