import styled from "styled-components";

const SelectedSkillsWrapper = styled.div`
  align-items: center;
  margin: 20px 0;
  border: 1px solid white;
  border-radius: 5px;
  padding: 10px 0 10px 10px;
  /* visibility: hidden; */

  .selected-skills {
    overflow: auto;
    height: 40px;
    gap: 15px;
    padding: 0 10px;
  }
`;

export default SelectedSkillsWrapper;
