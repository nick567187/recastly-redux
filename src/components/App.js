import React from 'react';
import { connect } from 'react-redux';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import Nav from './Nav.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import changeVideo from '../actions/currentVideo.js';
import changeVideoList from '../actions/videoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import store from '../store/store.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import searchYouTube from '../lib/searchYouTube.js';
// import SearchContainer from '../containers/SearchContainer.js';

export default class App extends React.Component {
  componentWillMount() {
    var options = {key: YOUTUBE_API_KEY, query: 'Hack Reactor'};
    searchYouTube(options, (videos) => {
      store.dispatch(changeVideo(videos[0]));
      store.dispatch(changeVideoList(videos));
    });  
  }
  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  render() {
    return (
      <div>
        <Nav />
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer />
            {/*<ChatboxContainer />*/}
          </div>
          <div className="col-md-5">
            <VideoListContainer />
          </div>
        </div>      
      </div>
    );
  }
}
