const Home = () => {
  const products = fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((products) => products);
  console.log(products);
  return <div>Home</div>;
};

export default Home;
