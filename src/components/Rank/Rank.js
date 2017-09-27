/**
 * Created by 0easy-23 on 2017/9/7.
 */
import React, {Component} from 'react';
import API from '../../util/API';
import request from '../../util/request';
import {Link} from 'react-router-dom';
import HomeHeader from '../../components/Home/HomeHeader';
import Nav from '../../components/Home/Nav';
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        request.asyncGet(`/kugou/${API.rank}`).then(res => res.json()).then(resData => {
            this.props.rankDataActions.saveRankList(resData);
            this.setState({
                loaded: true
            })
        }).catch(err => {
            console.log('Error:' + err);
        })
    }

    render() {
        return (
            <div className="container">
                <HomeHeader {...this.props}/>
                <Nav/>
                {this.state.loaded ?
                    <ul className="rankList">
                        {
                            this.props.rankList.rank.list.map((ele) => {
                                return (
                                    <li key={ele.rankid}>
                                        <Link to={`/rank/list/${ele.rankid}`}>
                                            <img src={ele.imgurl.replace(/\{size\}/g, 400)}/>
                                            <div className="rank_right">
                                                <p>{ele.rankname}</p>
                                            </div>
                                            <i className="icon-keyboard_arrow_right"></i>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul> :
                    <div>加载数据中...</div>
                }

            </div>
        )
    }
}

