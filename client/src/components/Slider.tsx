import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { device } from "../utils/device";
import { Wrapp, Title, Description } from "../utils/styledComponents";
import { keyframes } from "styled-components";
import { Link } from "react-router-dom";
const ItemDescription = styled(Description)`
  width: 20%;
  position: absolute;
  right: ${(props) =>
        props.spot === 1 ? "30%" : props.spot === 2 ? "10%" : "10%"};
  top: ${(props) =>
        props.spot === 1 ? "5%" : props.spot === 2 ? "90%" : "5%"};
  font-size: 18px;
  font-weight: 400;
  line-height: 36px;
  color: rgba(45, 154, 232, 0.7);
  text-align: center;
  text-transform: uppercase;
  background-color: transparent;
  border-radius: 30px;
  @media ${device.mobileS} {
    font-size: 8px;
  }
  @media ${device.mobileM} {
    font-size: 9px;
  }
  @media ${device.mobileL} {
    font-size: 10px;
  }
  @media ${device.tablet} {
    font-size: 14px;
  }
  @media ${device.laptop} {
    font-size: 16px;
  }
  @media ${device.laptopL} {
    font-size: 18px;
  }
`;
const LinkButton = styled(Link)`
  width: 15%;

  position: absolute;
  left: 10%;
  top: 80%;
  text-align: center;
  font-family: Open Sans, sans-serif;
  letter-spacing: 1px;
  font-size: 18px;
  font-weight: 100;

  padding: 10px;

  border-radius: 20px;
  text-decoration: none;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(45, 154, 232, 0.5);
  cursor: pointer;
  &:hover {
    background-color: rgba(45, 154, 232, 3);
    color: rgba(250, 250, 250, 1);
  }
  @media ${device.mobileS} {
    font-size: 8px;
  }
  @media ${device.mobileM} {
    font-size: 9px;
  }
  @media ${device.mobileL} {
    font-size: 10px;
  }
  @media ${device.tablet} {
    font-size: 14px;
  }
  @media ${device.laptop} {
    font-size: 16px;
  }
  @media ${device.laptopL} {
    font-size: 18px;
  }
`;
const Container = styled.div`
  width: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  margin: 2% auto;
  overflow: hidden;
  border-radius: 30px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  @media ${device.tablet} {
    order: 1;
  }
  @media ${device.laptop} {
    width: 80%;
    margin: 2% 0 2% 2%;
  }
`;
const SlideWrapp = styled(Wrapp)`
  width: 100%;

  position: relative;
  /* z-index: -99; */
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  justify-content: flex-end;
  align-items: stretch;

  background: url(${(props) => (props.background ? props.background : "")});

  background-repeat: no-repeat;

  background-size: cover;

  background-position: 100% 80%;
  @media ${device.default} {
    order: 1;
    height: 300px;
    width: 100%;
    padding: 2%;
  }
  @media ${device.laptop} {
    width: 100%;
    height: auto;
  }
`;
const move = keyframes`
  from {
    left:0;
  }

  to {
    left:10%;
  }
`;
const move2 = keyframes`
  from {
    left:0%;
  
  }

  to {
    left:10%;
   
  }
`;

const SlideTitle = styled(Title)`
  font-size: 8px;
  width: 30%;
  text-align: center;
  position: absolute;
  left: 5%;
  top: 30%;
  overflow: hidden;
  background-color: rgba(45, 154, 232, 0.1);
  border-radius: 30px;
  color: rgba(100, 100, 100, 0.8);
  letter-spacing: 4px;
  padding: 2%;
  animation-name: ${(props) =>
        props.anime === 1 ? move : props.anime === 2 ? move2 : "none"};
  animation-iteration-count: 1;
  animation-duration: 12s;
  @media ${device.mobileS} {
    font-size: 8px;
  }
  @media ${device.mobileM} {
    font-size: 9px;
  }
  @media ${device.mobileL} {
    font-size: 10px;
  }
  @media ${device.tablet} {
    font-size: 14px;
  }
  @media ${device.laptop} {
    font-size: 16px;
  }
  @media ${device.laptopL} {
    font-size: 18px;
  }
`;
const ButtonsSwitch = styled.div`
  width: 100%;
  height: 18%;
  display: flex;

  background-color: transparent;
  justify-content: center;
  align-content: center;
`;
const Board = styled.div`
  position: relative;
  width: 100%;
  height: 90%;
  background-color: transparent;
`;
const Button = styled.button`
  margin: 1%;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;

  color: white;
  background-color: ${(props) =>
        props.sliderNum === props.slide
            ? "rgb(45,154,232,0.6)"
            : "rgb(112, 128, 144, 0.3)"};
  &:hover {
    background-color: ${(props) =>
        props.sliderNum === props.slide
            ? "rgb(45,154,232)"
            : "rgb(112, 128, 144)"};
    cursor: pointer;
  }
`;

const Slider = () => {
    const webSlider = [
        {
            id: 1,
            img: "https://cdn.shopify.com/s/files/1/0284/2030/9067/files/h1_s3_2048x.jpg?v=1592293140",
            title: "EcoBubble",
            description: "3 Lata gwarancji!",
        },
        {
            id: 2,
            img: "https://cdn.shopify.com/s/files/1/0284/2030/9067/files/h1_s1_2048x.jpg?v=1592293056",
            title: "Smart Watch Series 2",
            description: "Juz dostepny!",
        },
        {
            id: 3,
            img: "https://cdn.shopify.com/s/files/1/0284/2030/9067/files/h1_s2_2048x.jpg?v=1592293119",
            title: "iMac 2019",
            description: "Sprawdz!",
        },
    ];
    // eslint-disable-next-line no-unused-vars
    const [wSlider, setWSlider] = useState(webSlider);
    const [slide, setSlide] = useState(0);
    const [indexInterval, setIndeInterval] = useState(0);
    const changeSlide = (slideNumber) => {
        setSlide(slideNumber);
    };
    const slideSwitchInterval = () => {
        if (slide > wSlider.length) {
            return setSlide(0);
        }
        setSlide((prev) => (prev + 1) % wSlider.length);
    };
    useEffect(() => {
        const timeIndex = setInterval(slideSwitchInterval, 8000);
        setIndeInterval(timeIndex);
        return () => {
            clearInterval(timeIndex);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const slider = wSlider
        .map((item) => (
            <SlideWrapp background={item.img} key={item.id}>
                <Board>
                    <SlideTitle anime={item.id}>{item.title}</SlideTitle>
                    <ItemDescription spot={item.id}> {item.description}</ItemDescription>
                    <LinkButton to="/">Kup teraz</LinkButton>
                </Board>

                <ButtonsSwitch>
                    <Button
                        onClick={() => {
                            clearInterval(indexInterval);
                            changeSlide(0);

                            const index = setInterval(slideSwitchInterval, 8000);
                            setIndeInterval(index);
                        }}
                        sliderNum={item.id}
                        slide={1}
                    >
                        1
                    </Button>
                    <Button
                        onClick={() => {
                            clearInterval(indexInterval);
                            changeSlide(1);

                            const index = setInterval(slideSwitchInterval, 8000);
                            setIndeInterval(index);
                        }}
                        sliderNum={item.id}
                        slide={2}
                    >
                        2
                    </Button>
                    <Button
                        onClick={() => {
                            clearInterval(indexInterval);
                            changeSlide(2);

                            const index = setInterval(slideSwitchInterval, 8000);
                            setIndeInterval(index);
                        }}
                        sliderNum={item.id}
                        slide={3}
                    >
                        3
                    </Button>
                </ButtonsSwitch>
            </SlideWrapp>
        ))
        .filter((e, i) => i === slide);
    return <Container>{slider}</Container>;
};

Slider.propTypes = {
    wSlider: PropTypes.array,
    slide: PropTypes.number,
    changeSlide: PropTypes.func,
    indexInterval: PropTypes.number,
    setIndeInterval: PropTypes.func,
    slideSwitchInterval: PropTypes.func,
};
export default Slider;
