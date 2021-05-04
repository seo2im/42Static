const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { TsConfigPathsPlugin } = require('awesome-typescript-loader')

module.exports = {
    entry: path.join(__dirname, '../srcs/index.tsx'),
    target: 'web',
    mode: 'development',

    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, '../build'),
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
            },
            {
                test: /\.svg$/,
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }
        ]
    },
    devServer : {
		historyApiFallback : true,
		contentBase : path.join(__dirname, '../build'),
		port : 4001,
	},
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public', 'index.html')
        }),
        new TsConfigPathsPlugin()
    ],
}