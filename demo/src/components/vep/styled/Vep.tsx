import { styled } from "styled-components";
import { Col } from "..";

export const Vep = styled(Col)`
  background-color: ${(props) => props.theme.css.space};
  color: ${(props) => props.theme.css.white};
  border: 0.1em solid ${(props) => props.theme.css.grey};
  border-radius: 0.25em;
`;
