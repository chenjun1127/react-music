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

export default class extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        request.asyncGet(`/kugou/${API.new_song}`).then(res => res.json()).then(resData => {
            this.setState({
                loaded: true,
                newsong:resData.data
            })
        }).catch(err => {
            console.log('Error:' + err);
        })
    }
    render(){
        return(
            <div className="container">
                <HomeHeader {...this.props}/>
                <Nav {...this.props}/>
                {this.state.loaded ?
                    <ul className="songList">
                        {
                            this.state.newsong.map((ele, index) => {
                                return (
                                    <li key={index}>
                                        {/*<em>{index + 1}</em>*/}
                                        <Link to={'/play/#' + ele.hash}>
                                            <span className={this.props.music.hash === ele.hash ? 'active' : ''}>{ele.filename}</span>
                                        </Link>
                                        <i className="icon-favorite"></i>
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