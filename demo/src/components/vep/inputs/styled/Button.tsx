import styled from "styled-components";

export const Button = styled.button<{ $variant?: "danger" | "action" }>`
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.css.grey};
  }
  border: 0.1em solid;
  background-color: ${(props) => props.theme.css.white};
  color: ${(props) => {
    switch (props.$variant) {
      case "danger":
        return props.theme.css.danger;
      case "action":
        return props.theme.css.action;
      default:
        return props.theme.css.primary;
    }
  }};
  border-color: ${(props) => {
    switch (props.$variant) {
      case "danger":
        return props.theme.css.danger;
      case "action":
        return props.theme.css.action;
      default:
        return props.theme.css.primary;
    }
  }};
  background-color: ${(props) => {
    switch (props.$variant) {
      default:
        return props.theme.css.primary;
    }
  }};
  border-radius: 0.25em;
`;
