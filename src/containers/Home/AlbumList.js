/**
 * Created by 0easy-23 on 2017/9/7.
 */
import {connect} from 'react-redux';
import AlbumList from '../../components/Home/AlbumList';
const mapStateToProps = (state) => {
    return {
        totalAlbums: state.albums
    }
};
export default connect(mapStateToProps)(AlbumList);


