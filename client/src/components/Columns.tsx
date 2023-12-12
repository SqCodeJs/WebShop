import React, { useEffect, useState } from 'react';
import { getRandomIndex, selectByRandomIndex } from '../helpers/functions';
import { useSelector } from 'react-redux';
import { device } from '../utils/device';
import styled from 'styled-components';
import ProductSampel from './ProductSampel';
import {
    Wrapp,
    GalleryTitle,
    Img,
    Position,
    PageWrapper,
} from '../utils/styledComponents';
import { RootState } from '../state/reducers/rootReducer';
import { Item } from '../../../shared/types/commonTypes';

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
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
    margin-bottom: 16px;

    @media ${device.tablet} {
        flex-direction: row;
    }
`;

const Aside = styled.aside`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #2d9ae8;
    background-color: #f3f3f3;
    border-radius: 30px;
    box-shadow: 0 0 1em rgb(220, 220, 220);

    @media ${device.tablet} {
        width: 25%;
    }
`;

const TopProducts = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    background-color: #f3f3f3;
    border-radius: 30px;
    @media ${device.tablet} {
        width: 72%;
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
    width: 100%;
    position: relative;
    display: flex;
    justify-content: stretch;
    transition: 0.2s;

    @media ${device.tablet} {
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

const NoProductsInfo = styled(GalleryTitle)`
    font-size: 14px;
`;

const Columns = () => {
    const products = useSelector((state: RootState) => state.products);
    const [randomTop, setRandomTop] = useState<Item[]>([]);
    const [randomAside, setRandomAside] = useState<Item[]>([]);

    useEffect(()=>{
        if(products.items.length) {
            const randomIndexesForAside = getRandomIndex(products.items.length, 4);
            const randomIndexesForTop = getRandomIndex(products.items.length, 12);
            
            setRandomAside(selectByRandomIndex(products.items, randomIndexesForAside));
            setRandomTop(selectByRandomIndex(products.items, randomIndexesForTop));
        }
    },[products]);

    return (
        <Container>
            <TopProducts>
                <GalleryTitle>Najcześciej Kupowanie</GalleryTitle>
                <Wrapper>
                    {randomTop.length ? (randomTop.map((product) => (
                        <Product key={product.id}>
                            <ProductSampel product={product} />
                        </Product>))) : (<NoProductsInfo>Brak Produktów</NoProductsInfo>)
                    }
                </Wrapper>
            </TopProducts>
            <Aside>
                <GalleryTitle>Oferty Dnia</GalleryTitle>
                {randomAside.length ? (randomAside.map((product) => (
                    <Sampel key={product.id}>
                        <ProductSampel product={product} />
                    </Sampel>)
                )):  (<NoProductsInfo>Brak Produktów</NoProductsInfo>)
                }
            </Aside>
        </Container>
    );
};

export default Columns;
