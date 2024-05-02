import React from 'react'
import AddRecipes from './AddRecipes'
import { FaYoutube } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
function NewRecipes() {
  return (
    <div>
        <div className='d-flex justify-content-between'>
            <h3 className='ms-5'>New recipes</h3>
            <AddRecipes/>
        </div>

        <div className='row shadow m-4 border'>
            <div className="col-6">
                <h4>Recipe Name:</h4>
            </div>
            <div className="col-6 d-flex justify-content-evenly">
                <button className='btn'><FaYoutube /></button>
                <button className='btn'><FaEdit /></button>       
                <button className='btn'><FaSearch /></button>
                <button className='btn'><MdDelete /></button>

            </div>
        </div>
    </div>
  )
}

export default NewRecipes