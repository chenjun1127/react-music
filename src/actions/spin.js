/**
 * Created by 0easy-23 on 2017/9/25.
 */
import * as actionTypes from '../constants/index';
const spin_show = () => {
    return {
        type: actionTypes.SPIN_SHOW
    }
};
const spin_hide = () => {
    return {
        type: actionTypes.SPIN_HIDE
    }
};

export {spin_hide, spin_show};