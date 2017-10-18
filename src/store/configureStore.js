import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/index';
import thunkMiddleware from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        // compose(applyMiddleware(thunkMiddleware), window.devToolsExtension && window.devToolsExtension())
        composeEnhancers(applyMiddleware(thunkMiddleware))
    );
};

export default configureStore;


