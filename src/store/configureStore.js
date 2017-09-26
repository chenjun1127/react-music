import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/index';
import thunkMiddleware from 'redux-thunk';
const configureStore = (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(thunkMiddleware), window.devToolsExtension ? window.devToolsExtension() : undefined)
    );
};
export default configureStore;


