import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Wrapp } from "../utils/styledComponents";

import ProductSampel from "./ProductSampel";

const WrappBoard = styled(Wrapp)`
  width: 75%;
  justify-content: center;
  align-items: center;
  /* justify-content: flex-start;
  align-items: flex-start; */
  flex-wrap: wrap;
`;
const Item = styled.div`
  width: 30%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Board = ({ filterProducts, price }) => {
  const list = filterProducts
    .filter((product) => product.price > price)

    .map((product) => (
      <Item key={product.id}>
        <ProductSampel product={product} />
      </Item>
    ));

  return <WrappBoard>{list}</WrappBoard>;
};
Board.propTypes = {
  filterProducts: PropTypes.array,
  price: PropTypes.number,
};

export default Board;
