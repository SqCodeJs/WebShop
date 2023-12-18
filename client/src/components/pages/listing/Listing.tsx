import React, { useEffect, useState } from 'react';
import { PageWrapper } from '../../../utils/styledComponents';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Board from './Board';
import FilterSide from './FilterSide';
import { Item } from '../../../../../shared/types/commonTypes';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/reducers/rootReducer';
import { device } from '../../../utils/device';

const ListingWrapper = styled(PageWrapper)`
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-direction: column;
    padding-bottom: 40px;
    
    @media ${device.tablet} {
        flex-direction: row;
    }

`;

const Listing = () => {
    const products = useSelector((state: RootState) => state.products);
    const { path } = useParams();
    const productsList = products.items.filter(
        (element: Item) => element.category === path,
    );
    const [filterProducts, setFilterProducts] = useState(productsList);
    const [price, setPrice] = useState<number[]>([0, 10000]);
    const handlePriceChange = (event: Event, newValue: number | number[]) => {
        setPrice(newValue as number[]);
    };

    useEffect(() => {
        setFilterProducts(productsList);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path]);

    return (
        <ListingWrapper>
            <FilterSide
                DB={products.items}
                productsList={productsList}
                setFilterProducts={setFilterProducts}
                price={price}
                handlePriceChange={handlePriceChange}
            />
            <Board filterProducts={filterProducts} price={price} />
        </ListingWrapper>
    );
};

export default Listing;
