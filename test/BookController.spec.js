const BookController = require('../src/BookController')
const BookService = require('../src/BookService')
const BookRepository = require('../src/BookRepository')
const request = require('supertest')

describe('BookController', ()=>{
    describe('GET /books',()=>{
        let bookController
        beforeEach(()=>{
             const bookRepository = new BookRepository();
             bookRepository._db.push({id:1, name:'some book', year:'2022'})

             const bookService = new BookService({bookRepository});
             bookController = new BookController({bookService})
        })
        test('should return 200 and a list of books', async()=>{
            await request(bookController.createController())
            .get('/books')
            .expect(200)
            .expect([{id:1, name:'some book', year:'2022'}])
        })
    })

    describe('POST /books',()=>{
        let bookController
        beforeEach(()=>{
             const bookRepository = new BookRepository();
             const bookService = new BookService({bookRepository});
             bookController = new BookController({bookService})
        })
        test('should return 201', async()=>{
            await request(bookController.createController())
            .post('/books')
            .send({name:'some book', year:'2022'})
            .expect(201)
        })

        test('should return 400 when book name is null', async()=>{
            await request(bookController.createController())
            .post('/books')
            .send({year: '2022'})
            .expect(400)
            .expect({error:'Book name cannot be null'})
        })

        test('should return 400 when book year is null', async()=>{
            await request(bookController.createController())
            .post('/books')
            .send({name: 'some book'})
            .expect(400)
            .expect({error:'Book year cannot be null'})
        })
    })


    describe('DELETE /books/{id}',()=>{
        let bookController
        beforeEach(()=>{
             const bookRepository = new BookRepository();
             bookRepository._db.push({id:1, name:'some book', year:'2022'})

             const bookService = new BookService({bookRepository});
             bookController = new BookController({bookService})
        })
        test('should return 204 ', async()=>{
            await request(bookController.createController())
            .delete('/books/1')
            .expect(204)
        })
    })
    
})