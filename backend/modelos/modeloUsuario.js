import mongoose from 'mongoose';

const { Schema }= mongoose;

const esquemaUsuario = new Schema(
    {
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);
const Usuario = mongoose.model('Usuario', esquemaUsuario);
export default Usuario;
