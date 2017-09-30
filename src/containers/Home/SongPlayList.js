/**
 * Created by 0easy-23 on 2017/9/14.
 */
import {connect} from 'react-redux';
import SongPlayList from '../../components/Home/SongPlayList';
import {bindActionCreators} from 'redux';
import * as musicInfoAction from '../../actions/music';

const mapStateToProps = (state) => {
    return {
        totalAlbums: state.albums
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        albumsActions: bindActionCreators(musicInfoAction, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(SongPlayList);