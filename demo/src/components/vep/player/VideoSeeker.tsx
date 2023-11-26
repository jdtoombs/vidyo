import React from "react";
import * as styled from "./styled";

export interface IDoubleSliderProps {
  video: React.RefObject<HTMLVideoElement>;
  startTime: number;
  endTime: number;
  setStartTime: React.Dispatch<React.SetStateAction<number>>;
  setEndTime: React.Dispatch<React.SetStateAction<number>>;
}

export const VideoSeeker: React.FC<IDoubleSliderProps> = ({
  video,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
}) => {
  const [tracker, setTracker] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

  // TODO: change from any to something more specific

  video.current?.addEventListener("timeupdate", () => {
    video.current?.currentTime && setTracker(video.current.currentTime);
  });
  // video.current?.addEventListener("timeupdate", () => {
  //   video.current?.currentTime && setTracker(video.current.currentTime);
  //   if (
  //     video.current?.currentTime &&
  //     Math.floor(video.current?.currentTime) === Math.floor(endTime)
  //   ) {
  //     video.current.currentTime = startTime;
  //   }
  // });

  if (video.current)
    video.current.onloadedmetadata = () => {
      setDuration(Number(video.current?.duration));
    };

  return (
    <styled.VideoSeeker>
      {/* SET START */}
      <input
        id="input"
        value={startTime}
        className="slider-one"
        type="range"
        min={0}
        step={0.01}
        max={duration}
        onChange={({ target: { value } }) => {
          setStartTime(Number(value));
        }}
      />
      {/* SET END */}
      <input
        value={!!endTime ? endTime : duration}
        id="input"
        className="slider-two"
        type="range"
        // TODO
        // min={startTime + 30}
        step={0.01}
        max={duration}
        onChange={({ target: { value } }) => {
          setEndTime(Number(value));
        }}
      />
      {/* MAIN SEEKER / TRACKER */}
      <input
        value={tracker}
        id="input"
        className="tracker"
        type="range"
        min={0}
        step={0.01}
        max={duration}
        onChange={({ target: { value } }) => {
          setTracker(Number(value));
          video.current && (video.current.currentTime = Number(value));
        }}
      />
    </styled.VideoSeeker>
  );
};
