import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    appellation: { type: String, required: true },
    couleur: { type: String, required: true },
    domaine: { type: String, required: true },
    millesime: { type: Number, required: true },
    pays: { type: String, required: true },
    quantite: { type: Number, required: true },
    region: { type: String, required: true },
    taille: { type: String, required: true },
    image: {
      publicId: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);
export default Product;
