import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      const videosObj = await (await fetch("/api/videos")).json();
      var videos = Object.keys(videosObj).map((hash) => ({ name: videosObj[hash].filename, hash: hash }));
      setVideos(videos);
    };
    fetchVideos().catch(console.error);
  }, []);
  return (
    <div className="container-fluid">
      {videos &&
        videos.map(function (video, i) {
          return (
            <div key={video.hash} className="d-flex flex-column bd-highlight mx-4 my-2">
              <div className="d-grid">
                <Link className="btn btn-outline-primary" to={`/player/${video.hash}`}>
                  {video.name}
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
