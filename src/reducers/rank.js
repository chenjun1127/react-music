import * as actionTypes from '../constants/index';
const rankList = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.SAVE_RANKLIST:
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
};
export {rankList};