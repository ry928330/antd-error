/*
 * @Author: ryyyyy
 * @Date: 2022-03-07 14:04:01
 * @LastEditors: ryyyyy
 * @LastEditTime: 2022-06-23 15:31:15
 * @FilePath: /antd-error/webpack-config/resolve.js
 * @Description: 
 * 
 */
module.exports = projectInfo => {
    let alias = {};
    //判断项目
    switch(projectInfo.name){
        case 'test':
            alias['roi-css'] = projectInfo.dirname + '/src/common/roi/css/roi.css';
            alias.roi = projectInfo.dirname + '/src/common/roi/js/roi.js';
            alias.global = projectInfo.dirname + '/src/test/global/index.js';
            alias.morse = projectInfo.dirname + '/src/test/morse/index.js';
            alias.constant = projectInfo.dirname + '/src/test/constant/index.js';
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