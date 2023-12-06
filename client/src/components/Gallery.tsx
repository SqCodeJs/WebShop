import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { device } from '../utils/device';
import { getRandomIndex, selectByRandomIndex } from '../helpers/functions';
import ProductSampel from './ProductSampel';
import { RootState } from '../state/reducers/rootReducer';
import { Item } from '../../../shared/types/commonTypes';

const Container = styled.div`
    margin: 0 auto;
    display: flex;
    background-color: #f3f3f3;
    align-items: center;
    flex-direction: column;
    border-radius: 30px;
    box-shadow: 0 0 1em rgb(200 200 200);

    @media ${device.mobileS} {
        width: 94%;
    }

    @media ${device.tablet} {
        width: 100%;
        flex-direction: row;
    }

    @media ${device.laptopL} {
        width: 95%;
    }
`;

const ProductBox = styled.div`
    @media ${device.mobileS} {
        width: 80%;
        margin: 2%;
    }

    @media ${device.tablet} {
        width: 30%;
    }
`;

const Gallery = () => {
    const products = useSelector((state: RootState) => state.products);
    const random = getRandomIndex(products.items.length, 3);
    const treeRandomProducts = selectByRandomIndex(products.items, random);

    return (
        <Container>
            {treeRandomProducts &&
                treeRandomProducts.map((product) => (
                    <ProductBox key={product.id}>
                        <ProductSampel product={product} />
                    </ProductBox>
                ))}
        </Container>
    );
};

export default Gallery;
