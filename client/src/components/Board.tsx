import React from "react";
import styled from "styled-components";
import { Wrapp } from "../utils/styledComponents";
import ProductSampel from "./ProductSampel";
import { Item } from "../../../shared/types/commonTypes";

const WrappBoard = styled(Wrapp)`
    width: 75%;
    justify-content: center;
    align-items: center;
    align-items: flex-start;
    flex-wrap: wrap;
`;

const Product = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
interface Props {
    filterProducts: Item[];
    price: number;
}

const Board: React.FC<Props> = ({ filterProducts, price }) => {
    const list = filterProducts
        .filter((product) => product.price > price)
        .map((product) => (
            <Product key={product.id}>
                <ProductSampel product={product} />
            </Product>
        ));

    return <WrappBoard>{list}</WrappBoard>;
};

export default Board;
