/**
 * Created by 0easy-23 on 2017/9/28.
 */
import React, {Component} from 'react';
import API from '../../util/API';
import request from '../../util/request';
import {Link} from 'react-router-dom';
import Header from '../../components/Common/Header';
import Loading from '../../components/Common/Loading';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        request.asyncGet(`/kugou/${API.singer_detail}${this.props.match.params.id}?json=true`).then(res => res.json()).then(resData => {
            this.setState({
                loaded: true,
                singerInfo: resData.info,
                singerSongs: resData.songs
            });
            console.log(resData)
        }).catch(err => {
            console.log('Error:' + err);
        })
    }

    render() {
        return (
            <div className="container">
                <Header title={this.state.loaded ? this.state.singerInfo.singername : null}/>
            </div>
        )
    }
}