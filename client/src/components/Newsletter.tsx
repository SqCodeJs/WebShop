import React from "react";
import styled from "styled-components";
import { Title } from "../utils/styledComponents";

const Contenier = styled.div`
    width: 100%;
    background-image: linear-gradient(to right, #21a2fd, #7967fe 50%, #21a2fd);
    background-repeat: no-repeat;
`;

const NewsLetterContent = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1280px;
    padding: 12px 16px;
    margin: 0 auto;
    display: flex;
    justify-content: end;
`;

const Input = styled.input`
    width: 300px;
    height: 46px;
    padding: 10px 134px 10px 16px;
    border-radius: 30px;
    border: none;

    &:focus {
    outline: none;
    border: 2px solid transparent;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
`;

const Button = styled.button`
    position: absolute;
    right: 2px;
    top: 1px;
    bottom: 4px;
    border: none;
    border-radius: 30px;
    font-size: 12px;
    padding: 4px 24px;
    margin-left: 20px;
    color: rgba(220, 220, 220, 1);
    background-color: #2c9afd;
    text-transform: uppercase;
`;

const InputWrapper = styled.div`
    position: relative;
    margin-left: 20px;
`;

const Newsletter = () => {
  return (
    <Contenier>
        <NewsLetterContent>
            <Title style={{color: 'white'}}>Sing up to newsletter</Title>
            <InputWrapper>
                <Input type="text" />
                <Button>Subscribe</Button>
            </InputWrapper>
        </NewsLetterContent>
    </Contenier>
  );
};

export default Newsletter;
