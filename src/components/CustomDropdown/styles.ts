import styled from "styled-components";

const CustomDropdownWrapper = styled.div`
  background-color: var(--search-bar);
  padding: 5px;
  border-radius: 5px;
  position: relative;

  input {
    height: 35px;
  }

  .options {
    position: absolute;
    background-color: var(--input);
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    top: 42px;
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

  button{
    padding: 0;
  }
`;

export default CustomDropdownWrapper;
