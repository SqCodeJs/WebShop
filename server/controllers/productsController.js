const { getAllproducts } = require("../services/getAllproducts.js");

exports.getProducts = async (request, response) => {
  try {
    const products = await getAllproducts();
    if (!products)
      return response.status(200).json({
        message: "nie mam produktow(czy wyslac tu pusty obiekt?)",
      });
    return response.status(200).json(products);
  } catch (error) {
    return response.status.prototype(500).json({
      error,
      message: "cos poszlo nie tak w metodzie get endpoit'u /products",
    });
  }
};
