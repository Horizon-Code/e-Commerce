import bcrypt from 'bcrypt';

const data = {
  usuarios: [
    {
      nombre: 'Rubén',
      email: 'admin@example1.com',
      password: bcrypt.hashSync('1234', 8),
      admin: true,
    },
    {
      nombre: 'usuario1',
      email: 'usuario1@example.com',
      password: bcrypt.hashSync('1234', 8),
      admin: false,
    },
  ],
  productos: [
     {

        nombre: 'Lentejas',
        categoria: 'Shirts',
        image: '/images/lentejas1.jpg',
        precio: 5,
        stock: 6,
        marca: 'Nike',
        rating: 4.5,
        numeroreseñas: 10,
        descripcion: 'high quality product',
      },
      {
   
        nombre: 'Carrillera con patatas',
        categoria: 'Shirts',
        image: '/images/lentejas1.jpg',
        precio: 5,
        stock: 6,
        marca: 'Adidas',
        rating: 4.0,
        numeroreseñas: 10,
        descripcion: 'high quality product',
      },
      {
        
        nombre: 'Jarretes con patatas',
        categoria: 'Shirts',
        image: '/images/lentejas1.jpg',
        precio: 5,
        stock: 1,
        marca: 'Lacoste',
        rating: 4.8,
        numeroreseñas: 17,
        descripcion: 'high quality product',
      },
      {
       
        nombre: 'Paella',
        categoria: 'Pants',
        image: '/images/lentejas1.jpg',
        precio: 5,
        stock: 3,
        marca: 'Nike',
        rating: 4.5,
        numeroreseñas: 14,
        descripcion: 'high quality product',
      },
      {
    
        nombre: 'Canelones',
        categoria: 'Pants',
        image: '/images/lentejas1.jpg',
        precio: 5,
        stock: 4,
        marca: 'Puma',
        rating: 4.5,
        numeroreseñas: 10,
        descripcion: 'high quality product',
      },
      {
       
        nombre: 'Puchero',
        categoria: 'Pants',
        image: '/images/lentejas1.jpg',
        precio: 5,
        stock: 7,
        marca: 'Adidas',
        rating: 4.5,
        numeroreseñas: 15,
        descripcion: 'high quality product',
      },
    ],
  };
  export default data;