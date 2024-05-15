import React, { useState } from "react";
import { Container } from "./Style";
import Login from "./components/login/Login";

function App() {
  const [status, setStatus] = useState(false);
  return (
    <Container>
      <Login />
    </Container>
  );
}

export default App;
