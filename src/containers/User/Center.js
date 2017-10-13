import {connect} from 'react-redux';
import Center from '../../components/User/Center';
import * as musicInfoAction from '../../actions/music';
import {bindActionCreators} from 'redux';
const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo,
        favoriteMusic:state.favoriteMusic
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        musicInfoActions: bindActionCreators(musicInfoAction, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Center);