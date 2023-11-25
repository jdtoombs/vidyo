import React from "react";
import * as styled from "./styled";
import { PlayPause } from "./PlayPause";
import { DoubleSlider } from ".";
import { Col } from "..";

export interface IControlBarProps {
  video: React.RefObject<HTMLVideoElement>;
}

export const ControlBar: React.FC<IControlBarProps> = ({ video }) => {
  return (
    <styled.ControlBar>
      <Col className="column-container">
        <PlayPause video={video} />
        <DoubleSlider video={video} />
      </Col>
    </styled.ControlBar>
  );
};
