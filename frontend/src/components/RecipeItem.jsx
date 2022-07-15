import React from 'react'
import { useDispatch } from 'react-redux'
import {deleteRecipe} from '../features/recipe/recipeSlice'


function RecipeItem({recipe}) {
    const dispatch = useDispatch()


    return (
    <div className='recipes'>
       
        <h2>
            {recipe.name}
            <br />
            {recipe.description}
            <br />
            {recipe.preptime}
            <br />
            {recipe.difficulty}
            <br />
            {recipe.vegetarian}
            
            </h2>  

            <button onClick={() => dispatch(deleteRecipe(recipe._id))} className='close'>X</button>

    </div>

  )
}

export default RecipeItem