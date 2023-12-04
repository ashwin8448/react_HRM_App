import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
  align-items: center;
  display: flex;

  .logo {
    width: 150px;
  }

  @media (max-width: 530px) {
    margin-bottom: 10px;
    flex-direction: column;
    align-items: baseline;
  }
`;

export default HeaderWrapper;
