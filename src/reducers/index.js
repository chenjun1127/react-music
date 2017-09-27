import {combineReducers} from 'redux'
import store from './store';
import userInfo from './userInfo';
import {albums, musicList, music, control, progress, audio,lyricsUpdate} from './music';
import {rankList} from './rank';
import {spin} from './spin';
export default combineReducers({
    store,
    userInfo,
    albums,
    musicList,
    music,
    control,
    progress,
    audio,
    lyricsUpdate,
    rankList,
    spin
})
