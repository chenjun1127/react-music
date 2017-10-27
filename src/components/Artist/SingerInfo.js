/**
 * Created by 0easy-23 on 2017/10/26.
 */
import React, {Component} from 'react';
import request from '../../util/request';
import Header from '../../components/Common/Header';
import Loading from '../../components/Common/Loading';
import Cheerio from 'cheerio';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {loaded: false};
    }

    componentDidMount() {
        request.asyncGet(`/yy_kugou/singer/home/${this.props.location.state.singerId}.html`).then(res => res.text()).then(res => {
            const $ = Cheerio.load(res);
            const text = $("#singer_content").text();
            this.setState({
                loaded: true,
                singerInfo: text,
            });
        }).catch(err => {
            console.log('Error:' + err);
        })
    }

    render() {
        return (
            <div className="container">
                <Header title={this.state.loaded ? '歌手简介' : null}/>
                {this.state.loaded ?
                    <div className="singer-info">
                        <p className="text-info">
                            {this.state.singerInfo}
                        </p>
                    </div> :
                    <Loading/>
                }
            </div>
        )
    }
}