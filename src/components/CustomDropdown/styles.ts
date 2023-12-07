import styled from "styled-components";
import { ICustomDropdownStyleProps } from "./types";

const CustomDropdownWrapper = styled.div<ICustomDropdownStyleProps>`
  border-radius: 5px;
  position: relative;

  ${(props) =>
    props.$dropdownLocation === "homepage"
      ? `background-color: var(--search-bar);`
      : `background-color: var(--input);`}
  ${(props) => (props.$dropdownLocation === "homepage" ? `padding:5px;` : null)}

  input {
    height: 40px;
    flex-grow: 1;
  }

  .options {
    position: absolute;
    background-color: var(--input);
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    top: 40px;
    left: 0;
    max-height: 140px;
    overflow-y: scroll;
    border-radius: 0 0 5px 5px;
  }

  .option {
    min-height: 25px;
    align-items: center;
    padding: 0 0 0 5px;
  }

  .option:hover {
    background-color: var(--hover-bg);
  }

  button {
    padding: 0;
  }
  .loader{
    display:flex;
    justify-content: center;
  }
`;

export default CustomDropdownWrapper;
