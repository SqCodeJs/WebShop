import React from "react";
import styled from "styled-components";

const StrapStyled = styled.div`
  width: 100%;
  height: 5px;
  background-image: linear-gradient(to right, #21a2fd, #be38ff 50%, #21a2fd);
  background-repeat: no-repeat;
`;
const Strap = () => {
  return <StrapStyled></StrapStyled>;
};

export default Strap;
