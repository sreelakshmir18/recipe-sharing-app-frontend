import React from 'react'
import {Link} from 'react-router-dom'
import RecipeCard from '../Components/RecipeCard'

function Home() {

  return (
    <div>
        <div style={{ position: 'relative' }}>
            
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20240328/pngtree-healthy-thai-food-recipes-concept-image_15645274.jpg" width={'100%'} alt="" />
        
            <p style={{
        position: 'absolute',
        top: '40%', 
        left: '25%',
        transform: 'translate(-50%, -50%)',
        color:'black',
        fontSize:'50px',
        
        padding: '10px',
        borderRadius: '5px',
        textAlign: 'center',
        maxWidth: '90%', 
      }}>
       Explore Your Kitchen Journey
      </p>
      </div> 

      <div className='text-center'>
        <Link to={'/login'}>
            <button className='btn btn-dark mt-2 mb-5'>Let's Get Cooking! </button>
        </Link>
      </div>


      <div className='row'>
        <div className='col-12' style={{height:'500px'}}>
            <h1 className='text-center m-5'>New Recipes Now At Your Fingertip</h1>

            <marquee width="100%" direction="left" height="400px">
           
           <RecipeCard/>
          
            </marquee>
        </div>



      </div>

      <div className='row mx-5 mb-5'>
        <h1 className='text-center m-5'>Our Services</h1>
        <div className='col-md-4'>
            <div className='card shadow  p-5' style={{height:"550px"}}>
                <h3 className='text-center m-2'>Recipe Sharing</h3>
                <p  style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit optio pariatur a earum quasi reiciendis modi deserunt et, itaque deleniti sapiente possimus iusto ab doloremque assumenda! Quas deserunt soluta quibusdam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, doloribus, voluptatem autem reprehenderit obcaecati tempore voluptate sequi dicta in sed aliquid, numquam deserunt nostrum consequuntur ipsa exercitationem. Non, error sequi.</p>

            </div>

        </div>
        <div className='col-md-4'>
        <div className='card shadow  p-5' style={{height:"550px"}}>
                 <h3 className='text-center m-2'>User Guide</h3>
                <p style={{textAlign:'justify'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit optio pariatur a earum quasi reiciendis modi deserunt et, itaque deleniti sapiente possimus iusto ab doloremque assumenda! Quas deserunt soluta quibusdam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, doloribus, voluptatem autem reprehenderit obcaecati tempore voluptate sequi dicta in sed aliquid, numquam deserunt nostrum consequuntur ipsa exercitationem. Non, error sequi.</p>
        </div>
        </div>

        <div className='col-md-4'>
        <div className='card shadow  p-5' style={{height:"550px"}}>
                <h3 className='text-center m-2'>Contribute</h3>
                <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit optio pariatur a earum quasi reiciendis modi deserunt et, itaque deleniti sapiente possimus iusto ab doloremque assumenda! Quas deserunt soluta quibusdam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, doloribus, voluptatem autem reprehenderit obcaecati tempore voluptate sequi dicta in sed aliquid, numquam deserunt nostrum consequuntur ipsa exercitationem. Non, error sequi.</p>
        </div>
        </div>

       

      </div>

    </div>


    

    

  )
}

export default Home