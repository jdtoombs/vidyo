import { Row } from "../..";
import { styled } from "styled-components";

export const ControlBar = styled(Row)`
  width: 100%;
  padding: 0.5em;
  color: ${(props) => props.theme.css.action};
  background-color: ${(props) => props.theme.css.black};
  box-sizing: border-box;

  .tools {
    margin-left: auto;
    svg {
      margin-left: 0.5em;
    }
  }

  svg {
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }

  .column-container {
    width: 100%;
  }
`;
