/**
 * Created by 0easy-23 on 2017/9/23.
 */
import API from '../util/API';
import request from '../util/request';
import * as actionTypes from '../constants/index';
const saveRanklist = (data) => {
    return {
        type: actionTypes.SAVE_RANKLIST,
        data
    }
};
const fetchRankList = () => {
    return dispatch => {
        return request.asyncGet(`kugou/${API.rank}`).then(res => res.json()).then(res => {
            return dispatch(saveRanklist(res));
        }).catch(err => {
            console.log('Error msg:' + err);
        });
    };
};
export {saveRanklist, fetchRankList};