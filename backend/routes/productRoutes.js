import express from 'express';
import createProduct from '../controllers/productController.js';
import Product from '../models/productModel.js';

const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

productRouter.post('/', createProduct);

export default productRouter;
