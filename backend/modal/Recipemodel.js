const mongoose = require ('mongoose')

const RecipeSchema = mongoose.Schema({
    name: String,
    description:   String,
    preptime:   Number,
    difficulty:   Number,
    vegetarian:   Boolean
  })
module.exports = mongoose.model('recipe', RecipeSchema)