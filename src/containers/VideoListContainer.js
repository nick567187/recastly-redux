import React from 'react';
import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';
import changeVideoList from './../actions/videoList.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import searchYouTube from '../lib/searchYouTube.js';
import handleSearchChange from '../actions/search.js';

var VideoListContainer = (props) => {
  return (
    <div>
      <VideoList videos={props.videos} handleVideoListEntryTitleClick={props.handleVideoListEntryTitleClick}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { videos: state.videoList };
};
/*
  var handleVideoSearch = (q) => {
  var options = {key: YOUTUBE_API_KEY, query: q};
  return _.debounce((dispatch) => {
    
    searchYouTube(options, (videos) => {
      dispatch(changeVideo(videos[0]));
      dispatch(changeVideoList(videos));
    });
  }, 500); 
};
handleSearchInputChange: (e) =>
      dispatch(handleSearchChange(e))
  };
*/
const mapDispatchToProps = (dispatch) => {
  return {
    handleVideoListEntryTitleClick: (video) => {
      // var options = {key: YOUTUBE_API_KEY, q: 'jun'};
      // dispatch(changeVideo(video));
      // searchYouTube(options, (videos) => {
      //   dispatch(changeVideoList(videos));
      // });
      
      dispatch(changeVideo(video));
      dispatch(handleSearchChange(video.snippet.title));
       
    }
  };
};

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default connect(mapStateToProps, mapDispatchToProps)(VideoListContainer);
