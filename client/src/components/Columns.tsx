import React, { useEffect, useState } from 'react';
import { getRandomIndex, selectByRandomIndex } from '../helpers/functions';
import { useSelector } from 'react-redux';
import { device } from '../utils/device';
import styled from 'styled-components';
import ProductSampel from './ProductSampel';
import {
    GalleryTitle,
    Img,
    Position,
    PageWrapper,
} from '../utils/styledComponents';
import { RootState } from '../state/reducers/rootReducer';
import { Item } from '../../../shared/types/commonTypes';

const Container = styled(PageWrapper)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
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
    margin-top: 16px;
    border: 2px solid #2d9ae8;
    background-color: #f3f3f3;
    border-radius: 30px;
    box-shadow: 0 0 1em rgb(220, 220, 220);

    @media ${device.tablet} {
        width: 30%;
        margin: 0;
    }
`;

const TopProducts = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    background-color: #f3f3f3;
    border-radius: 20px;
    
    @media ${device.tablet} {
        width: 68%;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 3fr)); 
    gap: 16px;
    padding: 16px; 
`;

const AsideWrapper = styled(Wrapper)`
    grid-template-columns: repeat(auto-fill, minmax(160px, 3fr));

    @media ${device.tablet} {
        grid-template-columns: minmax(200px, 3fr);
    }
`;

const Product = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: stretch;
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
                <AsideWrapper>
                {randomAside.length ? (randomAside.map((product) => (
                    <Product key={product.id}>
                        <ProductSampel product={product} />
                    </Product>)
                )):  (<NoProductsInfo>Brak Produktów</NoProductsInfo>)
                }
                </AsideWrapper>
            </Aside>
        </Container>
    );
};

export default Columns;
