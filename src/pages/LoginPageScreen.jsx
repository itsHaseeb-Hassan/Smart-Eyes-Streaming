import React from 'react'
import { Link } from 'react-router-dom'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
const LoginPageScreen = () => {
  return (
     <div>
        <div className='text-center mt-5'>
  <img src="images/smarteyes.png" className='mt-5' alt="" srcset="" />
  </div>
         <div className="container login-div border-secondary">
        <div className="row">
        <p className='text-center text-warning fs-3 border-bottom border-secondary'> ADMIN PANEL </p> 
            <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="col-lg-12">
                        <form>
                            <FormInput text="Enter Your Email" type="email"/>
                      <FormInput text="Enter Your Password" type="password"/>

                          <FormButton text="Login" />
                                <div className='mt-3'>
                              <Link to="/Forgot" className='text-center fs-6 text-decoration-none link'><p className='text-secondary'>Forgot Password?<span className='text-white'>Click Here</span></p></Link>
                              </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

     </div>
  )
}

export default LoginPageScreen