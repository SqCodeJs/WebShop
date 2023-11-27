import React, { useEffect, useState } from "react";
import { getRanomIndex, selectByRandomIndex } from "../helpers/functions";
import { useSelector } from "react-redux";
import { device } from "../utils/device";
import styled from "styled-components";
import ProductSampel from "./ProductSampel";
import { Wrapp, GalleryTitle, Img, Position } from "../utils/styledComponents";
import { RootState } from "../state/reducers/rootReducer";
import { Item } from "../../../shared/types/commonTypes";

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

const Container = styled.div`
    width: 100%;
    display: flex;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;

    @media ${device.default} {
        padding: 10px;
    }

    @media ${device.tablet} {
        flex-direction: row;
    }

    @media ${device.laptop} {
        padding: 0;
    }

    @media ${device.laptopL} {
        width: 96%;
    }
`;

const Aside = styled.aside`
    width: 100%;
    padding-top: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #2d9ae8;
    background-color: #f3f3f3;
    border-radius: 30px;
    box-shadow: 0 0 1em rgb(220, 220, 220);

    @media ${device.tablet} {
        width: 30%;
    }
`;

const TopProducts = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    background-color: #f3f3f3;
    border-radius: 30px;

    @media ${device.tablet} {
        width: 69%;
        margin-right: 1%;
        padding: 1%;
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
        width: 95%;
        margin: 5%;
    }

    @media ${device.tablet} {
        width: 48%;
        margin: 1%;
    }

    @media ${device.laptop} {
        width: 31%;
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

    const randomIndexesForAside = getRanomIndex(products.items.length, 4);
    const randomAside = selectByRandomIndex(products.items, randomIndexesForAside);
    const randomIndexesForTop = getRanomIndex(products.items.length, 12);
    const randomTop = selectByRandomIndex(products, randomIndexesForTop);
    const [aside, setAside] = useState<Item[]>([]);
    const [top, setTop] = useState<Item[]>([]);
    useEffect(() => {
        setAside(randomAside);
        setTop(randomTop);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const renderAside = () => {
        return aside.map((product) => (
            <Sampel key={product.id}>
                <ProductSampel product={product} />
            </Sampel>
        ));
    };

    const renderTop = () => {
        return top.map((product) => (
            <Product key={product.id}>
                <ProductSampel product={product} />
            </Product>
        ));
    };

    return (
        <>
            <Container>
                <TopProducts>
                    <GalleryTitle>Najcześciej Kupowanie</GalleryTitle>
                    <Wrapper>{renderTop()}</Wrapper>
                </TopProducts>

                <Aside>
                    <GalleryTitle>Oferty Dnia</GalleryTitle>
                    {renderAside()}
                </Aside>
            </Container>
        </>
    );
};

export default Columns;
