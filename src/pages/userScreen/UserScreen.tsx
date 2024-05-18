import { MouseEventHandler } from "react";
import { Container, HeaderContainer, Button } from "./Style";
import Profile from "../../components/profile/Profile";
import { useNavigate } from "react-router-dom";

function UserScreen() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/b2bit");
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
