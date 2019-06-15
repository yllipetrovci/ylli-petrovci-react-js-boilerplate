import rootReducer from '../reducers/root-reducer';
import { createStore } from 'redux';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__());
// REDUX DEVTOOLS it is a config which allows to debug state with redux tool extension
export default store;