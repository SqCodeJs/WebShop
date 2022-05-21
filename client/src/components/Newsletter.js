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

const Input = styled.input`
  width: 300px;
  height: 46px;
  margin: 0 20px;
  border-radius: 30px;
  border: none;
`;
const Button = styled.button`
  position: relative;
  left: -105px;
  line-height: 36px;
  border: none;
  border-radius: 30px;
  font-size: 12px;
  padding: 2px 6px;
  color: rgba(220, 220, 220, 1);
  background-color: #2c9afd;
  text-transform: uppercase;
`;
const Newsletter = () => {
  return (
    <Contenier>
      {/* <Title>Sing up to newsletter</Title> */}
      <Input type="text" />
      <Button>Subscribe</Button>
    </Contenier>
  );
};

export default Newsletter;
