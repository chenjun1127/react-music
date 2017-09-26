/**
 * Created by 0easy-23 on 2017/9/7.
 */
import React, {Component} from 'react';
import Recomand from '../TabsPage/Recomand';
import Rank from '../../containers/TabsPage/Rank';
import Artist from '../TabsPage/Artist';
import MV from '../TabsPage/MV';
import TabController from '../../components/Common/TabComponent';
export default class HomeContent extends Component {
    render() {
        const setting = {
            tabsTitleStyle: {height: '44px', background: '#f5f5f5'},
            itemStyle: {padding: '0 10px', height: 'inherit', lineHeight: '44px'},
            itemActiveStyle: {color: '#e9203d', boxShadow: 'inset 0px -2px 0px #e9203d'},
        };
        return (
            <div className="content">

                <TabController {...setting}>
                    {/*<div name="first">
                     第一帧
                     </div>
                     <div name="second">
                     第二帧
                     </div>
                     <div name="third">
                     第三帧
                     </div>*/}
                    {
                        this.props.tabs.map((item, i) => (<div key={i} name={item.text}>{item.component}</div>))
                    }
                </TabController>


            </div>

        )
    }
}

HomeContent.defaultProps = {
    tabs: [
        {
            text: '个性推荐',
            component: <Recomand/>
        },
        {
            text: '排行榜',
            component: <Rank/>
        },
        {
            text: '歌手',
            component: <Artist/>
        },
        {
            text: 'MV',
            component: <MV/>
        }
    ]
}
