import React, { MouseEventHandler } from "react";
import { Container, HeaderContainer, Button } from "./Style";
import Profile from "../profile/Profile";
function LoggedScreen() {
  const handleLogout: MouseEventHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Container>
      <HeaderContainer>
        <Button onClick={handleLogout}>Logout</Button>
      </HeaderContainer>
      <Profile />
    </Container>
  );
}

export default LoggedScreen;
