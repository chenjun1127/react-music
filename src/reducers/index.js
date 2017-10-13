import {combineReducers} from 'redux'
import store from './store';
import userInfo from './userInfo';
import {albums, musicList, music, control, progress, audio,lyricsUpdate,favoriteMusic} from './music';
import {rankList} from './rank';
import {spin} from './spin';
import {hotList,resultList} from './search';
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
    spin,
    hotList,
    resultList,
    favoriteMusic
})
