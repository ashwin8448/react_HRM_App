import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  /* --bg-blue: #659dbd;
  --bg-green: #8d8; */
  --bg-blue: #2A8F42;
  --bg-green: white;
   --font: black;
  --input: white;
  --table: #9f9f9f;
  --search-bar: #9f9f9f;
  --modal-bg: #dddddd;
  --button: #509910;;
  --button-hover: #d4af9b;
  --overlay-bg: rgba(0, 0, 0, 0.459);
  --hover-bg: #958989b5;
  --selected-skill: #d4af9b;
  --validation-message: red;
  --dropdown-bg: white;
}

input, select{
border: .5px solid #509910;
}

html {
  height: 100%;
}

body {
  background: linear-gradient(to bottom, #add8e6, #f8f8f8,#add8e6);
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
  border-radius: 5px;
  padding: 5px;
  box-sizing: border-box;
  background-color: var(--input);
  }

[type="submit"]:focus-visible,
[type="reset"]:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: 2px solid blue;
}

.form-container{
  height: 100%;
  box-sizing: border-box;
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

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
`;

export default GlobalStyle;
