const { Schema, model, Types } = require('mongoose')

const bookSchema = new Schema({
      title: { type: String, required: true, unique: true },
      author: { type: String, required: true },
      image: { type: String, required: true },
      description: { type: String, required: true },
      genre: { type: String, required: true },
      stars: { type: Number, required: true },
      wishingList: { type: [Types.ObjectId], ref: 'User', default :[] },
      likes: { type: [Types.ObjectId], ref: 'User', default :[] },
      owner: { type: Types.ObjectId, ref: 'User' }


})

bookSchema.index({ title: 1 }, {
      collation: {
            locale: 'en',
            strength: 2
      }
})

const Book = model('Book', bookSchema);

module.exports = Book;