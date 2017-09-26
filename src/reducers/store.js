import * as actionTypes from '../constants/index';
const initialState = [];
const store = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STOTE_UPDATE:
            return action.data;
            break;
        case actionTypes.STORE_ADD:
            return state.unshift(action.data);
            break;
        case actionTypes.STORE_REMOVE:
            return state.filter((item) => {
                if (item.id !== action.data.id) {
                    return item
                }
            });
            break;
        default:
            return state
    }
};

export default store;
