/*
 * @Author: ryyyyy
 * @Date: 2022-03-07 14:04:01
 * @LastEditors: ryyyyy
 * @LastEditTime: 2022-06-26 12:02:05
 * @FilePath: /antd-error/webpack-config/resolve.js
 * @Description: 
 * 
 */
module.exports = projectInfo => {
    let alias = {};
    //判断项目
    switch(projectInfo.name){
        case 'test':
            alias.global = projectInfo.dirname + '/src/test/global/index.js';
            alias.utils = projectInfo.dirname + '/src/test/utils/index.js';
            break;
        default:
            break;
    }
    return {
        extensions: ['.jsx', '.js', '.scss', '.css'],
        modules:[projectInfo.dirname+'/node_modules'],
        alias
    };
}