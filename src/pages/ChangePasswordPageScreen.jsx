import React from 'react'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import { Link } from 'react-router-dom'
const ChangePasswordPageScreen = () => {
  const styles={
    width:'50%',
    margin:'auto',
}
  return (
    <div>
         <div className='text-center mt-5'>
  <img src="images/smarteyes.png"  alt="" srcset="" />
  </div>
         <div className="container login-div border-secondary">
        <div className="row">
        <p className='text-center text-warning fs-3 border-bottom border-secondary'> CHANGE PASSWORD </p> 
            <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="col-lg-12">
                        <form>
                        <div className="form-group mt-2 text-center">
                            <FormInput text="Enter Your New Password" type="password" styles={styles}/>
                            </div>
                            <div className="form-group mt-2 text-center">
                      <FormInput text="Confirm Password" type="password" styles={styles}/>
                      </div>
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