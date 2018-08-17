import Redux from 'redux';

var chatContentReducer = (state = '', action) => {
  //TODO: define a reducer for the currentVideo field of our state.

  if (action.type === 'CHAT_CONTENT') {
    var newState = action.text;
    return newState;
  } else {
    return state;
  }
};


export default chatContentReducer;
