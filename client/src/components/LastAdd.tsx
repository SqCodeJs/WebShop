import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { device } from '../utils/device';
import { Wrapp, GalleryTitle, PageWrapper } from '../utils/styledComponents';
import { getRandomIndex, selectByRandomIndex } from '../helpers/functions';
import ProductSampel from './ProductSampel';
import { RootState } from '../state/reducers/rootReducer';
import { Item } from '../../../shared/types/commonTypes';

const Container = styled.div`
    width: 100%;
    margin: 16px auto;
    flex-direction: column;
    justify-content: center;
    border-radius: 30px;
    box-shadow: 0 0 1em rgb(220, 220, 220);
    background-color: #f3f3f3;
`;

const Wrapper = styled(Wrapp)`
    width: 100%;
    flex-wrap: wrap;
`;

const Sample = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    overflow: hidden;
    border-radius: 30px;
    box-shadow: 0 0 1em rgb(200, 200, 200);
    background-color: rgb(192, 192, 192, 0.2);
    transition: 0.2s;

    @media ${device.mobileS} {
        width: 94%;
        margin: 3%;
    }
    @media ${device.tablet} {
        width: 46%;
        margin: 1%;
    }
    @media ${device.laptop} {
        margin: 1%;
        width: 30%;
    }
    @media ${device.laptopL} {
        margin: 1%;
        width: 22%;
    }
    @media ${device.desktopS} {
        margin: 1%;
        width: 18%;
    }
`;

const NoProductsInfo = styled(GalleryTitle)`
    font-size: 14px;
`;

const LastAdd = () => {
    const products = useSelector((state: RootState) => state.products);
    const [randomProducts, setRandomProducts] = useState<Item[]>([]);

    useEffect(()=>{
        if(products.items.length) {
            const randomIndexes = getRandomIndex(products.items.length, 12);
            setRandomProducts(selectByRandomIndex(products.items, randomIndexes));
        }
    },[products])

    const renderList = () =>
        randomProducts.length ? (randomProducts.map((product) => (
            <Sample key={product.id}>
                <ProductSampel product={product} />
            </Sample>
        ))) : <NoProductsInfo>Brak Produktów</NoProductsInfo>;

    return (
        <PageWrapper>
            <Container>
                <GalleryTitle style={{ textAlign: 'center', paddingTop: '16px' }}>
                    Ostatnio dodane
                </GalleryTitle>
                <Wrapper> {renderList()}</Wrapper>
            </Container>
        </PageWrapper>
    );
};

export default LastAdd;
