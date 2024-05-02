import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddRecipes() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
        <button className='btn btn-dark m-5' onClick={handleShow}>Add</button>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Recipe Name:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-6 mt-4 p-5'>
          <label>
                <input type="file" style={{display:'none'}}/>
                <img src="https://www.simplyrecipes.com/thmb/KRw_r32s4gQeOX-d07NWY1OlOFk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg" width={'200px'} alt="" />
            </label>
            </div>

           <div className='col-6 text-center '>
           <input type="text" placeholder="Recipe Name" className='form-control mb-3'/>
           <input type="text" placeholder="Ingredients" className='form-control mb-3'/>
           <input type="text" placeholder="Instructions" className='form-control mb-3'/>
           <input type="text" placeholder="Preparation Time" className='form-control mb-3'/>
           <input type="text" placeholder="Youtube" className='form-control mb-3'/>
           
           </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-between'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="light">
            Add
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default AddRecipes