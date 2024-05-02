import React from 'react'
import Swal from 'sweetalert2'
function Profile() {

    const updateUser =()=>{
        Swal.fire({
            title: 'Success',
            text: 'User Details Updated',
            icon: 'Success',
            confirmButtonText: 'Back'
          })
    }

  return (
    <div>
        <div className='text-center'>
            <h3 className='mt-5'>User Profile</h3>
            <label>
                <input type="file" style={{display:'none'}}/>
                <img src="https://cdn-icons-png.flaticon.com/512/3461/3461980.png" width={'200px'} alt="" />
            </label>
                <div className='mx-5'>
                    <input type="text" placeholder="Name" className='form-control'/>
                    <input type="text" placeholder="Recipe Name" className='form-control'/>
                    <input type="text" placeholder="Youtube" className='form-control'/>
                    <button className='btn btn-dark m-4' onClick={updateUser}>Update</button>
                </div>
            

        </div>
    </div>
  )
}

export default Profile