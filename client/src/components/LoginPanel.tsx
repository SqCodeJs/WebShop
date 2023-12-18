import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../utils/device";
import { useMediaQuery, useTheme } from "@mui/material";

const Wrapp = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    z-index: 999999;
    background-color: white;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    inset: 0;
    height: 100vh;

    @media ${device.tablet} {
        position: absolute;
        width: 300px;
        height: 400px;
        top: 28px;
        left: unset;
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
    padding: 10px;
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

const RoundButton = styled.button`
    position: absolute;
    top: 12px;
    right: 12px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: #e0e0e0;
    border: none;
    color: #333;
    font-size: 14px;
    cursor: pointer;
`;

interface Props {
    loginFlagToggle: () => void;
}

const LoginPanel: React.FC<Props> = ({ loginFlagToggle }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    
    return (
        <Wrapp>
            <Strap></Strap>
            {isMobile && <RoundButton onClick={loginFlagToggle}>x</RoundButton>}
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
