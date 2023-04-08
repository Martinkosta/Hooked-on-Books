const { getAllBooks,createBook, getById, updateBook, deleteBook, wishBook, likeBook, getUserBooks } = require('../services/booksServices');

const booksController=require('express').Router();


booksController.get('/',async (req,res)=>{

      const books =await getAllBooks();
      res.json(books);
})

booksController.get('/profile', async (req,res)=>{

      try {
            const result=await getUserBooks(req.user._id);
            res.json(result)
      } catch (error) {
            res.json({
                  message:error.message
            })
      }
     
})


booksController.post('/create',async(req,res)=>{

      try {
            if(Object.values(req.body).some(v=>!v)){
                  throw new Error('All fields are required')
            }
            if(Number(req.body.stars)<1 || Number(req.body.stars>5)){
                  throw new Error('Stars can be only from 1 to 5.')
            }
      
            const book={
                  title:req.body.title,
                  author:req.body.author,
                  genre:req.body.genre,
                  stars:Number(req.body.stars),
                  description:req.body.description,
                  image:req.body.image,
                  owner:req.user._id
            }

            const result=await createBook(book);
      
            res.json(result);

            
      } catch (error) {
        res.json({
            message:error.message
        })
      }
})

booksController.get('/:id', async (req,res)=>{

      try {

            const book=await getById(req.params.id)
            res.json(book)
            
      } catch (error) {
            res.json({
                  message:error.message
            })
      }
})
booksController.post('/wish/:id',async(req,res)=>{
      try {
            const userId=req.user._id;
            const bookId=req.params.id;
            const result=await wishBook(bookId,userId);
            res.json(result)
            
      } catch (error) {
            res.json({
                  message:error.message
              })
      }
})
booksController.post('/like/:id',async(req,res)=>{
      try {
            const userId=req.user._id;
            const bookId=req.params.id;
            const result=await likeBook(bookId,userId);
            res.json(result)
            
      } catch (error) {
            res.json({
                  message:error.message
              })
      }
})

booksController.post('/edit/:id',async (req,res)=>{

      try {
            if(Object.values(req.body).some(v=>!v)){
                  throw new Error('All fields are required')
            }
            if(Number(req.body.stars)<1 || Number(req.body.stars>5)){
                  throw new Error('Stars can be only from 1 to 5.')
            }
            const bookId=req.params.id;

            const book={
                  title:req.body.title,
                  author:req.body.author,
                  genre:req.body.genre,
                  stars:Number(req.body.stars),
                  description:req.body.description,
                  image:req.body.image,
            }
            const result= await updateBook(bookId,book);
            res.json(result);

            
      } catch (error) {
        res.json({
            message:error.message
        })
      }
})

booksController.delete('/:id',async(req,res)=>{

      try {
            const result=await deleteBook(req.params.id)
            res.json(result)
            
      } catch (error) {
            res.json({
                  message:error.message
            })
      }
})



module.exports=booksController;