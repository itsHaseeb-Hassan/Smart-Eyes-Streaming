import React from 'react'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import { Link } from 'react-router-dom'
const ForgotPageScreen = () => {
  const styles={
    width:'50%',
    margin:'auto',
}
  return (
    <div>
         <div className='text-center mt-5'>
  <img src="images/smarteyes.png" className='mt-5' alt="" srcset="" />
  </div>
         <div className="container forgot-div border-secondary">
        <div className="row">
        <p className='text-center text-warning fs-3 border-bottom border-secondary'> FORGOT PASSWORD </p> 
            <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="col-lg-12">
                        <form>
                        <div className="form-group mt-2 text-center">
                            <FormInput text="Enter Your Email" type="email" styles={styles}/>
                            </div>
                            <Link to="/Verification" className='text-decoration-none'>
                          <FormButton text="Send Code For Verification" />
                          </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ForgotPageScreen