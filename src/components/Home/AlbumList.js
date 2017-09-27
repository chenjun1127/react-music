/**
 * Created by 0easy-23 on 2017/9/7.
 */
import React, {Component} from 'react';
import Header from '../Common/Header';
import {Link} from 'react-router-dom';
export default class extends Component {
    render() {
        const songPlay = this.props.totalAlbums.info.map((ele, index) => {
            return (
                <li key={index}>
                    <Link to={`/album/${ele.specialid}`}>
                        <img src={ele.imgurl.replace(/\{size\}/g, 400)}/>
                        <p>{ele.specialname}</p>
                        <div className="albumTips">
                            <i className="icon-headset"></i>
                            <span>{ele.playcount > 9999 ? (ele.playcount / 10000).toFixed(2) + '万': ele.playcount}</span>
                        </div>
                    </Link>
                </li>
            )
        });
        return (
            <div className="container">
                <Header title="精选歌单"/>
                <ul className="songPlay">
                    {songPlay}
                </ul>
            </div>
        )
    }
}

