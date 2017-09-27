/**
 * Created by 0easy-23 on 2017/9/20.
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as musicInfoAction from '../../actions/music';
import MusicList from '../../components/Home/MusicList';

const mapStateToProps = (state) => {
    return {
        musicList: state.musicList,
        music: state.music,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        musicInfoActions: bindActionCreators(musicInfoAction, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(MusicList);