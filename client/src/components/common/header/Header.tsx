import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../../utils/device";
import LoginPanel from "../../LoginPanel";
import BasketCard from "../../BasketCard";
import { singUp, shoppBag, user } from "../../../utils/icon";
import { LogoHeader } from "../../../utils/styledComponents";
import YourCard from "../../YourCard";
import { RootState } from "../../../state/reducers/rootReducer";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;
const Strap = styled.div`
  width: 100%;
  height: 5px;
  background-image: linear-gradient(to right, #21a2fd, #be38ff 50%, #21a2fd);
  background-repeat: no-repeat;
`;
const Container = styled.div`
  width: 80%;
  margin: 1% auto;
  display: flex;
  justify-content: space-around;
`;

const Icons = styled.div`
  position: relative;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Buttons = styled(Link)`
  width: 20%;
  margin: 5%;

  border: none;
  color: rgb(169, 169, 169);

  &:hover {
    cursor: pointer;
    color: #2d9ae8;
  }
  @media ${device.laptop} {
    padding: 5%;
  }
`;
const Button = styled.button`
  width: 20%;
  margin: 5%;

  border: none;
  color: rgb(169, 169, 169);

  background-color: transparent;

  &:hover {
    cursor: pointer;
    color: #2d9ae8;
  }
  @media ${device.laptop} {
    padding: 5%;
  }
`;

const Header = () => {
    const { basket } = useSelector((state: RootState) => state);
    const [loginFlag, setLoginFlag] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const loginFlagToggle = () => {
        setLoginFlag(!loginFlag);
    };

    return (
        <Wrapper>
            <Strap />
            <Container>
                <LogoHeader to="/">sklep</LogoHeader>
                <Icons
                    onMouseLeave={() => {
                        setLoginFlag(false);
                    }}
                >
                    <Buttons to="/userpanel">{user}</Buttons>
                    <Button
                        onClick={() => {
                            loginFlagToggle();
                            setIsHover(false);
                        }}
                    >
                        {singUp}
                    </Button>
                    <Buttons
                        to="/card"
                        onMouseEnter={() => {
                            setIsHover(true);
                            setLoginFlag(false);
                        }}
                        onMouseLeave={() => setIsHover(false)}
                    >
                        {shoppBag}
                    </Buttons>
                    {/* {loginFlag && (
                        <LoginPanel
                            loginFlag={loginFlag}
                            loginFlagToggle={loginFlagToggle}
                        />
                    )} */}
                    {isHover && (
                        <YourCard
                            basket={basket}
                            setIsHover={setIsHover}
                            render={BasketCard}
                        />
                    )}
                </Icons>
            </Container>
        </Wrapper>
    );
};

export default Header;
