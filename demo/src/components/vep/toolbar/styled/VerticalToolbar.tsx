import { styled } from "styled-components";
import { Col } from "../../layout";

export const VerticalToolbar = styled(Col)`
    height: 100%;
    background-color: ${(props) => props.theme.css.primary};
    padding: 0.5em;
    box-sizing: border-box;
`;
