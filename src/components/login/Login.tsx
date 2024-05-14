import React, { FormEvent } from "react";
import {
  Button,
  Container,
  Image,
  Input,
  LoginForm,
  Logo,
  TypeItem,
} from "./Style";

function Login() {
  const handleLogin = (
    event: FormEvent<HTMLButtonElement | HTMLFormElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Logo>
        <Image src={require("../images/b2bit_logo.png")} />
      </Logo>
      <LoginForm onSubmit={handleLogin}>
        <TypeItem>E-mail</TypeItem>
        <Input type="email" placeholder="@gmail.com" required />
        <TypeItem>Password</TypeItem>
        <Input type="password" placeholder="*******************" required />
        <Button onSubmit={handleLogin}>Sign In</Button>
      </LoginForm>
    </Container>
  );
}

export default Login;
