import mongoose from 'mongoose';

const esquemaProducto = new mongoose.Schema(
  {
    nombre: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    marca: { type: String, required: true },
    categoria: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numeroreseñas: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
const Producto = mongoose.model('Producto', esquemaProducto);

export default Producto;