import {bindActionCreators} from 'redux';
import Login from '../../components/User/Login';
import {connect} from 'react-redux';
import * as userInfoActions from '../../actions/userInfo';
const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        userInfoActions: bindActionCreators(userInfoActions, dispatch)
    }
};


export default  connect(mapStateToProps, mapDispatchToProps)(Login);