import { styled } from "styled-components";
import { Row } from "../../layout";

export const Uploader = styled(Row)`
  width: 100%;
  margin-bottom: 0.25em;
  border: 0.05em solid;
  border-color: ${(props) => props.theme.css.black};
  background-color: ${(props) => props.theme.css.black};
  border-radius: 0.25em;
  box-sizing: border-box;
  padding: 0.25em;

  .clear-button {
    margin-left: auto;
  }

  .file-name {
    margin-left: 0.5em;
    color: ${(props) => props.theme.css.white};
  }

  .upload-button {
    color: ${(props) => props.theme.css.action};
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`;
