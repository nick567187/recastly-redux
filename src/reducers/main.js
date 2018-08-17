import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';
import chatContent from './chatContent.js';

var rootReducer = combineReducers({
  currentVideo,  
  videoList,
  chatContent
});
  
//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
