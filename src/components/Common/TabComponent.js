/**
 * Created by 0easy-23 on 2017/9/7.
 */
import React, {Component} from 'react';
class TabController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0
        };
        this.itemNavStyle = this.itemNavStyle.bind(this);
    }

    itemNavStyle(index) {
        // return index === this.state.current ? 'item-title active' : 'item-title';
        return index === this.state.current ? Object.assign({}, this.props.itemStyle, this.props.itemActiveStyle) : Object.assign({}, this.props.itemStyle)
    }


    itemConStyle(index) {
        // return index === this.state.current ? 'con active' : 'con';
        return index === this.state.current ? Object.assign({}, style.con, style.aciveCon) : Object.assign({}, style.con);
    }

    render() {
        return (
            <div className="tabs-container" style={{width: '100%', overflow: 'hidden'}}>
                <ul className="itemTitle" style={Object.assign({}, this.props.tabsTitleStyle, style.flexRow, style.itemContainer)}>
                    {
                        React.Children.map(this.props.children, (element, index) => {
                            return (
                                <li onClick={() => {this.setState({current: index})}} style={this.itemNavStyle(index)}>{ element.props.name }</li>
                            )
                        })
                    }

                </ul>
                <div className="itemCon">
                    {
                        React.Children.map(this.props.children, (element, index) => {
                            return (
                                <div onClick={() => {this.setState({current: index})}} style={this.itemConStyle(index)} className="con">{ element }</div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}
export default TabController;
// 调用方式
// export default class TabComponent extends Component {
//     render(){
//         return (
//             <TabController>
//                 <div name="one">
//                     第一部分
//                 </div>
//                 <div name="two">
//                     第二部分
//                 </div>
//                 <div name="three">
//                     第三部分
//                 </div>
//             </TabController>
//         );
//     }
// }
// 样式需要自己设置

const style = {
    flexRow: {
        display: 'flex',
        WebkitBoxOrient: ' horizontal',
        WebkitFlexDirection: 'row',
        flexDirection: 'row',
    },
    itemContainer: {
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    con: {
        display: 'none',
    },
    aciveCon: {
        display: 'block'
    }
};

