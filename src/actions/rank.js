/**
 * Created by 0easy-23 on 2017/9/23.
 */
import * as actionTypes from '../constants/index';
const saveRankList = (data) => {
    return {
        type: actionTypes.SAVE_RANKLIST,
        data
    }
};
export {saveRankList};