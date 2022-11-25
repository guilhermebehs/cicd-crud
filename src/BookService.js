const BusinessError = require('./BusinessError')

class BookService {
    
    _bookRepository

    constructor({bookRepository}){
        this.bookRepository = bookRepository;
    }

    create(book = {}){
        if(!book)
          throw new BusinessError("Book cannot be null")
        if(!book.name)
          throw new BusinessError("Book name cannot be null") 
        if(!book.year)
          throw new BusinessError("Book year cannot be null")
        
        return this.bookRepository.create(book)     
    }

    list(){
        return this.bookRepository.list();
    }

    delete(id = '-1'){     
        this.bookRepository.delete(id);
    }
}

module.exports = BookService