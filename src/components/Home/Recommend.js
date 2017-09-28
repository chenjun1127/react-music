/**
 * Created by 0easy-23 on 2017/9/7.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import request from '../../util/request';
import 'babel-polyfill';
import Slider from 'react-slick';
import API from '../../util/API';
import SongPlayList from '../../containers/Home/SongPlayList';
import Loading from '../../components/Common/Loading';
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    async fetchData() {
        try {
            let response_new_song = await request.asyncGet(`/kugou/${API.new_song}`);
            let data_new_song = await response_new_song.json();
            this.setState({
                banner: data_new_song.banner,
                new_song: data_new_song.data,
                loaded: true,
            })
        } catch (err) {
            console.log("Error", err);
        }
    }

    render() {
        const setting = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
        };
        const carousel = this.state.loaded && this.state.banner.map((ele, index) => {
            return (
                <div key={index}>
                    <img src={ele.imgurl} alt={ele.title}/>
                </div>
            )
        });

        if (this.state.loaded) {
            return (
                <div className="content">
                    <div className="content-inner">
                        <Slider {...setting}>
                            {carousel}
                        </Slider>
                        <div className="title">
                            <span>推荐歌单</span>
                            <Link to="/album">
                                <i className="icon-keyboard_arrow_right"></i>
                            </Link>
                        </div>
                        <SongPlayList/>
                    </div>
                </div>
            )
        } else {
            return (
                <Loading/>
            )
        }
    }
}

