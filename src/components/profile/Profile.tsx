import React from "react";
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

function Profile() {
  return (
    <Main>
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
            <Item>Mikael da Costa Espínola</Item>
          </UserData>
          <UserData>
            <LabelItem>
              Your <ItemSpan>E-mail</ItemSpan>
            </LabelItem>
            <Item>mikaelespinolaa@gmail.com</Item>
          </UserData>
        </DataContainer>
      </Container>
    </Main>
  );
}

export default Profile;
