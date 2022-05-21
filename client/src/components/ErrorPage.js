import React from "react";
import { Link } from "react-router-dom";
import { Wrapp } from "../utils/styledComponents";
import styled from "styled-components";

const ErrorWrapp = styled(Wrapp)`
  width: 100%;
  height: 100vh;
`;
const Message = styled.div`
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  align-items: flex-end;
  border: 2px solid #2d9ae8;
  border-radius: 30px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;
const Title = styled.h1`
  width: 100%;
  font-family: Roboto, sans-serif;
  text-align: center;
  color: #2d9ae8;
  font-weight: 400;
  font-size: 26px;
`;
const HomeButton = styled(Link)`
  width: 45%;
  padding: 10px;
  margin: 10px;
  font-family: Open Sans, sans-serif;
  text-align: center;
  letter-spacing: 2px;
  font-size: 16px;
  font-weight: 100;
  text-decoration: none;
  color: #2d9ae8;
  border: 1px solid grey;

  cursor: pointer;
  &:hover {
    background-color: #2d9ae8;
    color: white;
  }
`;

const ErrorPage = () => {
  return (
    <ErrorWrapp>
      <Message>
        <Title>Strona nie istniej :(</Title>
        <HomeButton to="/">Strona Główna</HomeButton>
      </Message>
    </ErrorWrapp>
  );
};

export default ErrorPage;
