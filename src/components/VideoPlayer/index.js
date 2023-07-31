import ReactPlayer from 'react-player'

import './index.css'

const VideoPlayer = () => (
  <div className="video-container">
    <h1 className="heading">Video Player</h1>
    <div className="responsive-container">
      <ReactPlayer url="https://youtu.be/YE7VzlLtp-4" />
      <hr />
      <br />
      <ReactPlayer url="https://dai.ly/x834x0z" />
    </div>
  </div>
)

export default VideoPlayer
