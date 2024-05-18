import { useEffect } from "react";
import {
  DataContainer,
  Image,
  Item,
  ItemSpan,
  LabelItem,
  LogoContainer,
  Main,
  PicTitle,
  UserData,
} from "./Style";
import { Container } from "./Style";
import { useUser } from "../userContext/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Profile() {
  const context = useUser();
  const navigate = useNavigate();

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
          const user = getResponse.data;
          context.updateUserData(user);

          navigate("/b2bit/user");
        })
        .catch((error) => {
          if (error.response.status === 401 || error.response.status === 403) {
            alert("Please, Sign in again.");
          }
          navigate("/b2bit");
        });
    }
  }, []);

  return (
    <Main>
      {context && (
        <Container>
          <PicTitle>Profile Picture</PicTitle>
          <LogoContainer>
            <Image
              src={context.avatar ? context.avatar.high : "/assets/profile.png"}
            />
          </LogoContainer>
          <DataContainer>
            <UserData>
              <LabelItem>
                Your <ItemSpan>Name</ItemSpan>
              </LabelItem>
              <Item>{context.name}</Item>
            </UserData>
            <UserData>
              <LabelItem>
                Your <ItemSpan>E-mail</ItemSpan>
              </LabelItem>
              <Item>{context.email}</Item>
            </UserData>
          </DataContainer>
        </Container>
      )}
    </Main>
  );
}

export default Profile;
