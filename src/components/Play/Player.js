/**
 * Created by 0easy-23 on 2017/9/15.
 */
import React, {Component} from 'react'
import ReactPlayer from 'react-player';
import localStorage from '../../util/localStorage';
export default class extends Component {
    constructor(props) {
        super(props);
        this.onDuration = this.onDuration.bind(this);
        this.onProgress = this.onProgress.bind(this);
        this.getCurrentSong = this.getCurrentSong.bind(this);
    }

    onDuration(e) {
        localStorage.setItem('duration', e);
    }

    getCurrentSong(){
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
            if (state.playedSeconds  > currentLyrics[i][0]) {
                //显示到页面
                // lyricContainer.textContent = that.lyric[i][1];
                this.props.musicInfoActions.updateLyrics({updateLyrics:currentLyrics[i][1],time:currentLyrics[i][0],index:i});
            }
        }
    }

    componentDidMount() {
        this.props.musicInfoActions.audioObj({player: this.player});
    }

    render() {
        const currentSong = this.getCurrentSong();
        return (
            <div style={{display: 'none'}}>
                <ReactPlayer url={currentSong ? currentSong.song.url : null} controls playing={this.props.control.playing} ref={player => {
                    this.player = player
                }} onProgress={this.onProgress} onDuration={this.onDuration}/>
            </div>
        )
    }
}