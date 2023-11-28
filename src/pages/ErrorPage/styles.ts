import styled from "styled-components";

const ErrorPageWrapper = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  button{
    justify-content: center;
  }
  h2 {
    color: red;
  }
  img{
    width: 300px;
  };
`;

export default ErrorPageWrapper;
