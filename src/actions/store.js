import * as actionTypes from '../constants/index';
const update = (data) => {
    return {
        type: actionTypes.STOTE_UPDATE,
        data
    }
};
const add = (data) => {
    return {
        type: actionTypes.STORE_ADD,
        data
    }
};
const remove = (data) => {
    return {
        type: actionTypes.STORE_REMOVE,
        data
    }
};
export {update, add, remove};
