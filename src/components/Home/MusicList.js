/**
 * Created by 0easy-23 on 2017/9/20.
 */
import React, {Component} from 'react';
export default class extends Component {
    close() {
        this.props.changeShowModal({modal: false})
    }

    playThisMusic(e) {
        this.props.musicInfoActions.getMusic({hash: e.song.hash});
        this.props.history.replace('#' + e.song.hash);
        this.props.musicInfoActions.fetchMusic(e.song.hash);
    }

    render() {
        const musicList = this.props.musicList;
        const lists = musicList.length > 0 && musicList.map((ele, index) => {
            return (
                <li key={index}>
                    <span onClick={this.playThisMusic.bind(this, ele)} className={this.props.music.hash === ele.song.hash ? 'active' : ''}>{ele.song.songName}
                        - {ele.song.singerName}</span>
                    <i className="icon-favorite"></i>
                </li>
            )
        });

        return (
            <div className="modal modal-music-list" style={{display: this.props.show ? 'block' : 'none'}}>
                <div className="list-title">
                    <i className="icon-close" onClick={this.close.bind(this)}></i>
                    <span>播放列表（{musicList.length}）首</span>
                    <em>清除</em>
                </div>
                <ul className="list-ul">
                    {
                        lists
                    }
                </ul>
            </div>
        )
    }
}