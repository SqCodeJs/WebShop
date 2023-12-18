import React from "react";
import styled from "styled-components";
import { PageWrapper } from "../../../utils/styledComponents";
import Strap from "../Straps/Strap";
import Navigation from "../Navigation/components/Navigation";
import renderFooterNavigation from "../Navigation/render/renderFooterNavigation";
import { device } from "../../../utils/device";
import { faClock, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Icon from "../../atoms/Icon";
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const WrappFooter = styled.footer`
    background-color: #f3f3f3;
`;

const Row = styled.div`
    width: 100%;
    display: flex;
`;

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const LogoButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0;
    font-size: 12px;
    background-color: #f3f3f3;
    color: #2d9ae8;
    border: none;
    text-transform: uppercase;
    cursor: pointer;

    @media ${device.tablet} {
        font-size: 16px;
    }

    @media ${device.laptopL} {
        font-size: 20px;
    }
`;

const IconBox = styled.div`
    width: 10%;
`;

const Column = styled.div`
    width: 100%;
    
    @media ${device.tablet} {
        width: 33%;
    }
`;

const LinkStyled = styled(NavLink)`
    width: 100%;
    text-decoration: none;
    color: #666;
    transition: 0.3s;
    padding: 8px 0;
    font-size: 14px;

    &:hover {
        color: #2d9ae8;
    }
`;

const Footer: React.FC = () => {
    return (
        <WrappFooter>
        <Strap />
        <PageWrapper className="PageWrap" style={{padding: '16px 20px'}}>
            <Content className='content'>
                <Column>
                    <Typography variant="h4" color="#818181">Categories</Typography>
                    <Navigation render={renderFooterNavigation} />
                </Column>
                <Column>
                    <Typography variant="h4" color="#818181">kontakt</Typography>
                    <Row style={{alignItems: "center"}}>
                        <IconBox>
                            <Icon icon={faPhone} />
                        </IconBox>
                        <Typography variant="body2" color="#818181">888121121</Typography>
                    </Row>
                    <Row style={{alignItems: "center"}}>
                        <IconBox>
                            <Icon icon={faEnvelope} />
                        </IconBox>
                        <Typography variant="body2" color="#818181">sklep.support@gmail.com</Typography>
                    </Row>
                    <Row style={{alignItems: "center"}}>
                        <IconBox>
                            <Icon icon={faClock} />
                        </IconBox>
                        <Typography variant="body2" color="#818181">8:30-18:30</Typography>
                    </Row>
                </Column>
                <Column>
                <Typography variant="h4" color="#818181">Moje konto</Typography>
                    <Row style={{alignItems: "center"}}>
                        <LinkStyled to='/userpanel'>Ustawienia konta</LinkStyled>
                    </Row>
                    <Row style={{alignItems: "center"}}>
                        <LinkStyled to='/card'>Koszyk</LinkStyled>
                    </Row>

                    <Row>
                        <LogoButton
                            onClick={() => {
                                document.documentElement.scrollTop = 0;
                            }}
                        >
                            Sklep
                        </LogoButton>
                    </Row>
                </Column>
            </Content>
        </PageWrapper>
        <Row style={{width: '100%', justifyContent: 'center', padding: '16px 0', backgroundColor: "#e0e0e0"}}>
            <Typography variant="h6" color="#2d9ae8">2021 Sklep</Typography>
        </Row>
    </WrappFooter>
  );
};

export default Footer;
