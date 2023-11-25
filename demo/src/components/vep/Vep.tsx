import React from "react";
import { Col, ConvertFile, Player, Uploader } from ".";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { toBlobURL } from "@ffmpeg/util";
import * as styled from "./styled";
import { ThemeProvider } from "styled-components";
import css from './css/_variables.module.scss'

/**
 * component to upload, edit, and play a file.
 * @returns The main container for the video editor and player
 */
export const Vep: React.FC = () => {
  const [file, setFile] = React.useState<File | null>(null);
  const [source, setSource] = React.useState<string | null>(null);
  const ffmpegRef = React.useRef(new FFmpeg());
  const [ffmpegReady, setFfmpegReady] = React.useState<boolean>(false);

  const load = async () => {
    const baseUrl = "https://unpkg.com/@ffmpeg/core@0.12.4/dist/esm";
    const ffmpeg = ffmpegRef.current;
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
    <ThemeProvider theme={{ css }}>
      <styled.Vep className="vep-container">
        {ffmpegReady ? (
          <Col>
            <Uploader file={file} setSource={setSource} setFile={setFile} />
            <Player source={source} file={file} />
            {file && <ConvertFile ffmpeg={ffmpegRef.current} file={file} />}
          </Col>
        ) : (
          "Loading Vep..."
        )}
      </styled.Vep>
    </ThemeProvider>
  );
};
