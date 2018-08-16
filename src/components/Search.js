import React from 'react';
 
var Search = function ({value, handleSearchInputChange}) {
  return (
    <div className="search-bar form-inline">
      <input
        className="form-control"
        type="text"
        value={value}
        onChange={(event) => handleSearchInputChange(event.target.value)}
      />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};


export default Search;
