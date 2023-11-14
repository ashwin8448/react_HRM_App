import styled, { css } from "styled-components";
import { IButtonStyleProps } from "./types";

const ButtonWrapper = styled.button<IButtonStyleProps>`
  display: flex;
  ${(props) => {
    switch (props.$buttonType) {
      case "close-button":
        return css`
          float: right;
          justify-content: center;
          background: none;
          padding: 0;
          margin: 5px 5px 0 0;
        `;
      case "primary-button":
        return css`
          align-items: center;
          background-color: var(--button);
          border-radius: 5px;
          gap: 5px;
          padding: 5px;
          border: none;
          justify-content: space-between;

          &:hover {
            background-color: var(--button-hover);
          }
        `;
    }
  }}
`;

export default ButtonWrapper;
