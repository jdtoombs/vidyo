import { FFmpeg } from "@ffmpeg/ffmpeg";
import React from "react";
import { Button } from "../inputs";
import { convertFile } from "./utils";
import { Select } from "../inputs/Select";
import { ValidFileTypes } from "../types";
import * as styled from "./styled";
import { ProgressBar } from "./ProgressBar";

export interface IConvertFileProps {
  ffmpeg: FFmpeg;
  file: File | null;
}

/**
 * Component to convert a file to a different format
 * @param ffmpeg ffmpeg instance
 * @param file file being manipulated
 * @returns dropwdown to select file type to convert to
 */
export const ConvertFile: React.FC<IConvertFileProps> = ({ ffmpeg, file }) => {
  // TODO: select dropdown for file type
  const [fileType, setFileType] = React.useState<ValidFileTypes>("mp3");
  const [progress, setProgress] = React.useState(0);
  const options = ["mp3", "mp4", "mov", "mkv", "wmv", "gif"];

  ffmpeg.on("progress", ({ progress }) => {
    setProgress(progress);
  });

  return (
    <styled.ConvertFile>
      <Select
        options={options}
        onChange={(e) => {
          setFileType(e.target.value as ValidFileTypes);
        }}
      />
      <Button
        variant="action"
        onClick={() => convertFile(file, ffmpeg, fileType, true)}
        customRadius="0 0.25em 0.25em 0"
      >
        {/* go back to default Convert text when bar is done, or when nothing is in progress */}
        {!progress || progress === 1 ? "convert" : <ProgressBar value={progress} max="1" />}
      </Button>
    </styled.ConvertFile>
  );
};
