import React from 'react'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import { Link } from 'react-router-dom'
const ChangePasswordPageScreen = () => {
  return (
    <div>
         <div className='text-center mt-5'>
  <img src="images/smarteyes.png" className='mt-5' alt="" srcset="" />
  </div>
         <div className="container login-div border-secondary">
        <div className="row">
        <p className='text-center text-warning fs-3 border-bottom border-secondary'> CHANGE PASSWORD </p> 
            <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="col-lg-12">
                        <form>
                            <FormInput text="Enter Your New Password" type="password"/>
                      <FormInput text="Confirm Password" type="password"/>
                        <Link to="/">
                          <FormButton text="Save Changes" />
                          </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChangePasswordPageScreen