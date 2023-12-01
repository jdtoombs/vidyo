import { styled } from "styled-components";
import { Row } from "../../layout";

export const Uploader = styled(Row)`
  width: 100%;
  border: 0.05em solid;
  border-color: ${(props) => props.theme.css.primary};
  background-color: ${(props) => props.theme.css.primary};
  box-sizing: border-box;
  padding: 0.25em;
  border-bottom: 0.05em solid ${(props) => props.theme.css.trim};

  .clear-button {
    margin-left: auto;
  }

  .file-name {
    margin-left: 0.5em;
    color: ${(props) => props.theme.css.action};
  }

  .upload-button {
    margin-top: 0.05em;
    color: ${(props) => props.theme.css.action};
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`;
