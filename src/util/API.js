/**
 * Created by 0easy-23 on 2017/9/13.
 */
const API = {
    new_song: '?json=true',
    song_play: 'plist/index&json=true',                     // 歌单
    song_playlist: 'plist/list',							// plist/list/125032?json=true
    rank: 'rank/list&json=true',
    rankid: 'rank/info/', 									// rank/info/?rankid=8888&page=1&json=true'
    singer_category: 'singer/class&json=true',
    singer_list: 'singer/list/', 							// singer/list/88?json=true
    singer_detail: 'singer/info/', 							// singer/info/3060&json=true
    song_detail: 'app/i/getSongInfo.php', 					// ?cmd=playInfo&hash=CB7EE97F4CC11C4EA7A1FA4B516A5D97
    song_lyrics:'app/i/krc.php',                            // ?cmd=100&hash=2B8DA604EDFF833B06AD9DCEC3F8F28C&timelength=222000
    searchHot: 'api/v3/search/hot',
    searchResult: 'api/v3/search/song',
};

export default API;