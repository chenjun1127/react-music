/**
 * Created by 0easy-23 on 2017/9/28.
 */
import React, {Component} from 'react';
import API from '../../util/API';
import request from '../../util/request';
import {Link} from 'react-router-dom';
import HomeHeader from '../../components/Home/HomeHeader';
import Nav from '../../components/Home/Nav';
import Loading from '../../components/Common/Loading';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        request.asyncGet(`/kugou/${API.singer_category}`).then(res => res.json()).then(resData => {
            this.setState({
                loaded: true,
                artist: resData.list,
            })
        }).catch(err => {
            console.log('Error:' + err);
        })
    }

    render() {
        return (
            <div className="container">
                <HomeHeader {...this.props}/>
                <Nav {...this.props}/>
                {this.state.loaded ?
                    <ul className="artistList">
                        {
                            this.state.artist.map((ele) => {
                                return (
                                    <li key={ele.classid}>
                                        <Link to={`/artist/list/${ele.classid}`}>
                                            <span>{ele.classname}</span>
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