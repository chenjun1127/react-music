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
                                        <i className="icon-favorite" style={this.setStyle(ele.hash)} ref={ele.hash} onClick={() => this.addFavorite(ele)}></i>
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