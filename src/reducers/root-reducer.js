import userReducer from './user-reducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    user: userReducer,
    //optional to add more than one reducer
});

export default rootReducer;