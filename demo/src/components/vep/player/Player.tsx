import React from "react";
import { ControlBar } from ".";
import { Col, Row } from "..";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { DropZone } from "../inputs/DropZone";

export interface IPlayerProps {
  width?: string;
  source: string | null;
  file: File | null;
  /** use default html5 controls */
  defaultControls?: boolean;
  ffmpeg: FFmpeg;
}

/** component containing the video player
 * @param source the source of the video
 * @param width the width of the video defaults to 480
 * @returns the video player
 */
export const Player: React.FC<IPlayerProps> = ({
  source,
  width = 1280,
  file,
  defaultControls = false,
  ffmpeg,
}) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  return (
    <Row>
      {/* TODO: Kinda jank that it doesn't work without key? */}
      <Col key={source}>
        {!!source ? (
          <video
            ref={videoRef}
            width={width}
            src={source ?? ""}
            controls={defaultControls}
          />
        ) : (
          <DropZone playerSize={Number(width)} />
        )}
        <ControlBar ffmpeg={ffmpeg} file={file} video={videoRef} />
      </Col>
    </Row>
  );
};
