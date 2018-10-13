const HtmlWebPackPlugin = require("html-webpack-plugin");
path = require('path'),

    module.exports = {
        entry: {
            bundle: ['./src/main/javascript/index.js']
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'src/main/resources/static')
        },
        devtool: "source-map",
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: "./src/main/resources/templates/index.html",
            })
        ]
    };