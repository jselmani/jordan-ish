import { combineReducers } from 'redux';

import directoryReducer from './directory/directory.reducer';

const rootReducer = combineReducers({
    directoryReducer
});

export default rootReducer;
