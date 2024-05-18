import { MouseEventHandler } from "react";
import { Container, HeaderContainer, Button } from "./Style";
import Profile from "../profile/Profile";
import { useNavigate } from "react-router-dom";

function UserScreen() {
  const navigate = useNavigate();

  const handleLogout: MouseEventHandler = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/b2bit", { replace: true, state: { reload: true } });
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

export default UserScreen;
