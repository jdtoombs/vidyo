import styled from "styled-components";
import { Col } from "../../layout";

export const VideoSeeker = styled(Col)`
  width: 100%;
  margin-top: 0.5em;
  margin-bottom: 1em;
  /* style slider */
  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
    background: transparent;
    width: 100%;
  }

  /** disable track click for start and end points */
  input[type="range"]:not(.tracker) {
    pointer-events: none;
  }

  /* chromium / not testing i.e uninstall it :)*/
  input[type="range"]:not(.tracker)::-webkit-slider-runnable-track {
    background: transparent;
    height: 0.25em;
    border-radius: 0.5em;
  }

  /** firefox */
  input[type="range"]:not(.tracker)::-moz-range-track {
    background: transparent;
    height: 0.25em;
    border-radius: 0.5em;
  }

  /* thumb */
  input[type="range"]:not(.tracker)::-webkit-slider-thumb {
    pointer-events: auto;
    -webkit-appearance: none;
    cursor: grab;
    appearance: none;
    width: 0.35em;
    height: 1.5em;
    background: ${(props) => props.theme.css.action};
    border-radius: 0.5em;
  }
  /** ff thumbs */
  input[type="range"]:not(.tracker)::-moz-range-thumb {
    pointer-events: auto;
    -webkit-appearance: none;
    cursor: grab;
    appearance: none;
    width: 0.35em;
    height: 1.5em;
    background: ${(props) => props.theme.css.action};
    border-radius: 0.5em;
  }

  /* tracker */
  input[type="range"]::-webkit-slider-thumb {
    box-sizing: border-box;
    cursor: grab;
    -webkit-appearance: none;
    appearance: none;
    width: 0.35em;
    height: 1.5em;
    background: ${(props) => props.theme.css.yellow};
    margin-top: -0.65em;
    border-radius: 0.5em;
  }

  input[type="range"]::-moz-range-thumb {
    box-sizing: border-box;
    cursor: grab;
    -webkit-appearance: none;
    appearance: none;
    width: 0.25em;
    height: 1.5em;
    background: ${(props) => props.theme.css.yellow};
    margin-top: -0.65em;
    border-radius: 0.5em;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    background: ${(props) => props.theme.css.action};
    width: 3em;
    margin-bottom: -0.5em;
    height: 0.25em;
    border-radius: 0.5em;
  }

  /** firefox */
  input[type="range"]::-moz-range-track {
    background: ${(props) => props.theme.css.action};
    width: 3em;
    margin-bottom: -0.5em;
    height: 0.25em;
    border-radius: 0.5em;
  }

  .slider-parent {
    justify-content: center;
    width: 100%;
  }
  .slider-one {
    margin: 0;
    width: 100%;
  }

  .slider-two {
    margin: 0;
    width: 100%;
  }

  .tracker {
    margin: 0;
    width: 100%;
    z-index: 0;
  }
`;
