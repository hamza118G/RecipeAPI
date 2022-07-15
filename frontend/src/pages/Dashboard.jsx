import React from 'react'
import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'
import RecipeForm from '../components/RecipeForm'

function DashBoard() {
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth )  
  
  useEffect(() => {
    if(!user) {
      navigate('/login')
    }
  }, [user, navigate] )
  
  return (
    <>
    <section className='heading'>

      <h1>Welcome {user && user.name} </h1>
      <p>Recipe Dasboard</p>
    </section>

    <RecipeForm />
    </>
  )        
}
        
export default DashBoard           