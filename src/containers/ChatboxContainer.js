import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';

var ChatboxContainer = (props) => {
  return (
    <div id="chats">
      <Chatbox text={props.text} handleSearchInputChange={props.handleSearchInputChange}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { text: state.text };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: (e) =>
      dispatch(handleSearchChange(e))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ChatboxContainer);