import React from "react";
import { Wrapp, Title, Description } from "../utils/styledComponents";
import styled from "styled-components";
import EmptyBasket from "./EmptyBasket";
import { device } from "../utils/device";
import { Item } from "../../../shared/types/commonTypes";
import Icon from "./atoms/Icon";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const BasketWrapp = styled(Wrapp)`
  position: absolute;
  right: 0;
  top: 42px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  z-index: 99;
  border: 1px solid #767676;
  border-radius: 30px;
  @media ${device.default} {
    width: 240px;
  }
  @media ${device.mobileM} {
    width: 300px;
  }
  @media ${device.tablet} {
    width: 400px;
    top: 48px;
  }
  @media ${device.laptop} {
    width: 600px;
    top: 68px;
  }
`;
const Good = styled.div`
  width: 98%;
  overflow: hidden;

  display: flex;
  flex-grow: 0;
  justify-content: center;
  align-items: center;
`;
const WrappCard = styled(Wrapp)`
  width: 100%;
  margin: 1%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Img = styled.img`
  width: 15%;
  height: 12%;
  margin: 1%;
  padding: 1%;
`;
const GoodTitle = styled(Title)`
  width: 30%;
  font-size: 16px;
`;
const Button = styled.button`
  width: 20%;
  margin: 1%;

  font-family: Open Sans, sans-serif;
  letter-spacing: 1px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 100;

  border: none;

  cursor: pointer;
`;
const DescriptionItem = styled(Description)`
  width: 15%;
  margin: 1%;
`;
const IconBox = styled.div`
  width: 20%;
  padding: 1%;
`;

interface Props {
    basket: Item[];
    setIsHover: React.Dispatch<React.SetStateAction<boolean>>;
}

const BasketCard: React.FC<Props> = ({ basket, setIsHover }) => {
    //todo redux- manage basket cart adding. removing, add type for basket items (quanititny)
    const cardItems = basket.map((item) => (
        <Good key={item.id}>
            <Img src={item.image} />
            <GoodTitle>{item.title}</GoodTitle>
            <DescriptionItem>cena jednostkowa: {item.price} zł</DescriptionItem>
            {/* <DescriptionItem>ilość {item.quantity}</DescriptionItem>
            <IconBox>
                <Button onClick={() => removeItem(item.id)}><Icon icon={faTrashAlt} /></Button>
            </IconBox> */}
        </Good>
    ));
    return (
        <BasketWrapp
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <WrappCard>{basket.length === 0 ? <EmptyBasket /> : cardItems}</WrappCard>
        </BasketWrapp>
    );
};

export default BasketCard;
