/**
 * Created by 0easy-23 on 2017/9/14.
 */
import * as actionTypes from '../constants/index';
import {unique} from '../util/tools';
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
            let newArr = arr.reduce((item, next) => {
                hash[next.song.hash] ? '' : hash[next.song.hash] = true && item.push(next);
                return item
            }, []);
            return newArr;
            break;
        case actionTypes.MUSIC_REMOVE:
            return state.filter((item) => {
                if (item.song.hash !== action.data) {
                    return item
                }
            });
            break;
        case actionTypes.MUSIC_REMOVE_ALL:
            return state = [];
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
// 播放控制
const control = (state = {playing: false}, action) => {
    switch (action.type) {
        case actionTypes.MUSIC_CONTROL:
            return Object.assign({}, state, action.playing);
        default:
            return state;
    }
};
// 播放进度
const progress = (state = {currentTime: 0, percentage: 0}, action) => {
    switch (action.type) {
        case actionTypes.MUSIC_PLAYTIME:
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
};
// 声音对象
const audio = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.MUSIC_AUDIO:
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
};
// 歌词同步
const lyricsUpdate = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.MUSIC_UPDATELYRICS:
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
};
// 歌曲收藏
const favoriteMusic = (state = [], action) => {
    switch (action.type) {
        case  actionTypes.MUSIC_ADD_FAVORITE:
            let arr = [...state, action.data];
            // let hash = {};
            // let newArr = arr.reduce((item, next) => {
            //     hash[next.hash] ? '' : hash[next.hash] = true && item.push(next);
            //     return item
            // }, []);
            return unique(arr);
        case actionTypes.MUSIC_REMOVE_FAVORITE:
            const index = state.indexOf(action.data);
            state.splice(index, 1);
            return state;
            break;
        default:
            return state;
    }
};
// 音量
const volumeObj = (state = {volume:0.5}, action) => {
    switch (action.type) {
        case actionTypes.MUSIC_VOLUME:
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
};
export {albums, musicList, music, control, progress, audio, lyricsUpdate, favoriteMusic,volumeObj};
