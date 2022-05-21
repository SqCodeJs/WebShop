import React from "react";
import PropTypes from "prop-types";
const BasketList = ({ basket }) => {
  const list = basket.map((e) => <div key={e.id}>{e.price}</div>);
  return <>{list}</>;
};
BasketList.propTypes = {
  basket: PropTypes.array,
};
export default BasketList;
