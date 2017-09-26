/**
 * Created by 0easy-23 on 2017/9/5.
 */
import React, {Component} from 'react';
import Header from '../../components/Common/Header';
import localStorage from '../../util/localStorage';
export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hotCity: ['北京', '深圳', '上海','天津','武汉','杭州','成都','厦门','南京']
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(newCity) {
        this.props.cityInfoActions.update({
            cityName: newCity
        });
        localStorage.setItem('USER_CURRENT_CITY_NAME', newCity);
        // window.history.back();
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container">
                <Header title="选择城市"/>
                <div className="currentCity">
                    <p className="cityNameTitle">当前城市：</p>
                    <ul className="cityList">
                        <li>
                            <span className="cityLi">{this.props.cityInfo.cityName}</span>
                        </li>
                    </ul>
                    <p className="cityNameTitle">国内热门城市：</p>
                </div>
                <ul className="cityList">
                    {this.state.hotCity.map((item, index) => {
                        return (
                            <li key={index}><span className="cityLi" onClick={() => this.handleChange(item)}>{item}</span></li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}