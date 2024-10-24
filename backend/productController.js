const Product = require('./models/productModel');
const { uploadToCloudinary } = require('../services/cloudinary');

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
      const results = await uploadToCloudinary(image, 'my-profile');
      imageData = results;
    }
    const user = await Product.create({
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

    res.status(200).json(user);
  } catch (e) {
    res
      .status(500)
      .json({ error: 'A server error occurred with this request' });
  }
};

module.exports = { createProduct };
