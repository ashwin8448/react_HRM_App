import styled from "styled-components";

const FormWrapper = styled.form`
  h2 {
    margin-top: 0;
  }

  .asterisk {
    color: var(--asterisk);
  }

  .error-placeholder {
    color: var(--validation-message);
    /* visibility: hidden; */
    margin: 7px 0;
    font-size: 12px;
  }
  /* 
  .error-placeholder.open {
    visibility: visible;
  } */

  input,
  select {
    margin: 7px 0 0 0;
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

  label {
    width: 45%;
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
`;

export default FormWrapper;
