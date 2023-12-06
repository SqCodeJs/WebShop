import React, { useMemo, useEffect, useState } from "react";
import { getRandomIndex, selectByRandomIndex } from "../helpers/functions";
import { useSelector } from "react-redux";
import { device } from "../utils/device";
import styled from "styled-components";
import ProductSampel from "./ProductSampel";
import { Wrapp, GalleryTitle, Img, Position, PageWrapper } from "../utils/styledComponents";
import { RootState } from "../state/reducers/rootReducer";
import { Item } from "../../../shared/types/commonTypes";
import useTheme from "@mui/material/styles/useTheme";
import { Theme } from "@mui/material";

const Sampel = styled.div`
    width: 75%;
    margin: 10% auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    box-shadow: 0 0 1em rgb(200 200 200);
    transition: 0.2s;

    &:hover {
        ${Position} {
            display: block;
        }

        ${Img} {
            filter: blur(4px);
        }
    }
`;

const Container = styled(PageWrapper)`
border: 1px solid red;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media ${device.tablet} {
        flex-direction: row;
    }
`;

const Aside = styled.aside<{ theme: Theme; }>`
    width: 100%;
    padding-top: 2%;
    //display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #2d9ae8;
    background-color: #f3f3f3;
    border-radius: 30px;
    box-shadow: 0 0 1em rgb(220, 220, 220);

    @media ${device.tablet}  {
        width: 30%;
    }
    

`;

const TopProducts = styled.div<{theme: Theme}>`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    background-color: #f3f3f3;
    border-radius: 30px;
    @media ${device.tablet} {
        width: 65%;
    }

`;

const Wrapper = styled(Wrapp)`
    width: 100%;
    justify-content: center;
    flex: 1;
    flex-wrap: wrap;
    background-color: transparent;
`;

const Product = styled.div`
    position: relative;
    display: flex;
    justify-content: stretch;
    transition: 0.2s;

    @media ${device.mobileS} {
        width: 100%;
    }

    @media ${device.tablet} {
        width: 50%;
    }

    @media ${device.laptop} {
        width: 30%;
        margin: 1%;
    }
  
    &:hover {
        ${Position} {
            display: block;
        }

        ${Img} {
            filter: blur(4px);
        }
    }
`;

const Columns = () => {
    const products = useSelector((state: RootState) => state.products);
    const theme = useTheme();
    const randomIndexesForAside = getRandomIndex(products.items.length, 4);
    const randomIndexesForTop = getRandomIndex(products.items.length, 12);
    console.log(randomIndexesForAside, randomIndexesForTop)
    const randomAside = useMemo(() => selectByRandomIndex(products.items, randomIndexesForAside), [products.items, randomIndexesForAside]);
    const randomTop = useMemo(() => selectByRandomIndex(products.items, randomIndexesForTop), [products.items, randomIndexesForTop]);

    console.log('render',);
    return (
        <Container>
            <TopProducts theme={theme}>
                <GalleryTitle>Najcześciej Kupowanie</GalleryTitle>
                <Wrapper>{randomTop.map((product) => (
                    <Product key={product.id}>
                        <ProductSampel product={product} />
                    </Product>
                ))
                }</Wrapper>
            </TopProducts>

            <Aside theme={theme}>
                <GalleryTitle>Oferty Dnia</GalleryTitle>
                {randomAside.map((product) => (
                    <Sampel key={product.id}>
                        <ProductSampel product={product} />
                    </Sampel>
                ))
                }
            </Aside>
        </Container>
    );
};

export default Columns;
