import React from 'react';
import './gamesStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiPlayCircle } from "react-icons/fi";

const VideoSection = ({ thumbnail, link }) => {
  const handleVideoClick = () => {
    // Open link in the same window/tab
    window.location.href = link;
  };

  return (
    <div className="col-6 col-md-6 col-lg-2 mb-4">
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
  );
};

const videos = [
  {
    thumbnail: './image/anderbahr.jpg',
    link: '/andarbahar',
  },
  {
    thumbnail: './image/amer.jpg',
    link: '/aaa.jsx',
  },
  {
    thumbnail: './image/7b.jpg',
    link: '/lucky7b',
  },
  {
    thumbnail: './image/3pati.jpg',
    link: '/teenpatti-t20',
  },
  {
    thumbnail: './image/tg20.jpg',
    link: '/dt20',
  },
  {
    thumbnail: './image/tg2.jpg',
    link: '/dt202',
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
          <a href="/home" className="btn btn-primary btn-lg w-100" style={{ backgroundColor: '#ff1616', borderColor: '#ff1616' }}>Back to Main Menu</a>
        </div>
      </div>
    </div>
  );
}


export default App;