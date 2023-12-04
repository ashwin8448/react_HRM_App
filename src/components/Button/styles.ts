import styled, { css } from "styled-components";
import { IButtonStyleProps } from "./types";

const ButtonWrapper = styled.button<IButtonStyleProps>`
  display: flex;
  @media (max-width: 530px) {
    &.full-width {
      width: 100%;
      height: 45px;
    }
  }

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
          &:focus-visible {
            outline: 2px solid blue;
          }
        `;
      case "secondary-button":
        return css`
          width: 60px;
          justify-content: center;
          height: 40px;
          align-items: center;
          background-color: var(--button);
          border-radius: 5px;
          gap: 5px;
          padding: 5px;
          border: none;
          ${props.$isNegative &&
          css`
            background-color: red;
            color: white;
          `}
        `;
    }
  }}
`;

export default ButtonWrapper;
