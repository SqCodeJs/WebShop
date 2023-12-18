import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getRandomIndex, selectByRandomIndex } from '../helpers/functions';
import ProductSampel from './ProductSampel';
import { RootState } from '../state/reducers/rootReducer';
import { GalleryTitle } from '../utils/styledComponents';
import { Item } from '../../../shared/types/commonTypes';

const Container = styled.div`
    width: 100%;
    margin: 0 auto 16px;
    padding: 16px;
    display: flex;
    background-color: #f3f3f3;
    justify-content: space-between;
    border-radius: 20px;
    box-shadow: 0 0 1em rgb(200 200 200);

`;

const ProductBox = styled.div`
    width: 30%;
`;

const NoProductsInfo = styled(GalleryTitle)`
    font-size: 14px;
`;

const Gallery = () => {
    const products = useSelector((state: RootState) => state.products);
    const [treeRandomProducts, setTreeRandomProducts] = useState<Item[]>([]);

    useEffect(()=>{
        if(products.items.length) {
            const random = getRandomIndex(products.items.length, 3);
            setTreeRandomProducts( selectByRandomIndex(products.items, random));
        }
    },[products]);
    
    return (
        <Container>
            {treeRandomProducts ?
                (treeRandomProducts.map((product) => (
                    <ProductBox key={product.id}>
                        <ProductSampel product={product} />
                    </ProductBox>
                ))) : <NoProductsInfo>Brak Produktów</NoProductsInfo>}
        </Container>
    );
};

export default Gallery;
