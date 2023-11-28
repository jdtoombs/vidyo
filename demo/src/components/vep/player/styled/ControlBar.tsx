import { Row } from "../..";
import { styled } from "styled-components";

export const ControlBar = styled(Row)`
  width: 100%;
  padding: 0.5em;
  color: ${(props) => props.theme.css.action};
  background-color: ${(props) => props.theme.css.primary};
  box-sizing: border-box;
  border-top: 0.05em solid ${(props) => props.theme.css.trim};

  svg {
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }

  .tools {
    margin-left: auto;
  }

  .column-container {
    width: 100%;
  }

  .trim {
    svg {
      margin-left: 0.25em;
    }
  }
`;
