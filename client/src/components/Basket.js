import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Strap from "./Strap";
import { device } from "../utils/device";
const Basket = () => {
  return (
    <Wrapp>
      <Strap />
      {/* <Title>Koszyk</Title> */}
      <Description>
        Dodaj do koszyka przedmioty i kup je szybko i wygodnie. Przez koszyk
        możesz kupić za jednym razem do 50 przedmiotów od różnych sprzedawców.
      </Description>
    </Wrapp>
  );
};
const Wrapp = styled.div`
  width: 300px;
  height: 200px;

  position: absolute;

  left: 0;
  top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  flex-grow: 1;
`;
const Title = styled.h2`
  /* margin: 10px auto; */
  font-family: Open Sans, sans-serif;
  /* font-family: Arial, Helvetica, sans-serif; */
  font-weight: 100;
  /* font-size: 32px; */
  @media ${device.default} {
    font-size: 8px;
  }
`;
const Description = styled(Title)`
  width: 80%;
  /* font-size: 14px; */
  letter-spacing: 1px;
  color: #767676;
  line-height: 16px;
  @media ${device.default} {
    font-size: 8px;
  }
`;
export default Basket;
