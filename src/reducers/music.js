/**
 * Created by 0easy-23 on 2017/9/14.
 */
import * as actionTypes from '../constants/index';
// 总歌单
const albums = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.MUSIC_UPDATE:
            return action.data;
            break;
        default:
            return state
    }
};
// 播放列表
const musicList = (state = [], action) => {
    switch (action.type) {
        case actionTypes.MUSIC_ADD:
            let arr = [...state, action.data];
            let hash = {};
            // 去除数组里的重复对象
            arr = arr.reduce((item, next) => {
                hash[next.song.hash] ? '' : hash[next.song.hash] = true && item.push(next);
                return item
            }, []);
            return arr;
            break;
        case actionTypes.MUSIC_REMOVE:
            return state.filter((item) => {
                if (item.id !== action.data.id) {
                    return item
                }
            });
            break;
        default:
            return state;
    }
};
// 当前播放的音乐
const music = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.MUSIC_GET_HASH:
            return action.data;
        default:
            return state;
    }
};
const control = (state = {playing: false}, action) => {
    switch (action.type) {
        case actionTypes.MUSIC_CONTROL:
            return Object.assign({}, state, action.playing);
        default:
            return state;
    }
};
const progress = (state = {currentTime: 0, percentage: 0}, action) => {
    switch (action.type) {
        case actionTypes.MUSIC_PLAYTIME:
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
};
const audio = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.MUSIC_AUDIO:
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
};

const lyricsUpdate = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.MUSIC_UPDATELYRICS:
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
};

export {albums, musicList, music, control, progress, audio, lyricsUpdate};
