import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as styled from "./styled";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Button } from "../inputs";

export interface IPlayPauseProps {
  video: React.RefObject<HTMLVideoElement>;
}

export const PlayPause: React.FC<IPlayPauseProps> = ({ video }) => {
  const [playing, setPlaying] = React.useState<boolean>(false);
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
      <Button
        variant="action"
        onClick={() => {
          if (!playing) {
            video.current?.play();
            setPlaying(true);
          } else {
            video.current?.pause();
            setPlaying(false);
          }
        }}
      >
        <FontAwesomeIcon icon={!playing ? faPlay : faPause} />
      </Button>
    </styled.PlayPause>
  );
};
