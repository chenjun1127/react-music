/**
 * Created by 0easy-23 on 2017/9/15.
 */
import React, {Component} from 'react';
import 'babel-polyfill';
import classnames from 'classnames';
import Header from '../../components/Common/Header';
import * as localStore from '../../util/localStorage';
import {formatTime} from '../../util/tools';
import Slider from 'react-slick';
import '../../static/css/media-response.css';
import MusicList from '../../containers/Home/MusicList';
import Loading from '../../components/Common/Loading';
import noData from '../../static/images/nodata.png';
export default class Player extends Component {
    static defaultProps = {
        background: '-webkit-linear-gradient(#e9203d, #e9203d) no-repeat, #ddd',
        settings: {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            modal: false, // 弹层默认不显示
        };
        this.onChange = this.onChange.bind(this);
        this.playPause = this.playPause.bind(this);
        this.showMusicList = this.showMusicList.bind(this);
        this.getCurrentSong = this.getCurrentSong.bind(this);
        this.playPrev = this.playPrev.bind(this);
        this.playNext = this.playNext.bind(this);
    }

    componentDidMount() {
        // const hash = this.props.match.params.id;
        const hash = this.props.location.hash.replace(/#/,'');
        if (hash && hash !== 'null') {
            this.props.musicInfoActions.getMusic({hash: hash});
            this.props.musicInfoActions.fetchMusic(hash);
            this.props.musicInfoActions.control({playing: true});
        }
    }

    playPause() {
        this.props.musicInfoActions.control({playing: !this.props.control.playing});
    }

    onChange(e) {
        this.props.musicInfoActions.control({playing: true});
        this.props.audio.player.seekTo(parseFloat(e.target.value));
    }

    showMusicList() {
        this.setState({
            modal: true
        })
    }

    changeShowModal(e) {
        this.setState({
            modal: e.modal
        })
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

    playPrev() {
        const hash = this.props.music.hash;
        const musicList = this.props.musicList;
        let index = 0;
        if (musicList.length > 0) {
            for (let i = 0; i < musicList.length; i++) {
                if (musicList[i].song.hash === hash) {
                    index = i;
                }
            }
        }
        let currentIndex = index - 1 < 0 ? musicList.length - 1 : --index;
        const currentSong = musicList[currentIndex].song;
        this.props.musicInfoActions.getMusic({hash: currentSong.hash});
        this.props.history.replace('#' + currentSong.hash);
        this.props.musicInfoActions.fetchMusic(currentSong.hash);
    }
    playNext(){
        const hash = this.props.music.hash;
        const musicList = this.props.musicList;
        let index = 0;
        if (musicList.length > 0) {
            for (let i = 0; i < musicList.length; i++) {
                if (musicList[i].song.hash === hash) {
                    index = i;
                }
            }
        }
        let currentIndex = index + 1 > musicList.length - 1 ? 0 : ++index;
        const currentSong = musicList[currentIndex].song;
        this.props.musicInfoActions.getMusic({hash: currentSong.hash});
        this.props.history.replace('#' + currentSong.hash);
        this.props.musicInfoActions.fetchMusic(currentSong.hash);
    }

    render() {
        if (this.props.spin && this.getCurrentSong()) {
            const currentSong = this.getCurrentSong().song;
            const currentSongLyrics = this.getCurrentSong().lyrics;
            const albumImg = currentSong.imgUrl.replace(/\{size\}/g, 400);
            const currentTime = formatTime(this.props.progress.currentTime);
            const duration = formatTime(localStore.getItem('duration'));
            const percentage = this.props.progress.percentage;
            const rangeStyle = percentage * 100 + '%' + ' ' + '100%';
            if(currentSong.error){
                return (
                    <div className="container">
                        <Header/>
                        <div className="no-data">
                            <img src={noData}/>
                            <span>很抱歉，当前音乐{currentSong.error}！</span>
                        </div>
                    </div>
                )
            }else{
                return (
                    <div className="container-full">
                        <div className="container-bg" style={{backgroundImage: `url(${albumImg})`}}></div>
                        <div className="container-play">
                            <Header style={{background: 'transparent'}}/>
                            <div className="container-inner">
                                <div className="player-title">
                                    <div className="songName">{currentSong.songName}</div>
                                    <div className="singerName"> - {currentSong.singerName} -</div>
                                </div>
                                <Slider className="sliderContainer" {...this.props.settings } >
                                    <div className="content-player">
                                        <div className="components-album">
                                            <div className={classnames('ablum-pic', this.props.control.playing ? 'playing' : 'paused')}
                                                 style={{background: `url(${albumImg}) center center`, backgroundSize: 'cover'}}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lyric">
                                        <div className="originLyric" style={{transform: 'translateY(-' + this.props.lyricsUpdate.index * 42 + 'px)'}}>
                                            {currentSongLyrics.map((ele, index) => {
                                                return (
                                                    <p key={index} id={`line-${index}`} className={this.props.lyricsUpdate.time === ele[0] ? 'line on' : 'line'}>
                                                        {ele[1]}
                                                    </p>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </Slider>
                                <div className="components-player-control">
                                    <div className="player-time">
                                        <div className="time_left">{currentTime}</div>
                                        <div className="player-range">
                                            <input type='range' min={0} max={1} step='any' value={percentage || '0'}
                                                   style={{background: this.props.background, backgroundSize: rangeStyle}} onChange={this.onChange}/>
                                        </div>
                                        <div className="time_right">{duration}</div>
                                    </div>
                                    <div className="player-btn">
                                        <i className="icon-prev" onClick={this.playPrev}></i>
                                        <i onClick={this.playPause} className={this.props.control.playing ? 'icon-pause' : 'icon-play'}></i>
                                        <i className="icon-next" onClick={this.playNext}></i>
                                        <i className="icon-list" onClick={this.showMusicList}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <MusicList musicList={this.props.musicList} show={this.state.modal} hash={this.props.match.params.id}
                                   changeShowModal={this.changeShowModal.bind(this)} {...this.props}/>
                    </div>
                )
            }
        } else if(!this.props.music.hash || this.props.music.hash === 'null'){
            return (
                <div className="container">
                    <Header/>
                    <div className="no-data">
                        <img src={noData}/>
                        <span>当前无音乐！</span>
                    </div>
                </div>
            )
        }else {
            return (
                <Loading/>
            )
        }
    }
}

