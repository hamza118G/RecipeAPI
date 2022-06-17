const asyncHandler = require('express-async-handler')

const recipe = require ('../modal/Recipemodel')

const getRecipe = asyncHandler (async (req, res) => {

    const recipe = await recipe.find({ user: req.user.id })
    res.status(200).json(goals)
})


const setRecipe = asyncHandler( async (req, res) => {

    if (!req.body.name){
        res.status(400)
        throw new Error('please add a recipe name')
    } 
    if (!req.body.description){
        res.status(400)
        throw new Error('please add a recipe description')
    } 
    if (!req.body.preptime){
        res.status(400)
        throw new Error('please add a recipe preptime')
    } 
    if (!req.body.difficulty){
        res.status(400)
        throw new Error('please add a recipe difficulty')
    } 
    if (!req.body.vegetarian){
        res.status(400)
        throw new Error('please add a recipe vegetarian')
    } 

    const recipes = await recipe.create({
        name: req.body.name,
        description: req.body.description,
        preptime: req.body.preptime,
        difficulty: req.body.difficulty,
        vegetarian: req.body.vegetarian,
        user:req.user.id,

    })
    res.status(200).json(recipes)
})

const updateRecipe = asyncHandler( async (req, res)=> {
    const recipes = await recipe.findById(req.param.id)

    if (!recipes){
        res.status(400)
        throw new Error('Goal not Found')
    }

    //Check for User
    if(!user) {
        res.status(401)
        throw new Error ('User not Found')
    }

    if(recipes.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    const updateRecipe = await recipe.findByIdAndUpdate(req.param.id, req.body, {new:true,})

    res.status(200).json(updateRecipe)
})

const deleteRecipe = asyncHandler( async (req, res)=> {

    const recipes = await recipe.findById(req.params.id)

    if (!recipes){
        res.status(400)
        throw new Error('Goal not Found')
    }

    
    //Check for User
    if(!req.user) {
        res.status(400)
        throw new Error ('User not Found')
    }

    if(recipes.user.toString() !== req.user.id){
        res.status(400)
        throw new Error('User not authorized')
    }

    await recipe.remove()

    res.status(200).json({ id: req.params.id })
})

 module.exports = {
    getRecipe, 
    setRecipe,
    updateRecipe,
    deleteRecipe
}