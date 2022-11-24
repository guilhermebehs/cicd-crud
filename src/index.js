const BookController = require('./BookController')
const BookService = require('./BookService')
const BookRepository = require('./BookRepository')

const bookRepository = new BookRepository()
const bookService = new BookService({bookRepository})
const port = process.env.PORT || 8080; 

new BookController({bookService})
  .createController()
  .listen(port, ()=> console.log(`listen in port ${port}`))