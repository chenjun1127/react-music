/**
 * Created by 0easy-23 on 2017/9/15.
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as musicInfoAction from '../../actions/music';
import Player from '../../components/Play/Player';

const mapStateToProps = (state) => {
    return {
        musicList: state.musicList,
        music: state.music,
        control:state.control,
        progress:state.progress,
        audio:state.audio,
        lyricsUpdate:state.lyricsUpdate,
        spin:state.spin,
        volumeObj:state.volumeObj
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        musicInfoActions: bindActionCreators(musicInfoAction, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);