import { styled } from "styled-components";
import { Col } from "..";

export const Vep = styled(Col)`
  .vep-main {
    background-color: ${(props) => props.theme.css.secondary};
    color: ${(props) => props.theme.css.white};
    border: 0.1em solid ${(props) => props.theme.css.primary};
    border-radius: 0.25em;
  }
`;
