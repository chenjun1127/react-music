import qs from 'qs';
const defaultHeaders = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
};

const parseJSONFilter = (res) => res.json();

// 使用 fetch 封装
const get = (uri) => {
    return fetch(uri).then(parseJSONFilter).catch(err => ({err}));
};

const post = (uri, body) => {
    return fetch(uri, {
        body: qs.stringify(body),
        headers: defaultHeaders,
        method: 'POST'
    }).then(parseJSONFilter).catch(error => ({error}));
};

// 使用 fetch + async + await 方式
// 需要引入 babel-polyfill ，并且babel-loader 需设置为es7 presets:['react', 'es2015','stage-0']；
const asyncGet = (uri) => {
    return fetch(uri);
};

const asyncPost = (uri, body) => {
    return fetch(uri, {
        body: qs.stringify(body),
        headers: defaultHeaders,
        method: 'POST'
    });
};


export default {get, post, asyncGet, asyncPost};