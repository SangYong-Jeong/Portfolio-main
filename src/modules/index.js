import { combineReducers } from 'redux';
import height from './height';
import media from './media';

const rootReducer = combineReducers({
  height,
  media,
});

export default rootReducer;
