import {combineReducers} from 'redux';
import userInfo from './userInfo';
import {albums, musicList, music, control, progress, audio,lyricsUpdate,favoriteMusic,volumeObj} from './music';
import {rankList} from './rank';
import {spin} from './spin';
import {hotList,resultList} from './search';
export default combineReducers({
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
    favoriteMusic,
    volumeObj
})
