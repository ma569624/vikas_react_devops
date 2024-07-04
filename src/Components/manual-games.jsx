import React from 'react';
import './manual-gamesStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiPlayCircle } from "react-icons/fi";
import Header from './header';

const VideoSection = ({ thumbnail, link }) => {
  const handleVideoClick = () => {
    // Open link in the same window/tab
    window.location.href = link;
  };

  return (
    <>
    <Header />
    <div className="col-6 col-md-6 col-lg-3 mb-4 gameThumbnail">
      <div className="video-container" onClick={handleVideoClick}>
        <img
          src={thumbnail}
          alt="Video Thumbnail"
          className="video-thumbnail"
        />
        <div className="play-icon">
          <FiPlayCircle size={50} />
        </div>
      </div>
    </div>
    </>
  );
};

const videos = [
    {
        thumbnail: './image/anderbahr.jpg',
        link: '/andar-bahar',
      },
  {
    thumbnail: './image/ludo.jpg',
    link: '/ludo',
  },
  {
    thumbnail: './image/Carrom.jpg',
    link: '/carrom',
  },
  {
    thumbnail: './image/roulette.jpg',
    link: '/roulette',
  },
  
  
];

function App() {
  return (
    <div className="container">
      <div className="row">
        {videos.map((video, index) => (
          <VideoSection key={index} thumbnail={video.thumbnail} link={video.link} />
        ))}
      </div>
      <div className="mt-4">
        <div className="d-flex justify-content-center">
          <a href="/index" className="btn btn-primary btn-lg w-100" style={{ backgroundColor: '#ff1616', borderColor: '#ff1616' }}>Back to Main Menu</a>
        </div>
      </div>
    </div>
  );
}


export default App;