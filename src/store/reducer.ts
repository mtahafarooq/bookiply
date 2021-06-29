import { combineReducers } from 'redux';
import reviewsState from 'pages/Reviews/ducks/reducer';

const combinedReducer = combineReducers({ reviewsState });

const rootReducer = (state: any, action: { type: string }) => {
    return combinedReducer(state, action);
};

export default rootReducer;
