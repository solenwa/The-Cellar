import Product from '../models/productModel.js';
import uploadToCloudinary from '../cloudinary.js';

const createProduct = async (req, res) => {
  const {
    appellation,
    couleur,
    domaine,
    millesime,
    pays,
    quantite,
    region,
    taille,
    image,
  } = req.body;
  try {
    let imageData = {};
    if (image) {
      const results = await uploadToCloudinary(image, 'TheCellar');
      imageData = results;
    }
    const product = await Product.create({
      appellation,
      couleur,
      domaine,
      millesime,
      pays,
      quantite,
      region,
      taille,
      image: imageData,
    });

    res.status(200).json(product);
  } catch (e) {
    res
      .status(500)
      .json({ error: 'A server error occurred with this request' });
  }
};

export default createProduct;
