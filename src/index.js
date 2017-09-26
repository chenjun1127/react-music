import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
);

if (module.hot && process.env.NODE_ENV !== 'production') {
    module.hot.accept();
}
