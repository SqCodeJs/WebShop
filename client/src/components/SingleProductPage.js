import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
    Container,
    Title,
    Wrapp,
    Description,
} from "../utils/styledComponents";
import { device } from "../utils/device";
import { useParams } from "react-router-dom";
import { addToBasket } from "../state/actions/basketActions";
import ErrorPage from "./ErrorPage";

const WrappPage = styled(Wrapp)`
  width: 100%;
  background-color: rgb(255, 255, 255);
`;
const ImageContainer = styled(Container)`
  width: 90%;
  margin: 1%;

  @media ${device.laptop} {
    width: 30%;
  }
`;
const DescriptionContainer = styled(Container)`
  width: 90%;
  margin: 1%;
  flex-direction: column;

  align-items: center;
  background-color: rgb(255, 255, 255);
  @media ${device.laptop} {
    width: 60%;
  }
`;
const RowPage = styled(Wrapp)`
  width: 90%;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;
const Button = styled.button`
  width: 40%;
  margin: 10px;

  font-family: Open Sans, sans-serif;
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: 100;

  padding: 10px;
  border: 1.5px solid grey;

  cursor: pointer;
  &:hover {
    background-color: #2d9ae8;
    color: white;
  }
`;
const Input = styled.input`
  margin: 4%;
  padding: 10px 10px;
  line-height: 20px;
  width: 60px;
  border: 1.5px solid grey;
  border-radius: 2px;
  justify-self: center;
`;
const MessageDescription = styled(Description)`
  width: 80%;
  margin: 20px auto;
  font-size: 16px;
  font-weight: 400;
`;
const Img = styled.img`
  width: 100%;
  margin: 0 auto;
`;
const DescriptionPrice = styled(Description)`
  width: 50%;
  margin: 1% auto;
  text-align: center;
  font-family: sans-serif;
  font-size: 18px;
`;
const ItemDescription = styled(Description)`
  width: 90%;
  margin: 4% auto;
  text-align: center;
  font-weight: 400;
  font-size: 18px;
`;
const ItemTitle = styled(Title)`
  width: 90%;
  margin: 4% auto;
  text-align: center;
`;
const SingleProductPage = () => {
    const basket = useSelector((state) => state.basket);
    const DB = useSelector((state) => state.db.products);
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [message, setMessage] = useState(" ");
    const { slug } = useParams();
    console.log("s", slug);
    const product = DB.find((element) => element.title === slug);

    const addBasket = (product) => {
        if (basket.some((i) => i.id === product.id)) {
            //info do redux
            setMessage(
                "Produkt został juz dodany do koszyka. Aby zmienić ilość otwórz koszyk."
            );
            return;
        }

        dispatch(addToBasket({ ...product, quantity: quantity }));
        setMessage("Dodano produkt do koszyka.");
    };

    if (product === undefined) return <ErrorPage />;
    return (
        <>
            <WrappPage>
                <RowPage>
                    <ImageContainer>
                        <Img src={product.image} />
                    </ImageContainer>
                    <DescriptionContainer>
                        <ItemTitle>{product.title}</ItemTitle>

                        <ItemDescription>{product.description}</ItemDescription>

                        <DescriptionPrice>Cena: {product.price} zł</DescriptionPrice>
                        <Input
                            type="number"
                            value={quantity}
                            min="1"
                            max="100"
                            onChange={(e) => setQuantity(+e.target.value)}
                        />
                        <Button onClick={() => addBasket(product)}>dodaj do koszyka</Button>
                        <MessageDescription>{message}</MessageDescription>
                    </DescriptionContainer>
                </RowPage>
            </WrappPage>
        </>
    );
};
SingleProductPage.propTypes = {
    DB: PropTypes.array,
    setBasket: PropTypes.func,
};

export default SingleProductPage;
