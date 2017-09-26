import React, {Component} from  'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cityInfoActionsUpdate from '../../actions/cityInfo';
import localStorage from '../../util/localStorage';
import HomeHeader from '../../components/Home/HomeHeader';
import HomeContent from '../../components/Home/HomeContent';

class Home extends Component {
    componentDidMount() {
        let cityName = localStorage.getItem('USER_CURRENT_CITY_NAME');
        if (cityName == null) {
            cityName = '深圳'
        }
        this.props.cityInfoActions.update({
            cityName: cityName
        })
    }


    render() {
        return (
            <div className="container">
                <HomeHeader cityName={this.props.cityInfo.cityName}/>
                <HomeContent tabs={this.props.tabs}/>
                {/*<h1>Hello React!</h1>*/}



            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cityInfo: state.cityInfo
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        cityInfoActions: bindActionCreators(cityInfoActionsUpdate, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);



