import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaYoutube } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

function RecipeCard() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <Card style={{ width: '28rem' }} onClick={handleShow} >
      <Card.Img variant="top" src="https://www.eatingwell.com/thmb/QYZnBgF72TIKI6-A--NyoPa6avY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/greek-salmon-bowl-f681500cbe054bb1adb607ff55094075.jpeg" width={'100%'} height={'300px'} />

      <Card.Body>
        <Card.Title className='text-center'>Veg Cheesy Salad</Card.Title>
       
      </Card.Body>
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>veg Cheesy Salad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='row'>
                <div className="col-6">
                    <img width={'100%'} src="https://www.eatingwell.com/thmb/QYZnBgF72TIKI6-A--NyoPa6avY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/greek-salmon-bowl-f681500cbe054bb1adb607ff55094075.jpeg" alt="" />
                </div>
                <div className="col-6  text-center">
                    <h2>Veg Cheesy Salad</h2>
                    <p style={{textAlign:'justify'}}>Ingredients: Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolorum, laborum voluptas, voluptatum quam neque dolor consequuntur quas deserunt eaque, nulla alias. Esse impedit expedita aperiam ipsum. Beatae, ullam ut?</p>
                    <p>Instructions:<b> Roll out the pizza dough and spread tomato sauce evenly</b></p>
                    
                </div>           
            </div>
        </Modal.Body>
        <Modal.Footer>
     <div className='d-flex justify-content-between'>  
     
        <Button className='me-1'><FaStar /></Button>
        <Button className='me-1'><FaStar /></Button>
        <Button className='me-5'><FaStar /></Button>
        <Button className='me-5'> <a href=""><FaYoutube /></a></Button>

         <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
     </div>
     
     
          
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default RecipeCard