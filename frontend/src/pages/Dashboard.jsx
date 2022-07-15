import React from 'react'
import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import RecipeForm from '../components/RecipeForm'
import RecipeItem from '../components/RecipeItem'
import Spinner from '../components/Spinner'
import { getRecipes} from '../features/recipe/recipeSlice'
import {reset} from '../features/auth/authSlice'


function DashBoard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const { user } = useSelector((state) => state.auth )  
  const {recipes, isLoading, isError, message} = useSelector((state) => state.recipes )

  useEffect(() => {
    if(isError) {
      console.log(message)
    }
    if(!user) {
      navigate('/login')
    }
    dispatch(getRecipes())
    return () => {
      dispatch(reset())
    } 
  }, [user, navigate, isError, message, dispatch] )

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
    <section className='heading'>

      <h1>Welcome {user && user.name} </h1>
      <p>Recipe Dasboard</p>
    </section>

    <RecipeForm />

     <section className='content'>
        {recipes?.length > 0 ? (
          <div className='recipe'>
            {recipes.map((recipe) => (
              <RecipeItem key={recipe._id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <h3>You  have not set any recipe</h3>
        )}
      </section> 



    </>
  )        
}
        
export default DashBoard           