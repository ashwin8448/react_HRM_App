import styled from "styled-components";

const ErrorPageWrapper = styled.section`
  div {
    position: fixed;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  button {
    justify-content: center;
  }
  h2 {
    color: #d1001f;
    margin: 0;
  }
  p {
    margin: 10px;
  }
  img {
    width: 300px;
  }
`;

export default ErrorPageWrapper;
