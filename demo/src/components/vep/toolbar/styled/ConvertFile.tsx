import { styled } from "styled-components";
import { Row } from "../..";

export const ConvertFile = styled(Row)`
  margin-left: 0.5em;
  border-radius: 0.2em;
  select {
    background-color: ${(props) => props.theme.css.primary};
    color: ${(props) => props.theme.css.action};
    border-width: 0.1em 0 0.1em 0.1em;
    border-radius: 0.25em 0 0 0.25em;
    border-color: ${(props) => props.theme.css.action};
    outline: none;
  }
`;
