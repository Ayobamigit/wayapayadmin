import React, { useContext } from 'react'
import { RegisterContext } from '../../../pages/AuthPages/Register'
// import {RiErrorWarningFill} from 'react-icons/ri'
import SubmitLoader from '../../SubmitLoader/SubmitLoader'

const PasswordForm = () => {
    const {state:{submit, password, passwordConfirm}, onCreateAccount, onChange} = useContext(RegisterContext)
    let disabled = true;
    let error = null
    let passwordStrength=null //To confirm the password strength
    let passValidate= false; //To control the form validation for the disabled button


    // let pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    let pattern = new RegExp("^(?=.{8,})");

    if(password){
        if (!pattern.test(password)) {

            passwordStrength = (<h4 className="fs-12 fw-400 text-orange" >Password not strong! Ensure your password contains at least 8 characters</h4>)
        }else{
            passwordStrength = null
            passValidate = true
        }
    }



    if(password !== '' && passwordConfirm !== ''){
        if(passValidate){
            if(password !== passwordConfirm){
                error = (<h4 className="fs-12 fw-400 text-orange">Passwords don't match!!!</h4>)
                disabled=true
            }
            else{
                disabled = false
            }
        }
        
    }
    return (
      <>
      <div className="input-div full-width">
          <label className="text-default fs-14">Referal Code</label>
          <div className="input-container">
              <input 
                  className="input" 
                  type="text" 
                  name="referenceCode"
                //   required
                  onChange={onChange}
              />
          </div>
      </div>
      <div className="input-div full-width">
          <label className="text-default fs-14">Create Password * <span style={{ color: "red" }}>*</span></label>
          <div className="input-container">
              <input 
                  className="input" 
                  type="password" 
                  name="password"
                  required
                  onChange={onChange}
              />
          </div>
          {passwordStrength}
      </div>
      <div className="input-div full-width">
          <label className="text-default fs-14">Confirm Password <span style={{ color: "red" }}>*</span></label>
          <div className="input-container">
              <input 
                  className="input" 
                  type="password" 
                  name="passwordConfirm"
                  required
                  onChange={onChange}
              />
          </div>
        {error}
      </div>

  
        {/* <div>
            <h4 className="fs-12 fw-400 text-orange" >
                <span><RiErrorWarningFill size={24} color='#FF4400' /></span>
                Password must contain at least 8 characters, an uppercase letter,a lowercase letter, a number and a special character.
            </h4>
        </div> */}

        <div>
            <h4 className=" mt-20 fs-12 fw-400 text-default">I consent to the collection and processing of my personal data in line with data regulations as described in the <span className="text-orange">Wayapos Privacy policy</span> </h4>
        </div>

        <button className="mt-20 orange-button full-width" onClick={onCreateAccount} disabled={disabled}>
            {
                submit ?
                <SubmitLoader className="left-43" />
                :
                'Create Account'
            }
        </button>
      </>
    )
}

export default PasswordForm