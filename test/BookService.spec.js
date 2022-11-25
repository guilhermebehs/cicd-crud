const BookService = require('../src/BookService')

describe('BookService',()=>{
    let bookService
    let bookRepositoryCreateSpy
    let bookRepositoryListSpy
    let bookRepositoryDeleteSpy
    beforeEach(()=>{
        const bookRepository = {
            create:()=> 1, 
            list: ()=> [{id:1, name:'Some book', year: '2022',}],
            delete: ()=> {}
        }
        bookRepositoryCreateSpy = jest.spyOn(bookRepository, 'create')
        bookRepositoryListSpy = jest.spyOn(bookRepository, 'list')
        bookRepositoryDeleteSpy = jest.spyOn(bookRepository, 'delete')
        bookService = new BookService({bookRepository})
    })
    describe('create()', ()=>{
        test('should create book correctly',()=>{
            expect(bookService.create({'name':'Some book', 'year': '2022'})).toBe(1)
            expect(bookRepositoryCreateSpy).toHaveBeenCalledTimes(1)
        
        })

        test('should throw when book name is undefined',()=>{
            expect(()=>bookService.create({'year': '2022'})).toThrow("Book name cannot be null")
            expect(bookRepositoryCreateSpy).toHaveBeenCalledTimes(0)
        })

        test('should throw when book year is undefined',()=>{
            expect(()=>bookService.create({'name':'Some book'})).toThrow("Book year cannot be null")
            expect(bookRepositoryCreateSpy).toHaveBeenCalledTimes(0)
        })

    })
    describe('list()', ()=>{
        test('should list all books correctly',()=>{
            expect(bookService.list()).toEqual([{'id':1,'name':'Some book', 'year': '2022'}])
            expect(bookRepositoryListSpy).toHaveBeenCalledTimes(1)
        
        })
    })

    describe('delete()', ()=>{
        test('should delete book correctly',()=>{
            expect(bookService.delete(1)).toBeUndefined()
            expect(bookRepositoryDeleteSpy).toHaveBeenCalledTimes(1)
        })
    })
})
