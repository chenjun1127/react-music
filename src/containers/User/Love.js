import {connect} from 'react-redux';
import Love from '../../components/User/Love';
import * as musicInfoAction from '../../actions/music';
import {bindActionCreators} from 'redux';
const mapStateToProps = (state) => {
    return {
        favoriteMusic:state.favoriteMusic,
        music:state.music
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        musicInfoActions: bindActionCreators(musicInfoAction, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Love);