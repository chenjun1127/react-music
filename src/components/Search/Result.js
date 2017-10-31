/**
 * Created by 0easy-23 on 2017/10/9.
 */
import React, {Component} from 'react';
import Header from '../../components/Common/Header';
import {Link} from 'react-router-dom';
import Loading from '../../components/Common/Loading';

export default class extends Component {
    componentDidMount() {
        this.props.searchActions.fetchSearchResult(this.props.location.state.searchValue);
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

    playAll() {
        const singerSongs = this.props.resultList.data.info;
        for (let i = 0; i < singerSongs.length; i++) {
            this.props.musicInfoActions.fetchMusic(singerSongs[i].hash.toUpperCase());
        }
        this.props.musicInfoActions.getMusic({hash: singerSongs[0].hash.toUpperCase()});
        this.props.musicInfoActions.control({playing: true});
        this.props.history.push(`/play/#${singerSongs[0].hash.toUpperCase()}`);
    }

    render() {
        let result;
        if (this.props.spin && JSON.stringify(this.props.resultList) !== '{}') {
            result = this.props.resultList.data.info.map((ele, index) => {
                return (
                    <li key={index}>
                        {/*fuck,真变态，酷狗云音乐API有坑*/}
                        <Link to={'/play/#' + ele.hash.toUpperCase()}>
                            <span className={this.props.music.hash === ele.hash ? 'active' : ''}>{ele.filename}</span>
                        </Link>
                        <i className="icon-favorite" style={this.setStyle(ele.hash)} ref={ele.hash} onClick={() => this.addFavorite(ele)}></i>
                    </li>
                )
            });
        }
        return (
            <div className="container">
                <Header title={this.props.location.state.searchValue} rightIcon="icon-playlist_add" rightIconStyle={{fontSize: '24px'}} rightAction={this.playAll.bind(this)}/>
                {
                    this.props.spin && JSON.stringify(this.props.resultList) !== '{}' ? <ul className="songList">{result}</ul> : <Loading/>
                }
            </div>
        )
    }
}