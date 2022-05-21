import React from "react";
import styled from "styled-components";
import { ColumnWrapp, Wrapp, Title } from "./../../../utils/styledComponents";

import Strap from "../Straps/Strap";
import Navigation from "../Navigation/components/Navigation";
import renderFooterNavigation from "../Navigation/render/renderFooterNavigation";
import { call, mail, watch } from "./../../../utils/icon";
import { device } from "../../../utils/device";

const WrappFooter = styled(Wrapp)`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: stretch;

  background-color: #f3f3f3;
`;
const Row = styled.div`
  padding: 1%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  flex: 1;
`;
const Privacy = styled(Title)`
  width: 100%;
  font-size: 10px;
  line-height: 28px;
  text-align: center;
  background-color: rgb(230, 230, 230);
  @media ${device.default} {
    font-size: 14px;
    line-height: 28px;
  }

  @media ${device.laptop} {
    font-size: 18px;
    line-height: 32px;
  }
  @media ${device.laptopL} {
    font-size: 22px;
    line-height: 38px;
  }
`;
const SectionTitle = styled(Title)`
  // line-height: 46px;
  @media ${device.default} {
    font-size: 10px;

    align-items: center;
  }
  @media ${device.tablet} {
    font-size: 18px;
  }
  @media ${device.laptop} {
    font-size: 28px;
  }
`;
const ContactTitile = styled(SectionTitle)`
  @media ${device.mobileS} {
    font-size: 8px;
  }
  @media ${device.mobileM} {
    font-size: 9px;
  }
  @media ${device.mobileL} {
    font-size: 10px;
  }
  @media ${device.tablet} {
    font-size: 14px;
  }
  @media ${device.laptop} {
    font-size: 16px;
  }
  @media ${device.laptopL} {
    font-size: 18px;
  }
`;
const LogoButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  background-color: #f3f3f3;
  color: #2d9ae8;
  border: none;
  text-transform: uppercase;
  cursor: pointer;

  @media ${device.laptop} {
    font-size: 20px;
  }
  @media ${device.laptopL} {
    font-size: 24px;
  }
`;
const IconBox = styled.div`
  width: 10%;
`;
const Columns = styled(ColumnWrapp)`
  justify-content: stretch;
  padding: 1%;
  width: 30%;
`;

const Footer = () => {
  return (
    <WrappFooter>
      <Strap />
      <Row>
        <Columns>
          <SectionTitle>Navigacja</SectionTitle>
          <Navigation render={renderFooterNavigation} />
        </Columns>
        <Columns>
          <SectionTitle>kontakt</SectionTitle>

          <Columns>
            <Row>
              <IconBox> {call} </IconBox>
              <ContactTitile>888121121</ContactTitile>
            </Row>
            <Row>
              <IconBox> {mail}</IconBox>
              <ContactTitile>sklep.support@gmail.com</ContactTitile>
            </Row>
            <Row>
              <IconBox> {watch}</IconBox>
              <ContactTitile>8:30-18:30</ContactTitile>
            </Row>
          </Columns>
        </Columns>
        <Columns>
          <Row>
            <LogoButton
              onClick={() => {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
              }}
            >
              Sklep
            </LogoButton>
          </Row>
        </Columns>
      </Row>
      <Row>
        <Privacy>2021 Sklep</Privacy>
      </Row>
    </WrappFooter>
  );
};

export default Footer;
