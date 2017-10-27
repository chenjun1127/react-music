/**
 * Created by 0easy-23 on 2017/9/15.
 */
import React, {Component} from 'react'
import ReactPlayer from 'react-player';
import * as localStore from '../../util/localStorage';

class Player extends Component {
    constructor(props) {
        super(props);
        this.onDuration = this.onDuration.bind(this);
        this.onProgress = this.onProgress.bind(this);
        this.getCurrentSong = this.getCurrentSong.bind(this);
        this.onEnd = this.onEnd.bind(this);
    }

    onDuration(e) {
        localStore.setItem('duration', e);
    }

    getCurrentSong() {
        const musicList = this.props.musicList;
        const hash = this.props.music.hash;
        let currentSong = null;
        if (musicList.length > 0 && hash) {
            musicList.map((ele) => {
                if (ele.song.hash === hash) {
                    currentSong = ele;
                }
            })
        }
        return currentSong;
    }

    onProgress(state) {
        const currentLyrics = this.getCurrentSong().lyrics;
        this.props.musicInfoActions.updateProgress({currentTime: state.playedSeconds, percentage: state.played});
        for (let i = 0, l = currentLyrics.length; i < l; i++) {
            if (state.playedSeconds > currentLyrics[i][0]) {
                //显示到页面
                // lyricContainer.textContent = that.lyric[i][1];
                this.props.musicInfoActions.updateLyrics({updateLyrics: currentLyrics[i][1], time: currentLyrics[i][0], index: i});
            }
        }
    }

    onEnd(e) {
        // 播放完毕播放下一首
        const musicList = this.props.musicList;
        const hash = this.props.music.hash;
        if (musicList.length > 1) {
            let index = 0;
            for (let i = 0; i < musicList.length; i++) {
                if (musicList[i].song.hash === hash) {
                    index = i;
                }
            }
            let currentIndex = index + 1 > musicList.length - 1 ? 0 : ++index;
            const currentSong = musicList[currentIndex].song;
            this.props.musicInfoActions.getMusic({hash: currentSong.hash});
            if (window.location.pathname === '/play/') {
                const reg = new RegExp(window.location.href.split('#')[1]);
                const url = window.location.href.replace(reg, currentSong.hash);
                window.location.replace(url);
            }
            this.props.musicInfoActions.fetchMusic(currentSong.hash);
        } else {
            this.props.musicInfoActions.control({playing: false});
        }

    }

    componentDidMount() {
        this.props.musicInfoActions.audioObj({player: this.player});
    }

    render() {
        const currentSong = this.getCurrentSong();
        const volume = this.props.volumeObj.volume;
        return (
            <div style={{display: 'none'}}>
                <ReactPlayer volume={volume} url={currentSong ? currentSong.song.url : null} controls playing={this.props.control.playing} ref={player => {
                    this.player = player
                }} onProgress={this.onProgress} onDuration={this.onDuration} onEnded={this.onEnd}/>
            </div>
        )
    }
}

export default Player;