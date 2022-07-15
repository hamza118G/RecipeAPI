import axios from 'axios'

const API_URL = 'http://localhost:5000/recipe'

// Create new goal
const createRecipe = async (recipeData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }


  
  const response = await axios.post(API_URL, recipeData, config)

  return response.data
}

const recipeService = {
    createRecipe,
}
export default recipeService