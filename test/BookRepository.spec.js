const BookRepository = require('../src/BookRepository')

describe('BookRepository',()=>{
    let bookRepository
    beforeEach(()=>{
        bookRepository = new BookRepository()
    })
    describe('create()', ()=>{
        test('should create book correctly',()=>{
            expect(bookRepository.create({'name':'Some book', 'year': '2022'})).toBeDefined()
            expect(bookRepository._db.length).toBe(1)
            expect(bookRepository._db[0]).toEqual({id: bookRepository._db[0].id, 'name':'Some book', 'year': '2022'})
        })
    })

    describe('list()', ()=>{
        test('should list all books correctly',()=>{
            bookRepository._db.push({id:1, 'name':'Some book', 'year': '2022'})

            expect(bookRepository.list()).toEqual([{id:1,'name':'Some book', 'year': '2022'}])
        })
    })

    describe('delete()', ()=>{

        test('should list all books correctly',()=>{
            bookRepository._db.push({id:1, 'name':'Some book', 'year': '2022'})

            expect(bookRepository.delete(1)).toBeUndefined()
            expect(bookRepository._db.length).toBe(0)
        })
    })
    
   
})