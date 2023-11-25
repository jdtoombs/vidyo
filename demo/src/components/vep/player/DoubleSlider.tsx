import React from "react";
import * as styled from "./styled";
import { Row } from "..";

export interface IDoubleSliderProps {
  video: React.RefObject<HTMLVideoElement>;
}

export const DoubleSlider: React.FC<IDoubleSliderProps> = ({ video }) => {
  const [startTime, setStartTime] = React.useState(0);
  const [endTime, setEndTime] = React.useState(0);
  const [tracker, setTracker] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

  // TODO: change from any to something more specific
  // TODO: do some jank to combine to input sliders to look like one

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
