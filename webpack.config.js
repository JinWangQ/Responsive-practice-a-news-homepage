var webpack = require('webpack');
var path = require('path');
module.exports = {
	entry: [
		'./app.js'
	],

	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'bundle.js'
	},

	module: {
		rules: [{
			test: /\.(png|jpg|gif)$/,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 8192
				}
			}]
		}, {
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, {
			test: /\.scss$/,
			use: [{
				loader: "style-loader"
			}, {
				loader: "css-loader"
			}, {
				loader: "sass-loader"
			}]
		}]
	}
};