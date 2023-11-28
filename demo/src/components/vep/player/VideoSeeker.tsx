import React, { useCallback } from "react";
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

  React.useEffect(() => {
    if (!video.current?.currentTime) {
      setTracker(0);
    }
  }, [tracker, startTime, endTime]);

  // TODO: fix issue listed below
  /** currently the below logic wont let the user click forward if it's past the endtime */
  const resetTracker = useCallback(() => {
    !!video.current?.currentTime && setTracker(video.current.currentTime);
    if (
      video.current?.currentTime &&
      video.current?.currentTime >= endTime &&
      !!endTime
    ) {
      video.current.currentTime = startTime;
    }
  }, [video.current?.currentTime, endTime, startTime]);

  /** want to add and remove event listeners based on the endpoints set by the user, this way most recent endpoints are stored */
  React.useEffect(() => {
    video.current?.addEventListener("timeupdate", resetTracker);
    return () => {
      video.current?.removeEventListener("timeupdate", resetTracker);
    };
  }, [endTime, startTime, tracker, video.current?.currentTime]);

  React.useEffect(() => {
    if (video.current) {
      video.current.onloadedmetadata = () =>
        setDuration(Number(video.current?.duration));
    }
  }, [video.current?.duration]);

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
