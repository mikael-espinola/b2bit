import React from "react";
import { Container } from "./Style";
import { GlobalStyle } from "./GlobalStyle";
import Login from "./components/login/Login";

function App() {
  return (
    <Container>
      <Login />
      <GlobalStyle />
    </Container>
  );
}

export default App;
