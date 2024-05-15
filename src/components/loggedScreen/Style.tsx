import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #e4edf3;
  display: flex;
  flex-direction: column;
`;
export const HeaderContainer = styled.header`
  width: 100%;
  background-color: #fff;
  padding: 0.3em;
  display: flex;
  justify-content: end;
`;

export const Button = styled.button`
  padding: 0.9em;
  background-color: #002274;
  border: none;
  border-radius: 0.6em;
  width: 15em;
  color: #fff;
  margin: 0 1em 0.3em 0;
  cursor: pointer;
  text-align: center;
`;
