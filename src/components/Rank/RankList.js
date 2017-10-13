/**
 * Created by 0easy-23 on 2017/9/28.
 */
import React, {Component} from 'react';
import API from '../../util/API';
import request from '../../util/request';
import {Link} from 'react-router-dom';
import Header from '../../components/Common/Header';
import Loading from '../../components/Common/Loading';
import {getLocalTime} from '../../util/tools';
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
        this.playAll = this.playAll.bind(this);
    }

    componentDidMount() {
        request.asyncGet(`/kugou/${API.rankid}?rankid=${this.props.match.params.id}&page=1&json=true`).then(res => res.json()).then(resData => {
            this.setState({
                loaded: true,
                rank_song: resData
            })
        }).catch(err => {
            console.log('Error:' + err);
        })
    }

    playAll() {
        const rankSongList = this.state.rank_song.songs.list;
        for (let i = 0; i < rankSongList.length; i++) {
            this.props.musicInfoActions.fetchMusic(rankSongList[i].hash);
        }
        this.props.musicInfoActions.getMusic({hash: rankSongList[0].hash});
        this.props.musicInfoActions.control({playing: true});
        this.props.history.push(`/play/#${rankSongList[0].hash}`);
    }

    addFavorite(ele) {
        const currentEle = this.refs[ele.hash];
        if (currentEle.style.color === '') {
            currentEle.style.color = 'rgb(233, 32, 61)';
            this.props.musicInfoActions.addFavorite(ele.hash + ',' + ele.filename);
        } else {
            currentEle.style.color = '';
            this.props.musicInfoActions.removeFavorite(ele.hash + ',' + ele.filename);
        }
    }

    setStyle(hash) {
        return this.props.favoriteMusic.length > 0 && this.props.favoriteMusic.toString().indexOf(hash) >= 0 ? {color: 'rgb(233, 32, 61)'} : {color: ''};
    }

    render() {
        return (
            <div className="container">
                <Header title={this.state.loaded ? this.state.rank_song.info.rankname : null}/>
                {this.state.loaded ?
                    <div className="rank_song_list">
                        <div className="rank_banner">
                            <div className="banner_img" style={{backgroundImage: `url(${this.state.rank_song.info.imgurl.replace(/\{size\}/g, 400)})`}}></div>
                            <p className="rank_tips_time">更新时间：{getLocalTime(this.state.rank_song.songs.timestamp)}</p>
                        </div>
                        <div className="play_all"><span>播放全部</span> <i onClick={this.playAll} className="icon-playlist_add"></i></div>
                        <ul className="songList">
                            {
                                this.state.rank_song.songs.list.map((ele, index) => {
                                    return (
                                        <li key={index}>
                                            <em>{index + 1}</em>
                                            <Link to={'/play/#' + ele.hash}>
                                                <span className={this.props.music.hash === ele.hash ? 'active' : ''}>{ele.filename}</span>
                                            </Link>
                                            <i className="icon-favorite" style={this.setStyle(ele.hash)} ref={ele.hash} onClick={() => this.addFavorite(ele)}></i>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div> :
                    <Loading/>
                }
            </div>
        )
    }
}

