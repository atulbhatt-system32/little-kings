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
        counter < 2 ? (
          <VideoPlayer
            className="video"
            src={vid0}
            autoPlay={true}
            volume={1}
            isMuted={false}
            onEnd={() => {
              console.log("end");
            }}
          />
        ) : (
          counter > 2 &&
          counter < 5 && (
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
          className="playBtn tracking-in-expand-fwd-top"
        >
          {" "}
          Play Next
        </button>
      )}
      {newVideo && !isVideoOver ? (
        counter1 < 3 ? (
          <h4 className="tagline tracking-in-expand-fwd-top">
            To be a king is to feel
          </h4>
        ) : counter1 > 3 && counter1 < 6 ? (
          <h4 className="tagline tracking-in-expand-fwd-top">
            Free, Accepted, and Powerfull
          </h4>
        ) : counter1 > 7 ? (
          <VideoPlayer
            className="video"
            src={vid2}
            autoPlay={true}
            volume={1}
            isMuted={false}
            loop={false}
            onTimeUpdate={(ct, prog, dur) => {
              // console.log("Time update", ct, prog, dur);
              // setVid2Counter((prev) => prev + 1);
            }}
            onEnd={() => {
              console.log("end");
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
            onEnd={() => {
              console.log("On end");
            }}
            onTimeUpdate={() => {
              console.log("Time update");
            }}
          />
        )
      ) : null}
    </>
  );
};
export default VideoPay;
