/*
 * @Author: ryyyyy
 * @Date: 2022-06-21 17:46:28
 * @LastEditors: ryyyyy
 * @LastEditTime: 2022-06-23 15:31:19
 * @Description: 
 * 
 */
const path = require('path');
module.exports = projectInfo => {
    let filename = projectInfo.mode === 'development' ? 'js/[name].js' : 'js/[name]-[contenthash].js';
    let result = {
        filename,
        path: path.resolve(projectInfo.dirname, 'dist/'+projectInfo.name)
    }
    return result;
}
