import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  margin: 20px 0;
  .card {
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: var(--table);
    border-radius: 10px;
    border: 1px solid black;
    gap: 10px;

    .employee-actions {
      display: flex;
      gap: 10px;
    }
  }
`;

export default CardWrapper;
