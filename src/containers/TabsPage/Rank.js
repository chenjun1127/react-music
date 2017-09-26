import React, {Component} from 'react';
import {connect} from 'react-redux';
import Rank from '../../components/TabsPage/Rank';
import * as DataActions from '../../actions/rank';
import {bindActionCreators} from 'redux';
const mapStateToProps = (state) => {
    return {
        rankList:state.rankList
    }
};

// const mapDispatchToProps = dispatch => ({
//     fetchRankList: () => dispatch(DataActions.fetchRankList()),
//     saveData: () => dispatch(DataActions.saveData())
// });
/********************或*****************/
const mapDispatchToProps = (dispatch) => {
    return {
        rankDataActions: bindActionCreators(DataActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Rank);