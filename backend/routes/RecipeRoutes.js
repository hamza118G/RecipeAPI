const express = require('express')
const router = express.Router()
const { 
    getRecipe, 
    setRecipe,
    updateRecipe,
    deleteRecipe,

} = require('../controller/RecipeController')

router.route('/').get(getRecipe).post(setRecipe)
router.route('/:id').delete(deleteRecipe).put(updateRecipe)


module.exports = router