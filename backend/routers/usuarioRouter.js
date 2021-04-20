import express from 'express';
import Usuario from '../modelos/modeloUsuario.js';
import data from '../data.js';
import expressAsyncHandler from 'express-async-handler';


const usuarioRouter = express.Router();
//expressAsyncHandler manejador de errores
usuarioRouter.get(
    '/seed',
     expressAsyncHandler(async (req, res) => {
      //await Usuario.remove({});
      const usuariosCreados = await Usuario.insertMany(data.usuarios);
      res.send({ usuariosCreados });
    })
  );
  
  export default usuarioRouter;