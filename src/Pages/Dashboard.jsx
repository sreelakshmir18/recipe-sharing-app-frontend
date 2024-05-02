import React from 'react'
import Profile from '../Components/Profile'
import NewRecipes from '../Components/NewRecipes'

function Dashboard() {
  return (
    <div>
        
        <div className='row'>
            <h2 className='text-center mt-3'>Welcome&nbsp;<span className='text-light'>User</span></h2>
        <div className="col-lg-6">
            <NewRecipes/>
        </div>
        <div className="col-lg-6">
            <Profile/>
        </div>
    </div>
    </div>
  )
}

export default Dashboard