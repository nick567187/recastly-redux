import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  
  if (action.type === 'CHANGE_VIDEO_LIST') {
    var newState = action.videos;
    return newState;
  } else {
    return state;
  }
};

export default videoListReducer;
