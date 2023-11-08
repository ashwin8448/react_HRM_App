import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --bg-blue: #659dbd;
  --bg-green: #8d8;
  --font: black;
  --input: #ffffff;
  --table: #dddddd;
  --search-bar: #dddddd;
  --modal-bg: #dddddd;
  --button: #ffffff;
  --button-hover: #d4af9b;
  --overlay-bg: rgba(0, 0, 0, 0.459);
  --hover-bg: #958989b5;
  --toast-bg: rgb(70, 161, 70);
  --selected-skill: #d4af9b;
  --asterisk: red;
  --validation-message: red;
  --dropdown-bg: white;
}

html {
  height: 100%;
}

body {
  background-image: linear-gradient(180deg, var(--bg-blue), var(--bg-green));
  background-attachment: fixed;
  color: var(--font);
  font-family: Urbanist;
  font-weight: 600;
  min-height: 100%;
}

.container {
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  height: 100vh;
}

.flex {
  display: flex;
}

.flex-column{
    flex-direction: column;
}

input,
select{
  border: none;
  border-radius: 5px;
  padding: 5px;
  box-sizing: border-box;
  background-color: var(--input);
  }

[type="submit"]:focus-visible,
[type="reset"]:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible
.primary-button:focus-visible {
  outline: 2px solid blue;
}

button,
input[type="submit"],
input[type="reset"] {
  color: inherit;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  background: none;
  border: none;
}

.icon {
  width: 32px;
}

main{
  flex-grow: 1;
}

.primary-button{
  align-items: center;
  background-color: var(--button);
  border-radius: 5px;
  gap: 5px;
  padding: 5px;
  border: none;
  justify-content: space-between;
}

.primary-button:hover{
  background-color: var(--button-hover);
}

.page-content{
  background-color: var(--table);
  border-radius: 5px;
  padding: 25px;
}

ul {
  list-style-type: none; 
  padding: 0; 
  margin: 0; 
}
`;

export default GlobalStyle;
