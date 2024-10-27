import "dotenv/config.js";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { Product } from "./models/product.model.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import axios from "axios";

const app = express();
const port = process.env.PORT || 5000;
const mongoUri =
  process.env.MONGO_URI ||
  "mongodb+srv://alamingidado13:qeCHcyOwiH5XrPcO@cluster0.jqwng81.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use(express.json());
app.use(cors());
app.use("/products", productRoutes);
app.use("/user", userRoutes);

app.get("/populate", async (req, res) => {
  try {
    await axios
      .get("https://fakestoreapi.com/products")
      .then(async (response) => {
        const productList = response.data;

        const result = await Product.insertMany(productList);
        res.status(200).send(result);
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

mongoose
  .connect(mongoUri, {
    dbName: "products",
  })
  .then(() => {
    console.log(`Database successfully connected...`);
    app.listen(port, () => {
      console.log(`Server is running at port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
