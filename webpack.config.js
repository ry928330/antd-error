/*
 * @Author: ryyyyy
 * @Date: 2022-06-21 17:46:28
 * @LastEditors: ryyyyy
 * @LastEditTime: 2022-06-25 14:42:22
 * @FilePath: /antd-error/webpack.config.js
 * @Description: 
 * 
 */
const ENV = process.env.NODE_ENV ? process.env.NODE_ENV.split('::') : ['development', 'test'];
const path = require('path');
const plugin = require('./webpack-config/plugin');
const entry = require('./webpack-config/entry');
const output = require('./webpack-config/output');
const rules = require('./webpack-config/rules');
const devServer = require('./webpack-config/dev-server');
const resolve = require('./webpack-config/resolve');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const getTargetProject = () => {
    return ENV[1];
}
/**项目配置信息 */
let projectInfo = {
    dirname: path.resolve(__dirname),
    name: getTargetProject(),
    mode: ENV[0],
    isDevelop: ENV[0] === 'development'
}
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();


let options = {
    mode: projectInfo.mode,
    entry: entry(projectInfo),
    output: output(projectInfo),
    plugins: plugin(projectInfo),
    module: {
        rules: rules(projectInfo),
    },
    devServer: devServer(projectInfo),
    resolve: resolve(projectInfo),
    devtool: false,
    // devtool: projectInfo.mode == 'production' ? false : 'source-map',
    optimization : {
        splitChunks: {
            chunks: "all",
            minSize: 0,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: { // 缓存组
                vendors: {
                    name: 'node_modules',
                    test: /[\\/]node_modules[\\/](?!echarts)(?!axios)(?!swiper)/,
                    priority: -10,
                },
                swiper: {
                    name: 'swiper',
                    test: /[\\/]node_modules[\\/]swiper[\\/]/,
                    priority: 20,
                },
                echarts: {
                    name: 'echarts',
                    test: /[\\/]node_modules[\\/]echarts[\\/]/,
                    priority: 50,
                }
            }
        }
    }
}

module.exports = smp.wrap(options);
