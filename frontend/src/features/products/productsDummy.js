// import { faker } from "@faker-js/faker";

const getProducts = async () =>
  await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((products) => products);
let products = getProducts();

// const generateProducts = (len) => {
//   let products = [];

//   for (let i = 0; i < len; i++) {
//     const product = {
//       id: i + 1,
//       name: faker.commerce.productName(),
//       price: faker.commerce.price(),
//       category: faker.commerce.department(),
//       description: faker.lorem.sentence(),
//       image: "https://via.placeholder.com/640x480",
//     };
//     products.push(product);
//   }
//   return products;
// };

// console.log(generateProducts(5));
export const initialProductsState = products;
