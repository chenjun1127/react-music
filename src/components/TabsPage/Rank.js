/**
 * Created by 0easy-23 on 2017/9/7.
 */
import React, {Component} from 'react';
export default class extends Component {
    componentDidMount() {
        this.props.rankDataActions.fetchRankList();
    }
    render() {
        return (
            <div className="content">
            </div>
        )
    }
}

