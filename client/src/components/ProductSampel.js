import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Position } from "../utils/styledComponents";
import { device } from "../utils/device";
import { hamburgerActions } from "../actions/flagsActions";
import { useDispatch } from "react-redux";
const SampelImg = styled.img`
  width: 60%;
`;
const Sampel = styled.div`
  width: 100%;
  padding: 2%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 5% rgb(200 200 200);
  border-radius: 10px;
  transition: 0.2s;
  z-index: 0;
  &:hover {
    ${Position} {
      display: block;
    }
    ${SampelImg} {
      filter: blur(4px);
    }
  }
`;

const ProductLink = styled(Link)`
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
`;
const ProductTitle = styled.p`
  width: 100%;
  font-size: 12px;
  text-align: center;
  padding: 1%;

  font-family: sans-serif;
  font-weight: 100;
  background-color: rgb(255, 255, 255);
  color: rgba(0, 0, 0, 0.8);
  @media ${device.mobileS} {
    font-size: 12px;
  }
  @media ${device.mobileM} {
    font-size: 13px;
  }
  @media ${device.mobileL} {
    font-size: 14px;
  }
  @media ${device.tablet} {
    font-size: 15px;
  }
  @media ${device.laptop} {
    font-size: 16px;
  }
  @media ${device.laptopL} {
    font-size: 17px;
  }
`;

const ProductSampel = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <Sampel>
      <Wrapper>
        <SampelImg src={product.image} alt={product.title} />
        <ProductTitle>{product.title}</ProductTitle>
        <ProductLink
          to={`/${product.cat}/${product.title}`}
          onClick={() => dispatch(hamburgerActions.toggle(false))}
        >
          <Position>Kup Teraz</Position>
        </ProductLink>
      </Wrapper>
    </Sampel>
  );
};

ProductSampel.propTypes = {
  product: PropTypes.object,
};
export default ProductSampel;
