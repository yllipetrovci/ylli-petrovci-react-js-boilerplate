import userReducer from './user-reducer';
import cardReducer from './card-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    user: userReducer,
    card: cardReducer
    //optional to add more than one reducer
});

export default rootReducer;