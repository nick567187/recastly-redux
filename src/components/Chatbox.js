import React from 'react';
 
var Chatbox = function ({value, handleSearchInputChange}) {
  return (
    <div className="search-bar form-inline">
      <input
        id="chatvalue"
        className="form-control"
        type="text"
        value={value}
      />
      <button className="submitButton" onClick={() => handleSearchInputChange(document.getElementById('chatvalue').html)}>Submit</button>
    </div>
  );
};


export default Chatbox;
