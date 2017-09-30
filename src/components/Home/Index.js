/**
 * Created by 0easy-23 on 2017/9/27.
 */
import React, {Component} from 'react';
import HomeHeader from '../../components/Home/HomeHeader';
import Nav from '../../components/Home/Nav';
import Recommend from './Recommend';
export default class extends Component {
    componentDidMount() {
        this.props.searchActions.fetchSearchHot();
    }

    render() {
        return (
            <div className="container">
                <HomeHeader {...this.props}/>
                <Nav {...this.props}/>
                <Recommend/>
            </div>
        )
    }
}