import styled from "styled-components";

export const Container = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.6em;
  box-shadow: 0px 0px 80px #abaaaa;
  background-color: #fff;
`;
export const Logo = styled.div`
  width: 280px;
  height: 90px;
  margin: 1em 1em 2em 1em;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const TypeItem = styled.label`
  font-size: 14px;
`;
export const Input = styled.input`
  margin: 0 0.1em;
  padding: 0.9em;
  margin: 0.5em 0 1em 0;
  border-radius: 0.6em;
  border: none;
  background-color: #e2dfdf;

  &::placeholder {
    font-size: 11px;
  }
`;
export const Button = styled.button`
  padding: 0.9em;
  background-color: #092762;
  color: #fff;
  border-radius: 0.6em;
  margin: 1.2em 0;
  cursor: pointer;
  border: none;
`;
