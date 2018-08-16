import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import React from 'react';
import _ from 'lodash';

var handleVideoSearch = (q) => {
  var options = {key: YOUTUBE_API_KEY, query: q};
  return _.debounce((dispatch) => {
    
    searchYouTube(options, (videos) => {
      dispatch(changeVideo(videos[0]));
      dispatch(changeVideoList(videos));
    });
  }, 500);

    
};
  
  //TODO:  Write an asynchronous action to handle a video search!


export default handleVideoSearch;
