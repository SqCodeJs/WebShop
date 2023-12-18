import React from 'react';
import styled from 'styled-components';
import ProductSampel from '../../ProductSampel';
import { Item } from '../../../../../shared/types/commonTypes';
import { GalleryTitle } from '../../../utils/styledComponents';
import { device } from '../../../utils/device';

const WrappBoard = styled.section`
    width: 100%;
    background-color: #f3f3f3;
    border-radius: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 3fr));
    gap: 16px;
    padding: 16px;
    @media ${device.tablet} {
        width: 68%;
    }
`;

const Product = styled.div`
    width: 100%;
`;

interface Props {
    filterProducts: Item[];
    price: number[];
}

const NoProductsInfo = styled(GalleryTitle)`
    font-size: 14px;
    padding: 16px;
`;

const Board: React.FC<Props> = ({ filterProducts, price }) => {
    const list = filterProducts
        .filter(
            (product) => product.price > price[0] && product.price < price[1],
        )
        .map((product) => (
            <Product key={product.id}>
                <ProductSampel product={product} />
            </Product>
        ));
    console.log('l', list);
    return (
        <WrappBoard>
            {list.length ? (
                list
            ) : (
                <NoProductsInfo>Brak Produktów</NoProductsInfo>
            )}
        </WrappBoard>
    );
};

export default Board;
