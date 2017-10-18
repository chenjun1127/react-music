/**
 * Created by 0easy-23 on 2017/9/4.
 */
// console.log(process.env.NODE_ENV);
const getItem = (key) => {
    let value;
    try {
        value = localStorage.getItem(key);
    } catch (ex) {
        if (process.env.NODE_ENV === 'production') {
            console.error('localStorage.getItem报错, ', ex.message)
        }
    } finally {
        return value;
    }
};
const setItem = (key, value) => {
    try {
        // ios safari 无痕模式下，直接使用 localStorage.setItem 会报错
        localStorage.setItem(key, value)
    } catch (ex) {
        // 开发环境下提示 error
        if (process.env.NODE_ENV === 'production') {
            console.error('localStorage.setItem报错, ', ex.message)
        }
    }
};

export {getItem, setItem};