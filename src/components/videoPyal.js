import React, { useEffect } from "react";
import VideoPlayer from "react-background-video-player";
import vid0 from "../video/static.mp4";
import vid1 from "../video/video1.mp4";
import vid2 from "../video/video2.mp4";

const VideoPay = ({ handleVideo }) => {
  const [counter, setCounter] = React.useState(0);
  const [counter1, setCounter1] = React.useState(NaN);

  const [newVideo, setNewVideo] = React.useState(false);
  const [isVideoOver, setIsVideoOver] = React.useState(false);

  useEffect(() => {
    counter < 20 && setTimeout(() => setCounter(counter + 1), 1000);
    if (counter === 10) {
      // setVisible(true)
    }
  }, [counter]);
  useEffect(() => {
    if (!isNaN(counter1)) {
      counter1 < 20 && setTimeout(() => setCounter1(counter1 + 1), 1000);
    }
  }, [counter1]);

  return (
    <>
      {!newVideo ? (
        counter <= 2 ? (
          <VideoPlayer
            className="video"
            src={vid0}
            autoPlay={true}
            volume={1}
            isMuted={false}
          />
        ) : (
          counter > 2 &&
          counter < 6 && (
            <VideoPlayer
              className="video"
              src={vid1}
              autoPlay={true}
              volume={1}
              isMuted={false}
              onEnd={() => {
                console.log("end");
              }}
            />
          )
        )
      ) : null}

      {!newVideo && counter > 5 && (
        <button
          onClick={() => {
            setCounter1(0);
            setNewVideo(true);
          }}
          className="playBtn text-focus-in"
        >
          {" "}
          Play Next
        </button>
      )}
      {newVideo && !isVideoOver ? (
        counter1 < 3 ? (
          <h4 className="tagline text-focus-in">To be a king is to feel</h4>
        ) : counter1 >= 3 && counter1 <= 5 ? (
          <h4 className="tagline text-focus-in">
            Free, Accepted, and Powerfull
          </h4>
        ) : counter1 >= 6 ? (
          <VideoPlayer
            className="video"
            src={vid2}
            autoPlay={true}
            volume={1}
            isMuted={false}
            loop={false}
            onEnd={() => {
              setIsVideoOver(true);
              handleVideo(false);
            }}
          />
        ) : (
          <VideoPlayer
            className="video"
            src={vid0}
            autoPlay={true}
            volume={1}
            isMuted={false}
          />
        )
      ) : null}
    </>
  );
};
export default VideoPay;
