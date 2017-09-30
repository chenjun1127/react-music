/**
 * Created by 0easy-23 on 2017/9/5.
 */
import React, {Component} from 'react';
export default class extends Component {
    render() {
        return (
            <div className="header" style={this.props.style ? this.props.style : null}>
                <div className="headerBack" onClick={this.handleBack}>
                    <i className="icon-keyboard_arrow_left"></i>
                </div>
                <div className="headerTitle">
                    {this.props.title}
                </div>
                <div className="headerRight"></div>
            </div>
        )
    }

    handleBack() {
        window.history.back();
    }
}