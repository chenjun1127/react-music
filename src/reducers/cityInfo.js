import * as actionTypes from '../constants/index';
const initialState = {};
const cifyInfo = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CITYINFO_UPDATE:
            return action.data;
            break;
        default:
            return state
    }
};

export default cifyInfo;
