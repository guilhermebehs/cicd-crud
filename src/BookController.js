const express = require('express')


class BookController{

    bookService

    constructor({bookService}){
        this.bookService = bookService
    }

    createController(){
        const app = express();
        app.use(express.json())

        app.get('/books', async(req, res)=>{
            res.status(200).json(this.bookService.list())
        })
        app.post('/books', async(req, res)=>{
            try{
                res.status(201).json(this.bookService.create(req.body))
            }
            catch(e){
                res.status(e.statusCode).json({error:e.message})
            }
        })
        app.delete('/books/:id', async(req, res)=>{
            try{
                res.status(204).json(this.bookService.delete(req.params.id))
            }
            catch(e){
                res.status(e.statusCode).json({error:e.message})
            }
        })
        return app
    }
}

module.exports = BookController