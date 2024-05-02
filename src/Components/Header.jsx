import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  import { FaBowlFood } from "react-icons/fa6";

function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='black'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' className='text-light fs-3 m-2'>
             <FaBowlFood fontSize={'40px'} className='text-white  fs-1 mx-4' />
             Perfect Flavour
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header