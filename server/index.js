const express=require('express');
const cors = require('./middlewares/cors');
const mongoose=require('mongoose');
const booksController = require('./controllers/booksController');
const authController=require('./controllers/authController');
const session = require('./middlewares/session');

const app=express();
const connctionString='mongodb://localhost:27017/books-library'

start()
async function start(){
      await mongoose.connect(connctionString);
      app.use(express.json());
      app.use(cors());
      app.use(session());

      app.use('/books',booksController);
      app.use('/auth',authController);

      app.listen(3030,()=>console.log('Server listing on port 3030...'))
}