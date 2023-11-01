import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --bg-blue: #659dbd;
  --bg-green: #8d8;
  --font: black;
  --table-row-border: black;
  --input: #ffffff;
  --table: #dddddd;
  --search-bar: #dddddd;
  --modal-bg: #dddddd;
  --button: #ffffff;
  --overlay-bg: rgba(0, 0, 0, 0.459);
  --hover-bg: #958989b5;
  --toast-bg: rgb(70, 161, 70);
  --selected-skill: #ffcb00;
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
  max-width: 1440px;
  width: 90%;
  margin: 0 auto;
}

.flex {
  display: flex;
}

.flex-column{
    flex-direction: column;
}

input[type="text"]:focus,
textarea:focus {
  outline: 1px solid black;
}

button,
input[type="submit"],
input[type="reset"] {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

.icon {
  width: 32px;
}

`;

export default GlobalStyle;
