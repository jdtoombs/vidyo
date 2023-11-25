import React from "react";
import * as styled from "./styled";
import { Row } from "..";

export interface IDoubleSliderProps {
  video: React.RefObject<HTMLVideoElement>;
  startTime: number;
  endTime: number;
  setStartTime: React.Dispatch<React.SetStateAction<number>>;
  setEndTime: React.Dispatch<React.SetStateAction<number>>;
}

export const DoubleSlider: React.FC<IDoubleSliderProps> = ({
  video,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
}) => {
  const [tracker, setTracker] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

  // TODO: change from any to something more specific
  // TODO: do some jank to combine to input sliders to look like one
  // TODO: reset tracker to start point when end point reached, also change  slider two and one so they can be dragged to whichever end

  video.current?.addEventListener("timeupdate", () => {
    video.current?.currentTime && setTracker(video.current.currentTime);
  });

  if (video.current)
    video.current.onloadedmetadata = () => {
      setDuration(Number(video.current?.duration));
    };

  return (
    <styled.DoubleSlider>
      <Row className="slider-parent">
        <input
          id="input"
          value={startTime}
          className="slider-one"
          type="range"
          min={0}
          step={0.01}
          max={duration / 2}
          onChange={({ target: { value } }) => {
            setStartTime(Number(value));
          }}
        />
        <input
          value={endTime}
          id="input"
          className="slider-two"
          type="range"
          min={duration / 2}
          step={0.01}
          max={duration}
          onChange={({ target: { value } }) => {
            setEndTime(Number(value));
          }}
        />
      </Row>
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
    </styled.DoubleSlider>
  );
};
