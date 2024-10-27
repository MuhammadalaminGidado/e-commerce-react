export const Product = (product) => {
  return (
    <div className="">
      <img src={product.img} alt={product.title} />
      <div className="">
        <p>{product.title}</p>
        <span>£{product.price}</span>
      </div>
    </div>
  );
};
