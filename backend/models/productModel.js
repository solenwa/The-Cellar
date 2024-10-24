const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const productSchema = new Schema(
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

module.exports = mongoose.model('Product', productSchema);
