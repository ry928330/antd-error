/*
 * @Author: ryyyyy
 * @Date: 2022-06-21 17:46:28
 * @LastEditors: ryyyyy
 * @LastEditTime: 2022-06-25 11:55:01
 * @FilePath: /antd-error/webpack-config/entry.js
 * @Description: 
 * 
 */
let getEntry = projectInfo => {
    return  {
        index: './src/main/index.js',
        home: './src/home/index.js'
    };
}


module.exports = getEntry;