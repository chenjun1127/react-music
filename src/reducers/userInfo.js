import * as actionTypes from '../constants/index';
const initialState = {};
const userInfo = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USERINFO_UPDATE:
            return action.data;
            break;
        default:
            return state
    }
};

export default userInfo;
