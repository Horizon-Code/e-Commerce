import express from 'express';
import mongoose from 'mongoose';
import productoRouter from './routers/productoRouter.js';
import usuarioRouter from './routers/usuarioRouter.js';


const app = express();
const port = 5000;
const db =mongoose.connect;

db('mongodb://localhost/grammazon',
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
});

app.listen(port, () => {
    console.log('waku waku');
});




app.use('/api/usuarios', usuarioRouter);
app.use('/api/productos', productoRouter);
app.get('/', (req,res) => {
  res.send('waku waku está ready');
});
app.use((err, req, res, next) => {
 res.status(500).send({ message: err.message });
  });


  



