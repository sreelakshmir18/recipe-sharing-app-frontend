import React from 'react'
import { Link } from 'react-router-dom'

function Auth({register}) {
  return (
    <div>
        <div className='row'>
           <div className="col-lg-6">
                        <img src="https://cdn.dribbble.com/users/2947819/screenshots/15125197/media/e91abb2d0a6337eccd65be1523365ccf.png?resize=400x300&vertical=center"  width={'100%'} alt="" />
           </div>

           <div className="col-lg-6">
                        <form>
                            <h2 className='text-center m-5'>Perfect Flavour</h2>

                            <h4 className='text-center'>
                            {
                                register? 'Register Here...': 'Login Here...'
                            }
                            </h4>

                            <div className='mx-5 px-5 mt-3'>
                                {
                                    register &&
                                    <input type="text" placeholder='Username' className='form-control mb-2'/>

                                }
                                    <input type="email" placeholder='email' className='form-control mb-2'/>
                                    <input type="password" placeholder='Password' className='form-control mb-2'/>
                            </div>

                           <div>
                            {
                                register ?
                                <div className='text-center m-4'>
                                    <button className='btn btn-dark m-4'>Register</button>
                                    <p>Already registered? <Link to={'/login'}>Login here...</Link></p>
                                </div>
                                :
                                <div className='text-center m-4'>
                                    <button className='btn btn-dark m-4'>Login</button>
                                    <p>New to here? <Link to={'/register'}>Register here...</Link></p>
                                </div>
                            }
                           </div>
                            
                           
                        </form>
            </div> 
        </div>
    </div>
  )
}

export default Auth