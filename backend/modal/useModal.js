const mongoose = require ('mongoose')

const RecipeSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        
},
    name: {
        type: String,
        required: [true, 'please add a name ']
    },
    description: {
        type: String,
        required: [true, 'please add a description']
    },
    
    preptime:  {
        type: Number,
        required: [true, 'please add Prep Time'],
        unique: true
    },

    difficulty: {
        type: String,
        required:[true, 'please add difficulty number']
    },
    vegetarian: {
            type:Boolean,
            required:[true, 'please add vegetable or not']
    },
    
  })
  module.exports = mongoose.model('recipe', RecipeSchema)
