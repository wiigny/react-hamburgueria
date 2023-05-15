import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

::-webkit-scrollbar-thumb {
  background-color: #26ae60;
  border-radius: 50px;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar {
  width: 4px;
}
body {
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
header {
  margin-bottom: 3rem;
}
span {
  color: #828282;
  font-size: 0.75rem;
}
button {
  transition: 0.4s ease-in-out;
  cursor: pointer;
}
button:hover {
  filter: brightness(1.1);
  filter: contrast(1.5);
}
`;
