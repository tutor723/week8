const Book = require("./model");
const Author = require("../authors/model");
const Genre = require("../genre/model");

//add book
const addBook = async (req, res) => {
  try {
    const author = await Author.findOne({
      where: {
        authorName: req.body.author,
      },
    });
    const genre = await Genre.findOne({
      where: {
        genreName: req.body.genre,
      },
    });
    const newBook = await Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      AuthorId: author.id,
      GenreId: genre.id,
    });

    console.log(genre.id);
    res.status(200).json({ message: "Success", book: newBook });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
    console.log(error);
  }
};

//delete single book by title
const deleteBook = async (req, res) => {
  try {
    const deleteBook = await Book.destroy({
      where: {
        title: req.body.title,
      },
    });
    res.status(201).json({ message: "Success", book: deleteBook });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
    console.log(error);
  }
};

//delete all book
const deleteBooks = async (req, res) => {
  try {
    const deleteBooks = await Book.truncate();
    res.status(201).json({ message: "Success", book: deleteBooks });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
    console.log(error);
  }
};

//get all book
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json({ message: "Success", books: books });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
    console.log(error);
  }
};

//get single boook
const getBook = async (req, res) => {
  try {
    const getBook = await Book.findOne({
      where: {
        title: req.params["title"],
      },
    });
    res.status(201).json({ message: "Success", book: getBook });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
    console.log(error);
  }
};

//update book by title
const updateBooks = async (req, res) => {
  try {
    const updateBook = await Book.update(
      {
        author: req.body.newAuthor,
        genre: req.body.newGenre,
      },
      {
        where: {
          title: req.body.title,
        },
      }
    );
    res.status(200).json({ message: "Success", updateBook: updateBook });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
    console.log(error);
  }
};

module.exports = {
  addBook,
  getAllBooks,
  updateBooks,
  deleteBook,
  deleteBooks,
  getBook,
};
