import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config_db.js';
import productRoute from './routes/productRoutes.js';

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

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
