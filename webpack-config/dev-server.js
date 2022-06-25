/*
 * @Author: ryyyyy
 * @Date: 2021-03-01 14:44:12
 * @LastEditors: ryyyyy
 * @LastEditTime: 2022-06-25 11:31:45
 * @Description: Do not edit
 */
const path = require('path');
module.exports = projectInfo => {
    let port = projectInfo.name == 'test' ? 8087 : 8089;
    let result = {
        port,
        open: true,
        compress: true,
        // https: true,
        // host: '10.10.46.26',
    }
    return result;
}