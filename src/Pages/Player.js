import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Player() {
  let params = useParams();
  const [video, setVideo] = useState([]);
  useEffect(() => {
    const fetchVideo = async () => {
      const video = await (await fetch(`/api/video?hash=${params.hash}`)).json();
      console.log(video);
      setVideo(video);
    };
    fetchVideo().catch(console.error);
  }, []);
  return (
    <div>
      {video?.hash && (
        <video width="100%" height="100%" controls>
          <source src={`/api/stream?hash=${video.hash}`} type="video/mp4" />
          {video?.subs?.ita && <track label="Italian" kind="subtitles" srclang="it" src={`/api/subtitle?hash=${video.hash}&language=ita`} />}
          {video?.subs?.eng && <track label="English" kind="subtitles" srclang="it" src={`/api/subtitle?hash=${video.hash}&language=eng`} />}
        </video>
      )}
    </div>
  );
}

export default Player;
