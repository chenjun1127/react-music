import {connect} from 'react-redux';
import Rank from '../../components/Rank/Rank';
import * as DataActions from '../../actions/rank';
import * as musicInfoAction from '../../actions/music';
import {bindActionCreators} from 'redux';
const mapStateToProps = (state) => {
    return state;
};

// const mapDispatchToProps = dispatch => ({
//     fetchRankList: () => dispatch(DataActions.fetchRankList()),
//     saveData: () => dispatch(DataActions.saveData())
// });
/********************或*****************/
const mapDispatchToProps = (dispatch) => {
    return {
        rankDataActions: bindActionCreators(DataActions, dispatch),
        musicInfoActions: bindActionCreators(musicInfoAction, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Rank);