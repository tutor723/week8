const {Router} = require("express")

const genreRouter = Router()

const {addGenre, getGenreAndBooks} = require("./controllers")

genreRouter.post("/authors/addGenre", addGenre)
genreRouter.get("/authors/getGenreAndBooks/:genre", getGenreAndBooks )

module.exports = genreRouter