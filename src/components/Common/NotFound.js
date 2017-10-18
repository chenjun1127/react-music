/**
 * Created by 0easy-23 on 2017/10/16.
 */
import React, {Component} from 'react';
import img_404 from '../../static/images/404.png';
import {Link} from 'react-router-dom';
export default class extends Component {
    render() {
        return (
            <div className="notFound">
                <img src={img_404}/>
                <span>抱歉，页面出错了！你访问的页面已经离开地球</span>
                <Link to={'/'}>返回首页</Link>
            </div>
        )
    }
}