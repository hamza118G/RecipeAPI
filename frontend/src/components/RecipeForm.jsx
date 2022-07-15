import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {createRecipe} from '../features/recipe/recipeSlice'



function RecipeForm() {
    const [name, setname] = useState('')
    const [description, setdescription] = useState('')
    const [preptime, setpreptime] = useState('')
    const [difficulty, setdifficulty] = useState('')
    const [vegetarian, setvegetarian] = useState('')
  
   const dispatch = useDispatch()
  
    const onSubmit = (e) => {
      e.preventDefault()

  
      dispatch(createRecipe({ name, description, preptime, difficulty, vegetarian }))
            
    }

    


    return (
        <section className='form'>
          <form onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='text'>Name for Recipe</label>
              <input
                type='String'
                name='name'
                id='name'  
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>



            <div className='form-group'>
              <label htmlFor='text'>Description</label>
              <input
                type='String'
                name='description'
                id='description'
                value={description}
                onChange={(e) => setdescription(e.target.value)}
              />
            </div>


            <div className='form-group'>
              <label htmlFor='text'>PrepTime</label>
              <input
                type='Number'
                name='preptime'
                id='preptime'
                value={preptime}
                onChange={(e) => setpreptime(e.target.value)}
              />
            </div>



            <div className='form-group'>
              <label htmlFor='text'>Difficulty</label>
              <input
                type='Number'
                name='difficulty'
                id='difficulty'
                value={difficulty}
                onChange={(e) => setdifficulty(e.target.value)}
              />
            </div>




            <div className='form-group'>
              <label htmlFor='text'>vegetarian</label>
              <input
                type='Boolean'
                name='vegetarian'
                id='vegetarian'
                value={vegetarian}
                onChange={(e) => setvegetarian(e.target.value)}
              />
            </div>







            
            <div className='form-group'>
              <button className='btn btn-block' type='submit'>
                Add Recipe
              </button>
            </div>
          </form>
        </section>




      )
    }


export default RecipeForm