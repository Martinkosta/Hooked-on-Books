const Book = require("../models/Book");

async function createBook(book) {
      const existing = await Book.findOne({ title: book.title }).collation({ locale: 'en', strength: 2 });

      if (existing) {
            throw new Error('Book already exists')
      }

      await Book.create({
            title: book.title,
            author: book.author,
            image: book.image,
            description: book.description,
            genre: book.genre,
            stars: book.stars,
            owner: book.owner
      })
}

async function getAllBooks() {
      return Book.find({});
}
async function getById(id) {
      return Book.findById(id);
}
async function updateBook(id, book) {
      return  Book.findByIdAndUpdate(id, {
            title: book.title,
            author: book.author,
            image: book.image,
            description: book.description,
            genre: book.genre,
            stars: book.stars,
      },{new: true})
}
async function wishBook(bookId, userId) {
      const book = await Book.findById(bookId);
      book.wishingList.push(userId);
     const result= await book.save();
     return result;
}
async function likeBook(bookId, userId) {
      const book = await Book.findById(bookId);
      book.likes.push(userId);
     const result= await book.save();
     return result;
}


async function getUserBooks(userId){
      return Book.find({wishingList:userId});
}
async function deleteBook(bookId){
      return Book.findByIdAndRemove(bookId);
}

module.exports = {
      createBook,
      getAllBooks,
      getById,
      updateBook,
      wishBook,
      getUserBooks,
      deleteBook,
      likeBook
}