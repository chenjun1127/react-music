import {combineReducers} from 'redux'
import cityInfo from './cityInfo';
import store from './store';
import userInfo from './userInfo';
import {albums, musicList, music, control, progress, audio,lyricsUpdate} from './music';
import {rankList} from './rank';
import {spin} from './spin';
export default combineReducers({
    cityInfo,
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
