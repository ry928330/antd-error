/*
 * @Author: ryyyyy
 * @Date: 2022-06-23 15:26:18
 * @LastEditors: ryyyyy
 * @LastEditTime: 2022-06-25 12:01:25
 * @FilePath: /antd-error/src/main/index.js
 * @Description: 
 * 
 */
import React from "react";
import ReactDOM from "react-dom";
import { Swiper, SwiperSlide } from 'swiper';
import * as echarts from 'echarts';
import * as antd from 'antd';
import {Button} from 'antd';
import 'antd/dist/antd.css'; 
// import "swiper/swiper.min.css";
import App from './app';
console.log(echarts, antd, Swiper,  23333)

ReactDOM.render(
    <div><Button type="primary" />hello, index</div>,
    // <App />,
    document.getElementById('app')
)