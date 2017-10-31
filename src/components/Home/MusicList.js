/**
 * Created by 0easy-23 on 2017/9/20.
 */
import React, {Component} from 'react';
export default class extends Component {
    constructor(props) {
        super(props);
        this.clearMusicById = this.clearMusicById.bind(this);
    }

    close() {
        this.props.changeShowModal({modal: false})
    }

    playThisMusic(e) {
        this.props.musicInfoActions.getMusic({hash: e.song.hash});
        this.props.history.replace('#' + e.song.hash);
        this.props.musicInfoActions.fetchMusic(e.song.hash);
        this.close();
    }

    clearMusicById(hash, i) {
        const list = this.props.musicList;
        let index;
        if (hash === this.props.music.hash) {
            if (list.length > 1) {
                index = i === list.length - 1 ? 0 : i + 1;
                this.props.musicInfoActions.removeMusic(hash);
                const reg = new RegExp(window.location.href.split('#')[1]);
                const url = window.location.href.replace(reg, list[index].song.hash);
                window.location.replace(url);
                this.props.musicInfoActions.getMusic({hash: list[index].song.hash});
            } else {
                this.props.musicInfoActions.removeMusic(hash);
                this.props.musicInfoActions.getMusic({hash: ''});
                window.history.back();
            }
        } else {
            this.props.musicInfoActions.removeMusic(hash);
        }
    }

    clearMusicAll() {
        this.props.musicInfoActions.removeMusicAll();
        this.props.musicInfoActions.getMusic({hash: ''});
        window.history.back();
    }

    render() {
        const musicList = this.props.musicList;
        const lists = musicList.length > 0 && musicList.map((ele, index) => {
            return (
                <li key={index}>
                    <span onClick={this.playThisMusic.bind(this, ele)} className={this.props.music.hash === ele.song.hash ? 'active' : ''}>{ele.song.fileName}</span>
                    <i onClick={() => this.clearMusicById(ele.song.hash, index)}>&times;</i>
                </li>
            )
        });
        return (
            <div className={`modal-music-list ${this.props.show ? 'translateY-0' : ''}`}>
                <div className="list-title">
                    <i className="icon-close" onClick={this.close.bind(this)}></i>
                    <span>播放列表（{musicList.length}）首</span>
                    <em onClick={this.clearMusicAll.bind(this)}>清除</em>
                </div>
                <ul className="list-ul">
                    {lists}
                </ul>
            </div>
        )
    }
}