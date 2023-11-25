import styled from "styled-components";
import { Col } from "../../layout";

export const DoubleSlider = styled(Col)`
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

  /** make sure thumb is still draggable */


  /* chromium / not testing i.e uninstall it :)*/
  input[type="range"]:not(.tracker)::-webkit-slider-runnable-track {
    background: #053a5f;
    height: 0.25em;
    border-radius: 0.5em;
    z-index: 1;
  }

  /** firefox */
  input[type="range"]:not(.tracker)::-moz-range-track {
    background: #053a5f;
    height: 0.25em;
    border-radius: 0.5em;
    z-index: 1;
  }

  /* thumb */
  input[type="range"]:not(.tracker)::-webkit-slider-thumb {
    pointer-events: auto;
    -webkit-appearance: none;
    cursor: grab;
    appearance: none;
    width: 0.35em;
    height: 1.5em;
    background: #edf5e1;
    margin-top: calc(0.25em / 2 - 1.5em / 2);
    border-radius: 0.5em;
    z-index: 2;
  }
  /** ff thumbs */
  input[type="range"]:not(.tracker)::-moz-range-thumb {
    -webkit-appearance: none;
    cursor: grab;
    appearance: none;
    width: 0.35em;
    height: 1.5em;
    background: #edf5e1;
    margin-top: calc(0.25em / 2 - 1.5em / 2);
    border-radius: 0.5em;
    z-index: 2;
  }

  /* tracker */
  input[type="range"]::-webkit-slider-thumb {
    box-sizing: border-box;
    cursor: grab;
    -webkit-appearance: none;
    appearance: none;
    width: 0.25em;
    height: 1.5em;
    background: ${(props) => props.theme.css.yellow};
    margin-top: -0.9em;
    border-radius: 0.5em;
    z-index: 2;
  }

  input[type="range"]::-moz-range-thumb {
    -webkit-appearance: none;
    appearance: none;
    cursor: grab;
    width: 0.25em;
    height: 1.5em;
    background: #edf5e1;
    margin-top: -0.9em;
    border-radius: 0.5em;
    z-index: 2;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    background: none;
    width: 3em;
    height: 0.25em;
    border-radius: 0.5em;
    z-index: 3;
  }

  /** firefox */
  input[type="range"]::-moz-range-track {
    background: none;
    height: 0.25em;
    border-radius: 0.5em;
    z-index: 3;
  }

  .slider-parent {
    justify-content: center;
    width: 100%;
  }
  .slider-one {
    margin: 0;
    width: 50%;
  }

  .slider-two {
    margin: 0;
    margin-left: -1%;
    width: 50%;
  }

  .tracker {
    margin: 0;
    position: relative;
    width: 100%;
  }
`;
