import styled from "styled-components";

const DivWrapper = styled.div`
  /* height: 100%; */
  box-sizing: border-box;
  h2 {
    margin-top: 0;
  }
  p{
    width: 50%;
  }
  .employeeDetailsContainer{
    flex-wrap: wrap;
  }
  .loader {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    align-items: center;
  }
`;

export default DivWrapper;
