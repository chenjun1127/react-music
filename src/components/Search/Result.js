/**
 * Created by 0easy-23 on 2017/10/9.
 */
import React, {Component} from 'react';
import Header from '../../components/Common/Header';
import {Link} from 'react-router-dom';
import Loading from '../../components/Common/Loading';
export default class extends Component {
    componentDidMount() {
        this.props.searchActions.fetchSearchResult(this.props.location.state.searchValue);
    }

    render() {
        let result;
        if (this.props.spin && JSON.stringify(this.props.resultList) !== '{}') {
            result = this.props.resultList.data.info.map((ele, index) => {
                return (
                    <li key={index}>
                        {/*fuck,真变态，酷狗云音乐API有坑*/}
                        <Link to={'/play/#' + ele.hash.toUpperCase()}>
                            <span className={this.props.music.hash === ele.hash ? 'active' : ''}>{ele.filename}</span>
                        </Link>
                        <i className="icon-favorite"></i>
                    </li>
                )
            });
        }
        return (
            <div className="container">
                <Header title={this.props.location.state.searchValue}/>
                {
                    this.props.spin && JSON.stringify(this.props.resultList) !== '{}' ? <ul className="songList">{result}</ul> : <Loading/>
                }
            </div>
        )
    }
}