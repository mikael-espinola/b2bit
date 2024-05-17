import styled from "styled-components";

export const Main = styled.main`
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  padding: 1em;
  margin-top: 5em;
  width: 20em;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.6em;
  box-shadow: 0px 0px 80px #abaaaa;
  background-color: #fff;
`;

export const PicTitle = styled.span`
  font-size: 10px;
  margin-top: 0.6em;
`;

export const LogoContainer = styled.div`
  width: 50px;
  min-height: 50px;
  margin: 0.4em 0;
`;

export const Image = styled.img`
  border-radius: 0.6em;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const DataContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5em;
  flex-direction: column;
`;

export const UserData = styled.div`
  margin-top: 0.5em;
`;

export const LabelItem = styled.label`
  font-size: 13px;
`;
export const ItemSpan = styled.span`
  font-weight: bold;
`;
export const Item = styled.p`
  font-size: 11px;
  background-color: #eceef1;
  padding: 1.2em;
  margin: 0.4em 0;
  border-radius: 0.6em;
`;
