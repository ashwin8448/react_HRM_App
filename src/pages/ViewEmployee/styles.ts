import styled from "styled-components";

const DivWrapper = styled.div`
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  h2 {
    margin-top: 0;
  }
  .loader {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    align-items: center;
  }
`;

export default DivWrapper;
