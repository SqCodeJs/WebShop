import React, { useEffect, useState } from "react";
import { Wrapp, Row } from "../utils/styledComponents";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Board from "./pages/listing/Board";
import FilterSide from "./pages/listing/FilterSide";
import { Item } from "../../../shared/types/commonTypes";
import { useSelector } from "react-redux";
import { RootState } from "../state/reducers/rootReducer";

const WrappLibrary = styled(Wrapp)`
  width: 100%;
`;
const HeaderLibrary = styled.div`
  width: 100%;
`;

interface Props {
    DB: Item[];
}

const ProductsLibrary: React.FC<Props> = ({ DB }) => {
    const products = useSelector((state: RootState) => state.products);
    const { path } = useParams();
    const productsList = products.items.filter((element) => element.category === path);
    const [filterProducts, setFilterProducts] = useState(productsList);
    const [price, setPrice] = useState(50);

    useEffect(() => {
        setFilterProducts(productsList);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path]);

    return (
        <WrappLibrary>
            <HeaderLibrary>
                <Row>
                    <FilterSide
                        DB={DB}
                        productsList={productsList}
                        setFilterProducts={setFilterProducts}
                        price={price}
                        setPrice={setPrice}
                    />
                    <Board filterProducts={filterProducts} price={price} />
                </Row>
            </HeaderLibrary>
        </WrappLibrary>
    );
};

export default ProductsLibrary;
