/**
 * Created by 0easy-23 on 2017/9/14.
 */
import React, {Component} from 'react';
import Header from '../Common/Header';
import request from '../../util/request';
import API from '../../util/API';
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

    fetchData() {
        request.get(`/kugou/${API.song_playlist}/${this.props.match.params.id}?json=true`).then(res => {
            this.setState({
                albumInfo: res.info,
                albumList: res.list,
                loaded: true
            })
        })

    }

    render() {
        return (
            <div className="container">
                <Header title="歌单"/>
                {
                    this.state.loaded ?
                    <div className="album-top">
                        <div className="album-bg" style={{backgroundImage:`url(${this.state.albumInfo.list.imgurl.replace(/\{size\}/g,400)})`}}></div>
                        <div className="album-info">
                            <img className="album-img" src={this.state.albumInfo.list.imgurl.replace(/\{size\}/g,400)} />
                            <div className="album-text">
                                <p>名称：{this.state.albumInfo.list.specialname}</p>
                                <p>创建人：{this.state.albumInfo.list.nickname}</p>
                                <p>更新时间：{this.state.albumInfo.list.publishtime.split(/\s/)[0]}</p>
                            </div>
                        </div>
                        <div className="album-list">
                            <ul>
                                {
                                    this.state.albumList.list.info.map((ele,index)=>{
                                        return(
                                            <li key={index}>
                                                <Link to={'/play/#'+ele.hash}>
                                                    <span>{ele.filename}</span>
                                                    <p className="album-remark">{ele.remark}</p>
                                                </Link>
                                                <i className="icon-favorite"></i>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div> :
                    <div className="loading">数据加载中...</div>
                }
            </div>
        )
    }
}