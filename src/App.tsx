import React, { useState } from "react";
import { Container } from "./Style";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default App;
