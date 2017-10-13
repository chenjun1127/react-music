/**
 * Created by 0easy-23 on 2017/9/28.
 */
import React, {Component} from 'react';
import request from '../../util/request';
import {Link} from 'react-router-dom';
import Header from '../../components/Common/Header';
import Loading from '../../components/Common/Loading';
import Cheerio from 'cheerio';
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            page: 1,
            singerSongs: [],
            hasMore: true,
        };
        // this.fetchData = this.fetchData.bind(this);
        this.playAll = this.playAll.bind(this);
    }

    componentDidMount() {
        // this.fetchData();
        request.asyncGet(`/yy_kugou/singer/home/${this.props.match.params.id}.html`).then(res => res.text()).then(res => {
            const $ = Cheerio.load(res);
            const list = $('#song_container').children();
            const dataArr = [];
            list.each((index, item) => {
                const link = $(item).find('a').find('input');
                dataArr.push(link.val());
            });
            this.setState({
                loaded: true,
                singerSongs: dataArr,
                singerimg: this.props.location.state.singerimg.replace(/\{size\}/g, '400'),
                singername: this.props.location.state.singername
            })
        })
    }

    playAll() {
        const singerSongs = this.state.singerSongs;
        for (let i = 0; i < singerSongs.length; i++) {
            this.props.musicInfoActions.fetchMusic(singerSongs[i].split('|')[1]);
        }
        this.props.musicInfoActions.getMusic({hash: singerSongs[0].split('|')[1]});
        this.props.musicInfoActions.control({playing: true});
        this.props.history.push(`/play/#${singerSongs[0].split('|')[1]}`);
    }

    // 此接口被屏蔽了
    // fetchData() {
    //     request.asyncGet(`/kugou/${API.singer_detail}${this.props.match.params.id}?json=true&page=${this.state.page}`).then(res => res.json()).then(resData => {
    //         this.setState({
    //             loaded: true,
    //             singerInfo: resData.info,
    //             singerSongs: [...this.state.singerSongs, ...resData.songs.list],
    //             page: this.state.page + 1,
    //         });
    //         if (this.state.singerSongs.length >= resData.songs.total) {
    //             this.setState({
    //                 hasMore: false
    //             })
    //         }
    //     }).catch(err => {
    //         console.log('Error:' + err);
    //     })
    // }

    addFavorite(ele) {
        const hash  = ele.split('|')[1];
        const filename = ele.split('|')[0];
        const currentEle = this.refs[hash];
        if (currentEle.style.color === '') {
            currentEle.style.color = 'rgb(233, 32, 61)';
            this.props.musicInfoActions.addFavorite(hash + ',' + filename);
        } else {
            currentEle.style.color = '';
            this.props.musicInfoActions.removeFavorite(hash + ',' + filename);
        }
    }

    setStyle(hash) {
        return this.props.favoriteMusic.length > 0 && this.props.favoriteMusic.toString().indexOf(hash) >= 0 ? {color: 'rgb(233, 32, 61)'} : {color: ''};
    }

    render() {
        return (
            <div className="container">
                <Header title={this.state.loaded ? this.state.singername : null}/>
                {this.state.loaded && this.state.singerSongs.length > 0 ?
                    <div className="singerContainer">
                        <div className="album-bg-singer" style={{backgroundImage: `url(${this.state.singerimg})`}}><i onClick={this.playAll} className="icon-play"></i></div>
                        <ul className="songList">
                            {
                                this.state.singerSongs.map((ele, index) => {
                                    const eleArr = ele.split('|');
                                    return (
                                        <li key={index}>
                                            {/*<em>{index + 1}</em>*/}
                                            <Link to={`/play/#${eleArr[1]}`}>
                                                <span className={this.props.music.hash === eleArr[1] ? 'active' : ''}>{eleArr[0]}</span>
                                            </Link>
                                            <i className="icon-favorite" style={this.setStyle(eleArr[1])} ref={eleArr[1]} onClick={() => this.addFavorite(ele)}></i>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    :
                    <Loading/>
                }
            </div>
        )
    }
}