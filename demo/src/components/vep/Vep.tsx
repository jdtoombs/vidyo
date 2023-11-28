import React from "react";
import { Col, Player, Uploader } from ".";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { toBlobURL } from "@ffmpeg/util";
import * as styled from "./styled";
import { ThemeProvider } from "styled-components";
import css from "./css/_variables.module.scss";
import { Spinner } from "./indicators";

export interface IVepProps {
  /** whether to show ffmpeg logs */
  ffmpegLogs?: boolean;
  /** custom theme  */
  theme?: CSSModuleClasses;
  /** size of video player, vep will wrap around this base size */
  playerSize?: string;
}

/**
 * component to upload, edit, and play a file.
 * @param ffmpegLogs whether to show ffmpeg logs
 * @param theme custom theme - primary colour controls player tool bar and header, secondary colour controls the fill, and action colour controls the icons,
 *              danger colour controls the clear button, trim to control the outline of header/footers
 * @returns The main container for the video editor and player
 */
export const Vep: React.FC<IVepProps> = ({ ffmpegLogs, theme, playerSize }) => {
  const [file, setFile] = React.useState<File | null>(null);
  const [source, setSource] = React.useState<string | null>(null);
  const ffmpegRef = React.useRef(new FFmpeg());
  const [ffmpegReady, setFfmpegReady] = React.useState<boolean>(false);
  const ffmpeg = ffmpegRef.current;

  const load = async () => {
    const baseUrl = "https://unpkg.com/@ffmpeg/core@0.12.4/dist/esm";
    await ffmpeg
      .load({
        coreURL: await toBlobURL(
          `${baseUrl}/ffmpeg-core.js`,
          "text/javascript"
        ),
        wasmURL: await toBlobURL(
          `${baseUrl}/ffmpeg-core.wasm`,
          "application/wasm"
        ),
      })
      .then(() => {
        setFfmpegReady(true);
      });
  };

  ffmpeg.on("log", ({ message }) => {
    ffmpegLogs && console.log(message);
  });

  /** load ffmpeg on Vep render */
  React.useEffect(() => {
    load();
  }, []);

  React.useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = (e) => {
        const arrayBuffer = e.target?.result;
        if (arrayBuffer) {
          const blob = new Blob([new Uint8Array(arrayBuffer as ArrayBuffer)], {
            type: file.type,
          });
          setSource(URL.createObjectURL(blob));
        }
      };
      reader.readAsArrayBuffer(file);
    }
  }, [file]);

  return (
    <ThemeProvider theme={theme ?? { css }}>
      <styled.Vep className="vep-container">
        {ffmpegReady ? (
          <Col className="vep-main">
            <Uploader file={file} setSource={setSource} setFile={setFile} />
            <Player
              width={'1280'}
              ffmpeg={ffmpegRef.current}
              source={source}
              file={file}
            />
          </Col>
        ) : (
          <Spinner />
        )}
      </styled.Vep>
    </ThemeProvider>
  );
};
