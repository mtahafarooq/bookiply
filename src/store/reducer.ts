import { combineReducers } from 'redux';
import reviews from 'pages/Reviews/ducks/reducer';

const combinedReducer = combineReducers({ reviews });

const rootReducer = (state: any, action: { type: string }) => {
    return combinedReducer(state, action);
};

export default rootReducer;
