import { Product } from "../models/product.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).send(product);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
};

export const updateProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedProduct = await Product.findByIdAndUpdate(id, req.body);
    if (!updatedProduct) {
      res.status(400).send({ message: "Product does not exist in inventory" });
    }
    res.status(200).send(updatedProduct);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
};
