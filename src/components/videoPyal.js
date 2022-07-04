import React, { useEffect } from "react";
import VideoPlayer from "react-background-video-player";
import vid0 from "../video/static.mp4";
import vid1 from "../video/video1.mp4";
import vid2 from "../video/video2.mp4";

const VideoPay = ({ handleVideo }) => {
  const [counter, setCounter] = React.useState(0);
  const [counter1, setCounter1] = React.useState(NaN);

  const [newVideo, setNewVideo] = React.useState(false);

  useEffect(() => {
    counter < 20 && setTimeout(() => setCounter(counter + 1), 1000);
    if (counter === 10) {
      // setVisible(true)
    }
  }, [counter]);
  useEffect(() => {
    if (!isNaN(counter1)) {
      counter1 < 20 && setTimeout(() => setCounter1(counter1 + 1), 1000);
      if (counter1 === 18) {
        handleVideo(false);
      }
    }
  }, [counter1]);
  // const handleEnd = () => {
  //   console.log("End Call");
  // };
  // console.log(counter, "====", counter1);

  return (
    <>
      {!newVideo ? (
        counter < 5 ? (
          <VideoPlayer className="video" src={vid0} autoPlay={true} />
        ) : counter > 4 && counter < 10 ? (
          <VideoPlayer className="video" src={vid1} autoPlay={true} />
        ) : (
          <>
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

            {/* <h4 className="tagline tracking-in-expand-fwd-top">To be a king is to feel</h4> */}
            {/* <h4 className="tagline tracking-in-expand-fwd-top">Free, Accepted, and Powerfull</h4> */}
          </>
        )
      ) : null}
      {newVideo ? (
        counter1 < 4 ? (
          <h4 className="tagline tracking-in-expand-fwd-top">
            To be a king is to feel
          </h4>
        ) : counter1 > 3 && counter1 < 8 ? (
          <h4 className="tagline tracking-in-expand-fwd-top">
            Free, Accepted, and Powerfull
          </h4>
        ) : counter1 > 7 && counter1 < 15 ? (
          <VideoPlayer className="video" src={vid2} autoPlay={true} />
        ) : (
          <VideoPlayer className="video" src={vid0} autoPlay={true} />
        )
      ) : null}
    </>
  );
};
export default VideoPay;
