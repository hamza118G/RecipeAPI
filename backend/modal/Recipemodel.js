const mongoose = require ('mongoose')

const RecipeSchema = mongoose.Schema({
  user:{
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref:'user'
          
  },
    name: String,
    description:   String,
    preptime:   Number,
    difficulty:   Number,
    vegetarian:   Boolean
  })
module.exports = mongoose.model('recipe', RecipeSchema)