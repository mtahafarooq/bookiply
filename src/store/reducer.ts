import { combineReducers } from 'redux';

const combinedReducer = combineReducers({});

const rootReducer = (state: any, action: { type: string }) => {
    return combinedReducer(state, action);
};

export default rootReducer;
