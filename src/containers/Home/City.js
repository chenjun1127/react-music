import React from  'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cityInfoActionsUpdate from '../../actions/cityInfo';
import City from '../../components/Home/City';
const mapStateToProps = (state) => {
    return {
        cityInfo:state.cityInfo
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        cityInfoActions: bindActionCreators(cityInfoActionsUpdate, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(City);

