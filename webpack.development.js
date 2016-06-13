var webpack = require('webpack');
var path= require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var nodeModulesPath = __dirname + '/node_modules/';
module.exports = {
	entry:{
		index: [__dirname + '/src/entry.jsx', 
				'webpack-hot-middleware/client?',
				'webpack/hot/only-dev-server'
		]
	},
	output: {
		path: __dirname + '/dist/',
		publicPath: '/dist/',
		filename: '[name]_[hash].js' //production
		//filename: 'app.js'
	},
	module: {
		preLoaders: [{
      		test: /\.jsx$/,
      		exclude: [__dirname + '/node_modules/'],
      		loader: 'jsxhint-loader'
    	}],
    	loaders: [{
      		test: /\.jsx$/,
      		exclude: /(node_modules|bower_components)/,
      		loader: 'babel',
			query: {
				presets: ['react', 'es2015'],
				plugins: [
					"add-module-exports"
				]
			}
    	}, {
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'react-hot'
		}, {
      		test: /\.less/,
      		loader: 'style-loader!css-loader!less-loader'
    	}, {
      		test: /\.(png|jpg|jpeg)$/,
      		loader: 'url-loader?limit=8192'
    	}]
  	},
	jshint: {
		esversion: 6
	},
	plugins: [
    	// new webpack.optimize.OccurrenceOrderPlugin(), 
    	new webpack.HotModuleReplacementPlugin(),
    	new webpack.NoErrorsPlugin(),
		new webpack.optimize.MinChunkSizePlugin({
			minChunkSize:10000
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			filename: '[name]_[hash].js'
			//chunks: ['index', 'detail]
		}),
		new HtmlWebpackPlugin({
			title: 'Webpack rtools',
			template: './src/index.html',
			filename: 'index.html',
			inject: true,
			favicon: '',
			hash: false,
		}),
		///*
		new ExtractTextPlugin('[name]_[contenthash].css', {
			allChunks: true,
		}),
		//*/ 
		//new ExtractTextPlugin.extract('style-loader', 'css!less')
	],
	resolve: {
    	extensions: ['', '.js', '.jsx'],
		/*alias: {
			'react': path.join(nodeModulesPath, '/react/dist/react.js'),
		}*/
  	}
}
