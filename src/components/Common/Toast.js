/**
 * Created by 0easy-23 on 2017/9/19.
 */
import React, {Component} from 'react';
export default class extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.changeShowToast({show: false})
        }, this.props.options.dealy || 2000)
    }

    render() {
        return (
            <div style={Object.assign({}, styles.mainBox, styles[this.props.options.position], this.props.options.style, this.props.options.show ? null : styles.hide)}>
                <p>{this.props.msg}</p>
            </div>
        )
    }
}

const styles = {
    mainBox: {
        position: 'absolute',
        left: '50%',
        top: 0,
        zIndex: 100,
        width: 'auto',
        background: 'rgba(0,0,0,.6)',
        borderRadius: '2rem',
        color: '#fff',
        textAlign: 'center',
        padding: '10px 20px',
        transform: 'translateX(-50%)',
        transition: 'all 0.25s ease',

    },
    topCenter: {
        top: '10%',
    },
    center: {
        top: '50%',
        transform: 'translate(-50%,-50%)',

    },
    bottomCenter: {
        top: 'none',
        bottom: '10%'
    },
    hide: {
        visibility: 'hidden',
        opacity: 0
    }
};

// 调用方式：
// <Toast msg={this.state.msg} options={{position: 'bottomCenter', show: this.state.show, style: {width: '30%'}}}
//        changeShowToast={this.changeShowToast.bind(this)}/>