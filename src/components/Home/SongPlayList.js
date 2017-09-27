/**
 * Created by 0easy-23 on 2017/9/23.
 */
import React,{Component} from 'react';
import request from '../../util/request';
import API from '../../util/API';
import 'babel-polyfill';
import {Link} from 'react-router-dom';
export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    async fetchData() {
        try {
            let response_song_play = await request.asyncGet(`/kugou/${API.song_play}`);
            let data_song_play = await response_song_play.json();
            this.props.albumsActions.updateMusic(data_song_play.plist.list);
            this.setState({
                loaded: true,
            });
        } catch (err) {
            console.log("Error", err);
        }

    }

    render() {
        const songPlay = this.state.loaded && this.props.totalAlbums.info.map((ele, index) => {
                if (index < 9) {
                    return (
                        <li key={index}>
                            <Link to={`/album/${ele.specialid}`} >
                                <img src={ele.imgurl.replace(/\{size\}/g,400)}/>
                                <p>{ele.specialname}</p>
                                <div className="albumTips">
                                    <i className="icon-headset"></i>
                                    <span>{ele.playcount > 9999 ? (ele.playcount / 10000).toFixed(2) + '万': ele.playcount}</span>
                                </div>
                            </Link>
                        </li>
                    )
                } else{
                    return null;
                }
            });

        return (
            <ul className="songPlay">
                {songPlay}
            </ul>
        )
    }
}