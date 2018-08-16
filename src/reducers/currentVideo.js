import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.

  if (action.type === 'CHANGE_VIDEO') {
    var newState = action.video;
    return newState;
  } else {
    return state;
  }
};


export default currentVideoReducer;
