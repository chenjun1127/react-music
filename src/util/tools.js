/**
 * Created by 0easy-23 on 2017/9/20.
 */
// 歌词格式化
const parseLyric = (text) => {
    let lines = text.split('\r\n'),
        pattern = /\[\d{2}:\d{2}.\d{2}\]/g,
        result = [];
    // 去掉数组中最后的空白;
    lines[lines.length - 1].length === 0 && lines.pop();

    lines.map((ele) => {
        let time = ele.match(pattern),
            value = ele.replace(pattern, '');
        time.map((e) => {
            let t = e.slice(1, -1).split(':');
            result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value]);
        })
    });

    // 最后将结果数组中的元素按时间大小排序，以便保存之后正常显示歌词;
    result.sort((a, b) => a[0] - b[0]);
    return result;
};
// 时间转换秒数
const formatTime = (timeTemp) => {
    let m = Math.floor(timeTemp / 60);
    let s = Math.floor(timeTemp % 60);
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
};
// 时间戳转时间格式
const getLocalTime = (nS) => {
    return new Date(parseInt(nS) * 1000).toLocaleString('chinese', {hour12: false}).replace(/\//g, '-');
};
// 数组去重
const unique = (arr) => {
    const res = [];
    const json = {};
    for (let i = 0; i < arr.length; i++) {
        if (!json[arr[i]]) {
            res.push(arr[i]);
            json[arr[i]] = 1;
        }
    }
    return res;
};
export {parseLyric, formatTime, getLocalTime, unique};