import styled from "styled-components";
const SearchBarWrapper = styled.div`
  align-items: center;
  background-color: var(--search-bar);
  border-radius: 5px;
  padding: 5px;
  display: flex;
  box-sizing: border-box;
  form {
    width: 100%;
  }
  input {
    height: 35px;
    border-radius: 5px;
  }
  @media (max-width: 530px) {
    width: 100%;
  }
`;
export default SearchBarWrapper;
