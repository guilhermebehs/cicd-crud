class BookService {
    
    _bookRepository

    constructor({bookRepository}){
        this.bookRepository = bookRepository;
    }

    create(book){
        if(!book)
          throw new Error("Book cannot be null")
        if(!book.name)
          throw new Error("Book name cannot be null") 
        if(!book.year)
          throw new Error("Book year cannot be null")
        
        return this.bookRepository.create(book)     
    }

    list(){
        return this.bookRepository.list();
    }

    delete(id){
        if(!id)
          throw new Error("Id cannot be null")
        
        this.bookRepository.delete(id);
    }
}

module.exports = BookService