 class BookRepository{

     _db = null

     constructor(){
        this._db = new Array();
     }

     create(book){
        const id = String(new Date().getTime());
        book["id"] = id
        this._db.push(book)
        return id;
     }

     list(){
        return this._db;
     }

     delete(id){
        this._db = this._db.filter(book => book.id != id)
     }


}

module.exports = BookRepository