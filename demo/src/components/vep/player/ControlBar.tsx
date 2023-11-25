import React from "react";
import * as styled from "./styled";
import { PlayPause } from "./PlayPause";
import { DoubleSlider } from ".";
import { Col, ConvertFile, Row, TrimVideo } from "..";
import { FFmpeg } from "@ffmpeg/ffmpeg";

export interface IControlBarProps {
  video: React.RefObject<HTMLVideoElement>;
  ffmpeg: FFmpeg;
  file: File | null;
}

export const ControlBar: React.FC<IControlBarProps> = ({
  video,
  file,
  ffmpeg,
}) => {
  const [startTime, setStartTime] = React.useState(0);
  const [endTime, setEndTime] = React.useState(0);
  return (
    <styled.ControlBar>
      <Col className="column-container">
        <DoubleSlider
          startTime={startTime}
          endTime={endTime}
          setEndTime={setEndTime}
          setStartTime={setStartTime}
          video={video}
        />
        <Row>
          <PlayPause video={video} />
          <div className="tools">
            {file && <ConvertFile ffmpeg={ffmpeg} file={file} />}
            {file && (
              <TrimVideo
                startTime={startTime}
                endTime={endTime}
                ffmpeg={ffmpeg}
                file={file}
              />
            )}
          </div>
        </Row>
      </Col>
    </styled.ControlBar>
  );
};
