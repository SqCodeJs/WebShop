import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { device } from "../utils/device";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;

  box-sizing: border-box;
  display: ${(props) => (props.show.length > 2 ? "Block" : "none")};
  position: absolute;
  left: 0;
  top: 44px;

  padding: 0 20px 20px 20px;

  font-size: 18px;
  color: #222;
  line-height: 24px;
  font-family: arial, sans-serif;
  z-index: 99;
  border: none;
  box-shadow: 0 4px 6px rgb(32 33 36 / 28%);
  border-radius: 0 0 10px 10px;
  background-color: rgba(255, 255, 255, 1);
  @media ${device.mobileS} {
    top: 36px;
    font-size: 12px;
  }
  @media ${device.tablet} {
    top: 37px;

    font-size: 14px;
  }
  @media ${device.laptop} {
    top: 38px;

    color: rgb(128, 128, 128);
    letter-spacing: 1px;
    font-size: 16px;
  }
  @media ${device.laptopL} {
    top: 44px;
  }
`;
const ListUlStyled = styled.ul`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 0;
  padding: 15px 0;
  border-top: 1px solid rgba(128, 128, 128, 0.8);

  list-style: none;
`;

const LiStyled = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  color: rgb(128, 128, 128);
  &:focus,
  &:hover {
    color: rgb(0, 0, 0);
  }

  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
const SampelBox = styled.div`
  width: 10%;
`;
const Img = styled.img`
  width: 100%;
`;
const Autocomplete = ({ input, setInput, suggestionList }) => {
  return (
    <Wrapper show={input}>
      <ListUlStyled>
        {suggestionList
          ? suggestionList.map((e) => (
              <LiStyled
                key={e.id}
                to={`/${e.cat}/${e.title}`}
                onClick={() => setInput("")}
              >
                {e.title}
                <SampelBox>
                  <Img src={e.image} />
                </SampelBox>
              </LiStyled>
            ))
          : ""}
      </ListUlStyled>
    </Wrapper>
  );
};

Autocomplete.propTypes = {
  data: PropTypes.array,
  city: PropTypes.string,
  showCity: PropTypes.func,
};
export default Autocomplete;
