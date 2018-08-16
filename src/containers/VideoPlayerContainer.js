import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var VideoPlayerContainer = () => {
  return (
    <div>
      <VideoPlayer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { video: state.currentVideo };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleVideoListEntryTitleClick: () =>
//       dispatch(changeVideo())
//   };
// };

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default connect(mapStateToProps)(VideoPlayerContainer);
