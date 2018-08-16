import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';


var VideoListContainer = () => {
  return (
    <div>
      <VideoList />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { videos: state.videoList };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleVideoListEntryTitleClick: (video) =>
      dispatch(changeVideo(video))
  };
};


//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default connect(mapStateToProps, mapDispatchToProps)(VideoListContainer);
