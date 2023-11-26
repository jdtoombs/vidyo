import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile } from "@ffmpeg/util";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScissors } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../inputs";

export interface ITrimVideoProps {
  ffmpeg: FFmpeg;
  file: File;
  startTime: number;
  endTime: number;
}

export const TrimVideo: React.FC<ITrimVideoProps> = ({
  ffmpeg,
  file,
  startTime,
  endTime,
}) => {
  const toTimeString = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time - minutes * 60);
    return `${hours < 10 ? `0` + hours : hours}:${
      minutes < 10 ? `0` + minutes : minutes
    }:${seconds < 10 ? `0` + seconds : seconds}`;
  };
  const trim = async () => {
    ffmpeg.writeFile(file.name, await fetchFile(file));
    await ffmpeg.exec([
      "-ss",
      toTimeString(startTime),
      "-i",
      file.name,
      "-to",
      toTimeString(endTime),
      "-c:v",
      "copy",
      "-c:a",
      "copy",
      "trimmed_" + file.name,
    ]);
    const data = await ffmpeg.readFile("trimmed_" + file.name);
    /** automatically download when ready */
    var download = document.createElement("a");
    download.href = URL.createObjectURL(new Blob([data]));
    download.download = "trimmed_" + file.name;
    download.click();
    download.remove();
  };
  return (
    <Button variant="action" className="trim" onClick={trim}>
      Trim
      <FontAwesomeIcon icon={faScissors} />
    </Button>
  );
};
