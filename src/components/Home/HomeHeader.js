/**
 * Created by 0easy-23 on 2017/9/4.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
export default class extends Component {
    onFocus() {
        this.props.history.push({pathname:'/search'})
    }

    render() {
        return (
            <div className="header">
                <div className="cityName">
                    <Link to="/user/login"><i className="icon-user-circle-o"></i></Link>
                </div>
                <div className="searchBar">
                    <div className="searchInput">
                        <i className="icon-search"></i>
                        <input type="text" className="input input-search" onFocus={this.onFocus.bind(this)} placeholder="请输入关键字"/>
                    </div>
                </div>
                <div className="music-icon">
                    <Link to={this.props.music.hash && this.props.music.hash && this.props.control.playing !== 'null' ? `/play/#${this.props.music.hash}` : '/play/#null'}>
                        <div className="music-icon-animate ">
                            {
                                ['one', 'two', 'three', 'four'].map((ele, i) => {
                                    return (
                                        <span key={i} className={classNames(ele, this.props.music.hash && this.props.music.hash !== 'null' && this.props.control.playing ? 'playing' : 'paused')}></span>
                                    )
                                })
                            }
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}