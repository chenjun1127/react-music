/**
 * Created by 0easy-23 on 2017/10/13.
 */
import React, {Component} from 'react';
import Header from '../../components/Common/Header';
import headPic from '../../static/images/girl.jpg';
import {Link} from 'react-router-dom';
export default class extends Component {
    render(){
        return (
            <div className="container">
                <Header title="个人中心"/>
                <div className="user-inner">
                    <div className="userBox">
                        <img src={headPic} />
                        <div className="userInfo">
                            <p>当前用户：{this.props.userInfo.userName}</p>
                        </div>
                    </div>
                    <ul className="list-block">
                        <li>
                            <span>我的收藏列表</span>
                            <Link to={'/user/love'}>
                                <i className="icon-keyboard_arrow_right"></i>
                            </Link>
                        </li>
                        <li>
                            <span>开发者：<a href="https://github.com/chenjun1127/react-music">Jone-chen </a></span>
                        </li>
                        <li>
                            <span><a href="http://www.cnblogs.com/jone-chen/">开发者博客</a></span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}