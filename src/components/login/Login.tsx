import { FormEvent, useEffect, useState } from "react";
import {
  Button,
  Container,
  ErrorContainer,
  ErrorSpan,
  Picture1,
  Input,
  LoginForm,
  Logo,
  TypeItem,
} from "./Style";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SyncLoader } from "react-spinners";
import { IoWarningOutline } from "react-icons/io5";
import { useUser } from "../userContext/UserContext";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [statusLoading, setStatusLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const context = useUser();

  useEffect(() => {
    let cloudToken = localStorage.getItem("token");
    let token = cloudToken ? JSON.parse(cloudToken) : "";

    if (token === "") {
      navigate("/b2bit");
      return;
    } else {
      axios.interceptors.request.use((config) => {
        config.headers["Authorization"] = `Bearer ${token}`;
        return config;
      });

      const profileURL =
        "https://api.homologation.cliqdrive.com.br/auth/profile/";
      const headers = {
        Accept: "application/json;version=v1_web",
        "Content-Type": "application/json",
      };

      axios
        .get(profileURL, { headers })
        .then((getResponse) => {
          setStatusLoading(true);
          const user = getResponse.data;
          context.updateUserData(user);

          navigate("/b2bit/user");
        })
        .catch((error) => {
          if (error.response.status === 401 || error.response.status === 403) {
            navigate("/b2bit");
          }
        })
        .finally(() => {
          setStatusLoading(false);
        });
    }
  }, []);

  const handleLogin = (
    event: FormEvent<HTMLButtonElement | HTMLFormElement>
  ) => {
    event.preventDefault();
    setStatusLoading(true);

    const apiUrl = "https://api.homologation.cliqdrive.com.br/auth/login/";
    const headers = {
      Accept: "application/json;version=v1_web",
      "Content-Type": "application/json",
    };
    const bodyParams = {
      email: `${email}`,
      password: `${password}`,
    };

    axios
      .post(apiUrl, bodyParams, { headers })
      .then((postResponse) => {
        if (postResponse.status === 200) {
          const token = postResponse.data.tokens.access;
          localStorage.setItem("token", JSON.stringify(token));
          const user = postResponse.data.user;
          context.updateUserData(user);
          navigate("/b2bit/user");
        }
      })
      .catch((error) => {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
      })
      .finally(() => {
        setStatusLoading(false);
      });
  };

  return (
    <Container>
      <Logo>
        <Picture1 src={`assets/B2bit_logo.png`} alt="Logo" />
      </Logo>
      {error && (
        <ErrorContainer>
          <IoWarningOutline color="red" />
          <ErrorSpan>Incorrect credentials. Check and try again.</ErrorSpan>
        </ErrorContainer>
      )}
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
        <Button type="submit" disabled={statusLoading}>
          {statusLoading ? <SyncLoader color="#fff" /> : "Sing In"}
        </Button>
      </LoginForm>{" "}
    </Container>
  );
}

export default Login;
