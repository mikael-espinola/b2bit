import React, { useEffect, useState } from "react";
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
  const [statusLoading, setStatusLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let cloudToken = localStorage.getItem("token");
    let token = cloudToken ? JSON.parse(cloudToken) : "";

    if (token === "") {
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

          navigate("/user");
        })
        .catch((error) => {
          error.response.status === 401 &&
            alert("Favor, faça o login novamente.");
          navigate("/");
        })
        .finally(() => {
          setStatusLoading(false);
        });
    }
  }, []);

  return (
    <Main>
      {context && (
        <Container>
          <PicTitle>Profile Picture</PicTitle>
          <LogoContainer>
            <Image src={require("../images/profile.png")} />
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
