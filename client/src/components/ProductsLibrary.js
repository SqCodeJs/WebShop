import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Wrapp, Row } from "../utils/styledComponents";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

import Board from "./Board";
import FilterSide from "./FilterSide";

const WrappLibrary = styled(Wrapp)`
  width: 100%;
`;
const HeaderLibrary = styled.div`
  width: 100%;
`;

const ProductsLibrary = ({ DB }) => {
  const { path } = useParams();

  const productsList = DB.filter((element) => element.cat === path);

  const [filterProducts, setFilterProducts] = useState(productsList);

  const [price, setPrice] = useState(50);
  useEffect(() => {
    setFilterProducts(productsList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);
  console.log("DB", productsList, "sciez", path);
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

ProductsLibrary.propTypes = {
  DB: PropTypes.array,
};
const mapStateToProps = (state) => ({
  names: state.names,
  DB: state.db.products,
});
export default connect(mapStateToProps, {})(ProductsLibrary);
