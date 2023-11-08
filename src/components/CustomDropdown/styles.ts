import styled from "styled-components";

const CustomDropdownWrapper = styled.div`
  width: 65%;
  background-color: var(--input);
  flex-wrap: wrap;
  padding: 10px;
  box-sizing: border-box;
  gap: 10px;
  border-radius: 5px;
  position: relative;

  input {
    width: 100%;
  }

  .searchable-input {
    flex-grow: 1;
  }

  .options {
    position: absolute;
    background-color: var(--dropdown-bg);
    width: 100%;
    padding: 10px 10px 10px 10px;
    box-sizing: border-box;
    top: 20px;
    left: 0;
    max-height: 200px;
  }

  .option {
    min-height: 25px;
    align-items: center;
    padding: 0 0 0 5px;
  }

  .option:hover {
    background-color: var(--hover-bg);
  }
`;

export default CustomDropdownWrapper;
