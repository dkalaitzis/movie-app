import React, { useEffect, useState } from "react";

const HomeContent = () => {
  const [videos, setVideos] = useState([]);

  // Api's to be used - Cors error.
  // https://www.globalcyclingnetwork.com/api/devtask
  // https://img.youtube.com/vi/YOUR_VIDEO_ID/mqdefault.jpg

  const getVideoRequest = async () => {

    const url = `http://www.omdbapi.com/?s=Avengers&apikey=491682b0`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setVideos(responseJson.Search);
    } else {
      setVideos([]);
    }

  };

  // when the app loads, useEffect hooks always called on the first render
  useEffect(() => {
    getVideoRequest();
  }, []);

  return (
    <div className="row">
      <h1> Latest videos </h1>
      {videos.map((video, index) => (
        <div className="row" key={video.imdbID}>
          <div className="movie-img">
          <img
            src={video.Poster}
            alt={video.imdbID}
            width="350"
            height="300"
          ></img>
        </div>
        <h1> {video.Title} </h1>
        <h1> {video.Plot} </h1>
      </div>
      ))}
      
    </div>
  );
};

export default HomeContent;
