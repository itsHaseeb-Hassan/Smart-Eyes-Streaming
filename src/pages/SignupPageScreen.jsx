import React from 'react'
import { Link } from 'react-router-dom'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
const SignupPageScreen = () => {
    const styles={
        width:'50%',
        margin:'auto',
        height:'40px',
    }
  return (
     <div>
        <div className='text-center mt-5'>
  <img src="images/smarteyes.png" className='mt-5' alt="" srcset="" />
  </div>
         <div className="container login-div border-secondary">
        <div className="row">
        <p className='text-center text-warning fs-3 border-bottom border-secondary'> SIGN UP  </p> 
            <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="col-lg-12">
                        <form >
                        <div className="form-group mt-2 text-center">
                            <FormInput text="Enter Your Email" type="email" name="email" styles={styles}/>
                            </div>
                            <div className="form-group mt-2 text-center">
                      <FormInput text="Enter Your Password" type="password" name="password" styles={styles} />
                      </div>
                          <FormButton text="SignUp" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

     </div>
  )
}

export default SignupPageScreen
