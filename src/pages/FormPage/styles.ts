import styled from "styled-components";

const FormWrapper = styled.div`
  height: 100%;
  box-sizing: border-box;
  h2 {
    margin-top: 0;
  }

  .required {
    color: var(--asterisk);
  }

  .error {
    color: var(--validation-message);
    margin: 7px 0;
    font-size: 12px;
  }

  .error-placeholder {
    visibility: hidden;
    margin: 7px 0;
    font-size: 12px;
  }

  input,
  select {
    height: 40px;
  }

  legend {
    font-weight: 800;
    margin: 5px 0;
  }

  fieldset {
    border: 0;
    padding: 10px 0;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .buttons-container {
    justify-content: right;
    gap: 20px;
    .primary-button {
      width: 100px;
      background-color: var(--button);
    }
  }

  .input-field {
    width: 45%;
  }

  label {
    margin-bottom: 7px;
  }
  .custom-dropdown {
    padding: 0;
    background-color: var(--input);
    margin-top: 7px;

    input {
      margin-top: 0;
      flex-grow: 1;
    }
  }

  .loader {
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 500px) {
    fieldset {
      flex-direction: column;
      .input-field {
        width: 100%;
      }
    }
  }
`;

export default FormWrapper;
