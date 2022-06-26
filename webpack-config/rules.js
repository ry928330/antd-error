/*
 * @Author: ryyyyy
 * @Date: 2022-06-21 17:46:28
 * @LastEditors: ryyyyy
 * @LastEditTime: 2022-06-26 12:02:19
 * @FilePath: /antd-error/webpack-config/rules.js
 * @Description:
 *
 */

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const cssCommonLoader = (projectInfo) =>
  !projectInfo.isDevelop
    ? {
        loader: "style-loader",
      }
    : {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: "../",
        },
      };

module.exports = (projectInfo) => {
  let results = [
    {
      test: /\.css$/,
      use: [
        cssCommonLoader(projectInfo),
        {
          loader: "css-loader",
        },
      ],
    },
    {
      test: /\.scss$/,
      use: [
        cssCommonLoader(projectInfo),
        {
          loader: "css-loader",
        },
        {
          loader: "sass-loader",
        },
      ],
    },
    {
      test: /\.(gif|png|jpg|woff|svg|ttf|eot|otf|ico)$/i, //图片的处理
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 1024 * 2, // 2k以下的base64内联，不产生图片文件(2k以上则会自动实用file-loader去打包)
            outputPath: "images/", // 指定打包后的图片位置
            name: "[name].[ext]",
            //   publicPath:'./images',
            esModule: false,
          },
        },
      ],
    },
    {
      test: /\.(js|jsx)$/,
      use: "babel-loader",
      exclude: /node_modules/,
    }
  ];
  return results;
};
