import React from "react";
import styled from "styled-components";
import { Wrapp } from "../utils/styledComponents";
import { device } from "../utils/device";

const BasketWrapp = styled(Wrapp)`
  width: 100%;
  padding: 1%;

  flex-direction: column;
  justify-content: start;
`;
const Title = styled.h2`
  font-family: Open Sans, sans-serif;
  font-weight: 100;
  font-size: 32px;
  @media ${device.default} {
    font-size: 16px;
    margin: 1%;
  }
  @media ${device.mobileL} {
    font-size: 18px;
  }
  @media ${device.laptop} {
  }
`;
const Description = styled(Title)`
  margin: 20px;
  width: 70%;

  text-align: center;
  letter-spacing: 1px;
  color: #767676;
  line-height: 16px;
  @media ${device.default} {
    font-size: 12px;
  }
  @media ${device.mobileM} {
    font-size: 14px;
  }
  @media ${device.laptop} {
  }
`;
const EmptyBasket = () => {
  return (
    <BasketWrapp>
      <Title>Koszyk jest pusty</Title>
      <Description>
        Dodaj do koszyka przedmioty i kup je szybko i wygodnie. Przez koszyk
        możesz kupić za jednym razem do 50 przedmiotów od różnych sprzedawców.
      </Description>
    </BasketWrapp>
  );
};

export default EmptyBasket;
