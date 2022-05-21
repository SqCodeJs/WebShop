import React from "react";
import styled from "styled-components";
const Contenier = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #21a2fd, #7967fe 50%, #21a2fd);
  background-repeat: no-repeat;
`;
const BigStrap = () => {
  return <Contenier></Contenier>;
};

export default BigStrap;
