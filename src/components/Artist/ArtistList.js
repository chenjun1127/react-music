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
        };
    }

    componentDidMount() {
        request.asyncGet(`/kugou/${API.singer_list}${this.props.match.params.id}?json=true`).then(res => res.json()).then(resData => {
            this.setState({
                loaded: true,
                artistList: resData,
            });

        }).catch(err => {
            console.log('Error:' + err);
        });
    }

    render() {
        return (
            <div className="container">
                <Header title={this.state.loaded ? this.state.artistList.classname : null}/>
                {this.state.loaded ?
                    <ul className="artistSingerList">
                        {
                            this.state.artistList.singers.list.info.map((ele) => {
                                return (
                                    <li key={ele.singerid}>
                                        <Link to={{pathname:`/artist/list/singer/${ele.singerid}`,state:{singerimg:ele.imgurl,singername:ele.singername}}}>
                                            <img src={ele.imgurl.replace(/\{size\}/g, 400)}/>
                                            <span>{ele.singername}</span>
                                            <i className="icon-keyboard_arrow_right"></i>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul> :
                    <Loading/>
                }
            </div>
        )
    }
}