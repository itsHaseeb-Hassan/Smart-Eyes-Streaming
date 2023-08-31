import React from 'react'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import { Link } from 'react-router-dom'
const VerificationPageScren = () => {
  return (
    <div>
         <div className='text-center mt-5'>
  <img src="images/smarteyes.png" className='mt-5' alt="" srcset="" />
  </div>
         <div className="container forgot-div border-secondary">
        <div className="row">
        <p className='text-center text-warning fs-3 border-bottom border-secondary'> VERIFICATION CODE </p> 
            <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="col-lg-12">
                        <form>
                            <FormInput text="Enter Your Verification Code" type="number"/>
                            <Link to="/ChangePassword">
                          <FormButton text="Confirm" />
                          </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VerificationPageScren