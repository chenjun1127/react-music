/**
 * Created by 0easy-23 on 2017/9/15.
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as musicInfoAction from '../../actions/music';
import Play from '../../components/Play/Play';

const mapStateToProps = (state) => {
    return {
        musicList: state.musicList,
        music: state.music,
        control:state.control,
        progress:state.progress,
        audio:state.audio,
        lyricsUpdate:state.lyricsUpdate,
        spin:state.spin,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        musicInfoActions: bindActionCreators(musicInfoAction, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Play);