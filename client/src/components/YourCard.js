const YourCard = (props) => {
  const { basket, setBasket } = props;
  const removeItem = (id) => {
    setBasket(basket.filter((e) => e.id !== id));
  };

  return props.render({ removeItem, ...props });
};

export default YourCard;
