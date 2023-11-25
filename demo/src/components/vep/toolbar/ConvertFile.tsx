import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile } from "@ffmpeg/util";
import React from "react";
import { Button } from "../buttons";

export interface IConvertFileProps {
  ffmpeg: FFmpeg;
  file: File;
}

/** TODO: will be any type of file not just MP3  */
export const ConvertFile: React.FC<IConvertFileProps> = ({ ffmpeg, file }) => {
  const toMp3 = async () => {
    ffmpeg.writeFile(file.name, await fetchFile(file));
    await ffmpeg.exec(["-i", file.name, `${file.name}.mp3`]);
    const data = await ffmpeg.readFile(`${file.name}.mp3`);
    /** automatically download when ready */
    var download = document.createElement("a");
    download.href = URL.createObjectURL(new Blob([data]));
    download.download = `${file.name}.mp3`;
    download.click();
    download.remove();
  };
  return <Button variant="action" onClick={() => toMp3()}>Convert to mp3</Button>;
};
