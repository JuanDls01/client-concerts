const determinarPrecio = (categoria) => {
  const price =
    categoria === "cat1name"
      ? "cat1price"
      : categoria === "cat2name"
      ? "cat2price"
      : "cat3price";
  return price;
};

export default determinarPrecio;
