const { Router } = require("express");

const bookRouter = Router();

const { addBook, getAllBooks,updateBooks,deleteBook,deleteBooks,getBook } = require("./controllers");

bookRouter.post("/books/addBook", addBook);
bookRouter.get("/books/getAllBooks", getAllBooks);
bookRouter.get("/books/getBook", getBook);
bookRouter.put("/books/updateBooks", updateBooks);
bookRouter.delete("/books/deleteBook", deleteBook)
bookRouter.delete("/books/deleteBooks", deleteBooks)
module.exports = bookRouter;
