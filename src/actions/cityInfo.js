import * as actionTypes from '../constants/index';
const update = (data) => {
    return {
        type: actionTypes.CITYINFO_UPDATE,
        data
    }
};
export {update};
