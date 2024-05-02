import React from 'react'
import RecipeCard from '../Components/RecipeCard'

function Recipes() {

  return (
    <div>
        <h2 className='text-center m-4'>Explore Your Tastes Here</h2>
        <input type="text" style={{width:"400px",marginLeft:'600px'}} placeholder='Seek Tasty Creations'
        className='form-control mx-auto m-5'/>
        <div className='row'>
            <div className='col'>
                <RecipeCard/>
            </div>
        </div>
    </div>
  )
}

export default Recipes