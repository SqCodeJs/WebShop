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
import NavToggle from "../Navigation/components/NavToggle";
import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import SearchBar from './SearchBar';

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 1280px;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:#2d9ae8;
    position: relative;
    max-width: 1280px;
    margin: 0 auto;

    @media ${device.tablet} {
        background-color: unset;
    }
`;

const Icons = styled.div`
      position: relative;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.tablet} {
        margin-left: auto;
    }
`;

const Buttons = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    color: white;

      &:hover {
        cursor: pointer;
        color: #2d9ae8;
    }

    @media ${device.tablet} {
        width: 28px;
        height: 28px;
        color: #2d9ae8;

        &:hover {
            color: #1684d3;
        }
    }
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    color: white;
    border: none;
    background-color: transparent;
    
    @media ${device.tablet} {
        width: 28px;
        height: 28px;
        color: #2d9ae8;
    }

    &:hover {
        cursor: pointer;
        color: #2d9ae8;
    }
`;

const Header = () => {
    const { basket, flags } = useSelector((state: RootState) => state);
    const { navigation: isOpenNav } = flags;
    const [loginFlag, setLoginFlag] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const loginFlagToggle = () => {
        setLoginFlag(!loginFlag);
    };

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(767));

    return (
        <>
            <Wrapper>

                <Container>
                    {isMobile && <NavToggle isOpenNav={isOpenNav} />}
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
                                basket={basket.items}
                                setIsHover={setIsHover}
                                render={BasketCard}
                            />
                        )}
                    </Icons>
                </Container>
            </Wrapper>

            <SearchBar />
        </>
    );
};

export default Header;
