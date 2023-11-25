import { Row } from "../..";
import { styled } from "styled-components";

export const ControlBar = styled(Row)`
  width: 100%;
  padding: 0.5em;
  color: ${(props) => props.theme.css.action};
  background-color: ${(props) => props.theme.css.black};
  box-sizing: border-box;
`;
