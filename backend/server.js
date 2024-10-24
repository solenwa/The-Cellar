import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const cors = require('cors');
const connectDB = require('./config_db');
const productRoute = require('./routes/productRoutes');

dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

/* app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });
  */

app.use('/api/products', productRoute);

// Health check path
app.get('/health', (req, res) => {
  res.sendStatus(200);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
