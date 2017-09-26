import * as actionTypes from '../constants/index';
const update = (data) => {
    return {
        type: actionTypes.USERINFO_UPDATE,
        data
    }
};
export {update};
