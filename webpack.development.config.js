const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/main.js",
    devtool: "inline-source-map",
    devServer: {
        static: './dist',
    },
    performance: {
        hints: false,
        maxEntryPointSize: 512000,
        maxAssetSize: 512000
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: "asset",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Development",
        }),
        new MiniCssExtractPlugin(),
    ],
};