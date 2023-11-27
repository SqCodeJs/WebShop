import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { device } from "../utils/device";

const Wrapp = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;

  right: 0;

  z-index: 99;

  height: 400px;
  background-color: white;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  @media ${device.default} {
    top: 36px;
    width: 220px;
  }
  @media ${device.mobileM} {
    top: 42px;
    width: 320px;
  }
  @media ${device.tablet} {
    top: 52px;
  }
  @media ${device.laptop} {
    top: 58px;
  }
`;
const Container = styled.div`
  width: 100%;
  padding: 5px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Strap = styled.div`
  width: 100%;
  height: 5px;
  background-image: linear-gradient(to right, #21a2fd, #be38ff 50%, #21a2fd);
  background-repeat: no-repeat;
`;
const Paragraf = styled.p`
  margin: 5px;
  font-size: 14px;
  text-align: center;
  font-family: Open Sans, sans-serif;
  font-weight: 100;
`;
const LinkStyled = styled(Link)`
  width: 100%;
  background-color: white;
  text-decoration: none;
  color: #2d9ae8;
  font-size: 16px;
  padding: 10px;
  &:hover {
    border: 1px solid #2d9ae8;
  }
`;

const Button = styled.button`
  width: 80%;
  margin: 5px;
  font-family: Open Sans, sans-serif;
  letter-spacing: 1px;
  background-color: white;
  font-weight: 100;
  color: #2d9ae8;

  border: 1px solid transparent;

  cursor: pointer;
`;

interface Props {
    loginFlagToggle: () => void;
}

const LoginPanel: React.FC<Props> = ({ loginFlagToggle }) => {
    return (
        <Wrapp>
            <Strap></Strap>
            <Container>
                <Paragraf>Zaloguj się, aby zobaczyć swoje powiadomienia.</Paragraf>
                <Button onClick={loginFlagToggle}>
                    <LinkStyled to="/login">ZALOGUJ SIĘ</LinkStyled>
                </Button>
                <Paragraf>Nie masz jeszcze konta?</Paragraf>

                <Button onClick={loginFlagToggle}>
                    <LinkStyled to="/register">ZAREJESTRUJ SIĘ</LinkStyled>
                </Button>
            </Container>
            <Strap></Strap>
        </Wrapp>
    );
};

export default LoginPanel;
