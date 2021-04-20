import mongoose from 'mongoose';

const PedidoSchema = new mongoose.Schema(
  {
    pedidoItems: [
      {
        nombre: { type: String, required: true },
        cantidd: { type: Number, required: true },
        image: { type: String, required: true },
        precio: { type: Number, required: true },
        producto: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Producto',
          required: true,
        },
      },
    ],
    direccionCompra: {
      nombreCompleto: { type: String, required: true },
      direccion: { type: String, required: true },
      ciudad: { type: String, required: true },
      codigoPostal: { type: String, required: true },
      pais: { type: String, required: true },
    },
    metodoPago: { type: String, required: true },
    itemsPrecio: { type: Number, required: true },
    compraprecio: { type: Number, required: true },
    taxPrecio: { type: Number, required: true },
    totalPrecio: { type: Number, required: true },
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    estaPagado: { type: Boolean, default: false },
    pagadoEn: { type: Date },
    estaEntregado: { type: Boolean, default: false },
    entregadoEn: { type: Date },
  },
  {
    timestamps: true,
  }
);
const Pedido = mongoose.model('Pedido', PedidoSchema);
export default Pedido;