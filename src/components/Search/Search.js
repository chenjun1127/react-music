/**
 * Created by 0easy-23 on 2017/9/30.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Loading from '../../components/Common/Loading';
import * as localStore from '../../util/localStorage';
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            value: '',
            display: false,
        };
        this.clearText = this.clearText.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.keyUp = this.keyUp.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSearchHot = this.handleSearchHot.bind(this);
    }

    componentDidMount() {
        JSON.stringify(this.props.hotList) !== '{}' && localStore.setItem('hotList', JSON.stringify(this.props.hotList.data.info));
    }

    clearText() {
        this.setState({value: '', display: false});
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    keyUp() {
        this.setState({display: true});
    }

    handleSearchHot(val) {
        this.props.searchActions.fetchSearchResult(val);
    }

    handleSearch() {
        const searchValue = this.state.value.trim();
        if (searchValue !== '') {
            this.props.searchActions.fetchSearchResult(searchValue);
        }
    }

    render() {
        const hotListData = JSON.stringify(this.props.hotList) !== '{}' ? this.props.hotList.data.info : JSON.parse(localStore.getItem('hotList'));
        const hotList = hotListData.map((ele) => {
            return (
                <span key={ele.sort} onClick={() => this.handleSearchHot(ele.keyword)}>
                    {ele.keyword}
                </span>
            )
        });

        return (
            <div className="container">
                <div className="header">
                    <div className="headerBack" onClick={() => window.history.back()}>
                        <i className="icon-keyboard_arrow_left"></i>
                    </div>
                    <div className="searchBar">
                        <div className="searchInput">
                            <i className="icon-search"></i>
                            <input type="text" value={this.state.value} onKeyUp={this.keyUp} onChange={this.handleChange} className="input input-search" placeholder="请输入关键字"/>
                            <i onClick={this.clearText} style={{display: this.state.display ? 'block' : 'none'}}>&times;</i>
                        </div>
                    </div>
                    <div className="headerRight" onClick={this.handleSearch}>搜索</div>
                </div>
                <div className="searchTitle">热门搜索</div>
                <div className="hotList">
                    {hotList}
                </div>

            </div>
        )
    }
}

