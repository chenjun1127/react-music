/**
 * Created by 0easy-23 on 2017/10/13.
 */
import React, {Component} from 'react';
import Header from '../../components/Common/Header';
import {Link} from 'react-router-dom';
import noData from '../../static/images/nodata.png';
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loveMusicList: this.props.favoriteMusic,
        };
    }

    removeLoveMusic(ele) {
        this.props.musicInfoActions.removeFavorite(ele.hash + ',' + ele.filename);
        this.setState({loveMusicList: this.props.favoriteMusic});
    }

    render() {
        return (
            <div className="container">
                <Header title={'收藏列表（' + this.state.loveMusicList.length + '首）'}/>
                {
                    this.props.favoriteMusic.length > 0 ?
                        <ul className="songList">
                            {
                                this.state.loveMusicList.map((ele, index) => {
                                    const eleArr = ele.split(',');
                                    return (
                                        <li key={index}>
                                            <Link to={'/play/#' + eleArr[0]}>
                                                <span className={this.props.music.hash === eleArr[0] ? 'active' : ''}>{eleArr[1]}</span>
                                            </Link>
                                            <i className="icon-trash-2" onClick={() => this.removeLoveMusic(ele)}></i>
                                        </li>
                                    )
                                })
                            }
                        </ul> :
                        <div className="no-data">
                            <img src={noData}/>
                            <span>暂无音乐，快去添加吧！</span>
                        </div>
                }
            </div>
        )
    }
}