import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { device } from "../utils/device";
import { Wrapp, GalleryTitle } from "../utils/styledComponents";
import { getRandomIndex, selectByRandomIndex } from "../helpers/functions";
import ProductSampel from "./ProductSampel";
import { RootState } from "../state/reducers/rootReducer";

const Container = styled(Wrapp)`
  margin: 30px auto;
  flex-direction: column;
  border-radius: 30px;
  box-shadow: 0 0 1em rgb(220, 220, 220);
  background-color: #f3f3f3;
  @media ${device.default} {
    padding: 10px;
  }
  @media ${device.tablet} {
    padding: 0;
  }
  @media ${device.laptopL} {
    width: 95%;
  }
`;

const Wrapper = styled(Wrapp)`
  width: 100%;
  padding: 1%;
  flex-wrap: wrap;
`;

const Sample = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  border-radius: 30px;
  box-shadow: 0 0 1em rgb(200, 200, 200);
  background-color: rgb(192, 192, 192, 0.2);
  transition: 0.2s;

  @media ${device.mobileS} {
    width: 94%;
    margin: 3%;
  }
  @media ${device.tablet} {
    width: 46%;
    margin: 1%;
  }
  @media ${device.laptop} {
    margin: 1%;
    width: 30%;
  }
  @media ${device.laptopL} {
    margin: 1%;
    width: 22%;
  }
  @media ${device.desktopS} {
    margin: 1%;
    width: 18%;
  }
`;

const LastAdd = () => {
    const products = useSelector((state: RootState) => state.products);

    const randomIndexes = getRandomIndex(products.items.length, 12);
    
    const randomProducts = selectByRandomIndex(products.items, randomIndexes);

    const renderList = () =>
        randomProducts.map((product) => (
            <Sample key={product.id}>
                <ProductSampel product={product} />
            </Sample>
        ));
    return (
        <Container>
            <GalleryTitle>Ostatnio dodane</GalleryTitle>
            <Wrapper> {renderList()}</Wrapper>
        </Container>
    );
};

export default LastAdd;
