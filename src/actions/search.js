/**
 * Created by 0easy-23 on 2017/9/30.
 */
import * as actionTypes from '../constants/index';
import API from '../util/API';
import request from '../util/request';
import {spin_show} from './spin';
const saveSearchHot = (data) => {
    return {
        type: actionTypes.SAVE_SEARCH_HOT,
        data
    }
};
const saveSearchResult = (data) => {
    return {
        type: actionTypes.SAVE_SEARCH_RESULT,
        data
    }
};

const fetchSearchHot = () => {
    return async dispatch => {
        dispatch(spin_show());
        try {
            let result = await request.asyncGet(`/mobilecdn/${API.searchHot}?format=json`);
            let resultData = await result.json();
            dispatch(saveSearchHot(resultData));
        } catch (err) {
            console.log("Error", err);
        }
    }
};
const fetchSearchResult = (keyword, page = 1, pagesize = 20) => {
    return async dispatch => {
        dispatch(spin_show());
        try {
            let result = await request.asyncGet(`/mobilecdn/${API.searchResult}?format=json&keyword=${keyword}&page=${page}&pagesize=${pagesize}`);
            let resultData = await result.json();
            dispatch(saveSearchResult(resultData));
        } catch (err) {
            console.log("Error", err);
        }
    }
};

export {fetchSearchHot, fetchSearchResult};