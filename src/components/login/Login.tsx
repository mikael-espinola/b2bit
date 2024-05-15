import { FormEvent, useState } from "react";
import {
  Button,
  Container,
  Image,
  Input,
  LoginForm,
  Logo,
  TypeItem,
} from "./Style";
import { useNavigate } from "react-router-dom";

const userData = {
  user: "mikael@email.com",
  password: "mikael",
};

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleLogin = (
    event: FormEvent<HTMLButtonElement | HTMLFormElement>
  ) => {
    event.preventDefault();

    if (userData.password === password && userData.user === email) {
      return navigate("/logged");
    }
    return console.log("erro no login");
  };

  return (
    <Container>
      <Logo>
        <Image src={require("../images/b2bit_logo.png")} />
      </Logo>
      <LoginForm onSubmit={handleLogin}>
        <TypeItem>E-mail</TypeItem>
        <Input
          type="email"
          placeholder="@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TypeItem>Password</TypeItem>
        <Input
          type="password"
          placeholder="*******************"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Sing In</Button>
      </LoginForm>
    </Container>
  );
}

export default Login;
