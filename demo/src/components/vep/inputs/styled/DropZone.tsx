import { styled } from "styled-components";

export const DropZone = styled.div<{ $width: number; $height: number }>`
  flex-wrap: wrap;
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  justify-content: center;
  align-content: center;
  display: flex;
  .drop-box {
    text-align: center;
    border: 0.05em dashed ${(props) => props.theme.css.trim};
    border-radius: 0.5em;
    padding: 5%;
    svg {
      align-self: center;
      height: 2.5em;
      width: 2.5em;
      margin-bottom: 1em;
    }
  }
`;
