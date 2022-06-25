/*
 * @Author: ryyyyy
 * @Date: 2022-06-21 17:46:28
 * @LastEditors: ryyyyy
 * @LastEditTime: 2022-06-25 14:48:15
 * @FilePath: /antd-error/webpack-config/plugin.js
 * @Description: 
 * 
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackCssSprite = require('webpack-css-sprite');
const CopyPlugin = require('copy-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const path = require('path');
const HappyPack = require('happypack');//快乐打包
// const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

// let px2rem = require('postcss-px2rem');

module.exports = projectInfo => {
    let result = [
        new CleanWebpackPlugin(),
        // !projectInfo.isDevelop && new MiniCssExtractPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: projectInfo.name,
            filename: 'home.html',
            chunks: ['home', 'node_modules', 'echarts'],
            template: './src/home/templates/index.html',
            minify: {
                removeAttributeQuotes: true, // 移除属性的引号
                collapseWhitespace: true    // 代码压缩
            }
        }),
        new HtmlWebpackPlugin({
            title: projectInfo.name,
            filename: 'index.html',
            chunks: ['index', 'echarts', 'node_modules', 'axios', 'antd', 'swiper'],
            template: './src/main/templates/index.html',
            minify: {
                removeAttributeQuotes: true,// 移除属性的引号
                collapseWhitespace: true //代码压缩
            }
        })
    ].filter(Boolean);
    return result;
}
