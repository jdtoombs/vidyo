import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as styled from "./styled";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export interface IPlayPauseProps {
  video: React.RefObject<HTMLVideoElement>;
}

export const PlayPause: React.FC<IPlayPauseProps> = ({ video }) => {
  const [playing, setPlaying] = React.useState<boolean>(true);
  React.useEffect(() => {
    if (video.current) {
      if (video.current.paused) {
        setPlaying(false);
      } else {
        setPlaying(true);
      }
    }
  }, [video.current?.paused]);
  return (
    <styled.PlayPause>
      {!playing ? (
        <FontAwesomeIcon
          onClick={() => {
            video.current?.play();
            setPlaying(true);
          }}
          icon={faPlay}
        />
      ) : (
        <FontAwesomeIcon
          onClick={() => {
            video.current?.pause();
            setPlaying(false);
          }}
          icon={faPause}
        />
      )}
    </styled.PlayPause>
  );
};
