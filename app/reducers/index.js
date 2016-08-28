

import { combineReducers } from 'redux';//利用combineReducers合并reducers
import news from './news';//引入news这个reducer
const rootReducer = combineReducers({
  news
});

export default rootReducer;
