/**
 * Created by 0easy-23 on 2017/9/4.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class extends Component {
    render() {
        return (
            <div className="header">
                <div className="cityName">
                    <Link to="city">
                        <span>{this.props.cityName}</span>
                        <i className="icon-keyboard_arrow_down"></i>
                    </Link>
                </div>
                <div className="searchBar">
                    <div className="searchInput">
                        <i className="icon-search"></i>
                        <input type="text" className="input input-search" placeholder="请输入关键字"/>
                    </div>
                </div>
                <div className="personCenter">
                    <Link to="login"><i className="icon-user-circle-o"></i></Link>
                </div>
            </div>
        )
    }
}