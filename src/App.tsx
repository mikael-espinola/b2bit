import React from "react";
import { Container } from "./Style";
import { GlobalStyle } from "./GlobalStyle";
import Login from "./components/login/Login";
import LoggedScreen from "./components/loggedScreen/LoggedScreen";

function App() {
  return (
    <Container>
      <Login />
      <LoggedScreen />
      <GlobalStyle />
    </Container>
  );
}

export default App;
