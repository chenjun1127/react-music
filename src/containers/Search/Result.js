/**
 * Created by 0easy-23 on 2017/10/9.
 */
import {connect} from 'react-redux';
import Result from '../../components/Search/Result';
import * as musicInfoAction from '../../actions/music';
import * as searchAction from '../../actions/search';
import {bindActionCreators} from 'redux';
const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch) => {
    return {
        musicInfoActions: bindActionCreators(musicInfoAction, dispatch),
        searchActions: bindActionCreators(searchAction, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);