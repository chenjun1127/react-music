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

    }
    render(){
        return(
            <div className="container">
                <HomeHeader {...this.props}/>
                <Nav {...this.props}/>
                {this.state.loaded ?
                    <ul className="rankList">
                       fasdfds
                    </ul> :
                    <Loading/>
                }
            </div>
        )
    }
}