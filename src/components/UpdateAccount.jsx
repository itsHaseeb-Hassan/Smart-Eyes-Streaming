import React from "react";
import FormInput from "./FormInput";

const UpdateAccount = () => {
  const styles = {
    // width:'100%',
    height: "40px",
  };
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className=" site-fbox ms-5">
          <div className="border-bottom border-secondary pt-3">
            <div className="d-flex">
              <div className="w-50">
                <FormInput type="text" text="First Name" styles={styles} />
              </div>
              <div className="ms-4 w-50">
                <FormInput type="text" text="Last Name" styles={styles} />
              </div>
            </div>
            <div className="d-flex">
              <div className="w-50">
                <FormInput type="email" text="Email" styles={styles} />
              </div>
              <div className="ms-4 w-50">
                <FormInput type="text" text="User Name" styles={styles} />
              </div>
            </div>
            <div className="mb-3 w-100">
              <FormInput type="Number" text="Number" styles={styles} />
            </div>
          </div>
          <p className="mt-3 fs-4 text-white">Password Reset</p>
          <div className="w-100">
              <FormInput type="Password" text="Existing Password" styles={styles} />
            </div>
          <div className="d-flex mb-2">
              <div className="w-50">
                <FormInput type="Password" text="Password" styles={styles} />
              </div>
              <div className="ms-4 w-50">
                <FormInput type="Password" text="Confirm Password" styles={styles} />
              </div>
            </div>
        </div>
        <div className="col-sm-12 col-md-6 site-sbox ">
          <div className=" d-flex mt-5  flex-column w-100">
            <img
              src={`images/avatar.png`}
              className="image-avatars rounded-circle mx-auto"
            />
            <button
              type="button"
              className="btn btn-success mt-5 mx-auto w-75 text-white fs-4"
            >
              Update Profile Picture
            </button>
          </div>
        </div>
        <button
              type="button"
              className=" btn logout-btn w-25 h-25 mt-3 text-white fs-5 ms-5 "
            >
              Save Changes
            </button>
      </div>
    </div>
  );
};

export default UpdateAccount;
