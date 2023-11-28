import { FFmpeg } from "@ffmpeg/ffmpeg";
import { ValidFileTypes } from "../../types";
import { fetchFile } from "@ffmpeg/util";
import { downloadFile } from ".";

/**
 * Function that takes in
 * @param file the file that is being converted
 * @param ffmpeg ffmpeg instance
 * @param convertTo the file type that the file is being converted to
 * @param downloadAfterConversion whether or not to download the file after conversion
 */
export const convertFile = async (
  file: File | null,
  ffmpeg: FFmpeg,
  convertTo: ValidFileTypes,
  downloadAfterConversion: boolean
) => {
  if(!file) return;
  ffmpeg.writeFile(file.name, await fetchFile(file));
  const outputFile = `${file.name}.${convertTo}`;
  await ffmpeg.exec(["-i", file.name, outputFile]);

  const data = await ffmpeg.readFile(outputFile);
  /** automatically download when ready if flag set */
  if (downloadAfterConversion) {
    downloadFile(outputFile, data);
  }
};
