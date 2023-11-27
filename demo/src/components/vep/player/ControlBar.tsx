import React from "react";
import * as styled from "./styled";
import { PlayPause } from "./PlayPause";
import { Col, ConvertFile, Row, TrimVideo } from "..";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { VideoSeeker } from "./VideoSeeker";

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

  React.useEffect(() => {
    if (!file) {
      setStartTime(0);
      setEndTime(0);
    }
  }, [file]);

  console.log(!!file);
  return (
    <styled.ControlBar>
      <Col className="column-container">
        <VideoSeeker
          startTime={startTime}
          endTime={endTime}
          setEndTime={setEndTime}
          setStartTime={setStartTime}
          video={video}
        />
        <Row>
          <PlayPause video={video} />
          <Row className="tools">
            {file && (
              <TrimVideo
                startTime={startTime}
                endTime={endTime}
                ffmpeg={ffmpeg}
                file={file}
              />
            )}
            {file && <ConvertFile ffmpeg={ffmpeg} file={file} />}
          </Row>
        </Row>
      </Col>
    </styled.ControlBar>
  );
};
