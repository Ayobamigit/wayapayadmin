import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { ForgotPasswordContext } from '../../../pages/Auth/ForgotPassword'
import SubmitLoader from '../../SubmitLoader/SubmitLoader'

const Forgot = () => {
  const navigate = useNavigate()
  const {state:{submit, phoneOrEmail}, onChange, onSendOtp} = useContext(ForgotPasswordContext)
  let disabled = true;
  let error = false; //To display the email error message
  let emailValidate= true; //To control the form validation for the disabled button

  let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

  if(phoneOrEmail === ""){
    error = null
    }else{
        if (!pattern.test(phoneOrEmail)) {

            error = true
        }else{
            emailValidate = false

        }
    }

    if(emailValidate || phoneOrEmail.trim() === ""){
        disabled = true
    }else{
        disabled = false
    }
  return (
    <>
    <div className="login-header">
        <h4 className="fs-18 fw-500 login-text">Forgot Password?</h4>
        <h4 className="fs-14 fw-400 text-default mt-15 lh-20">Please enter your email or phone number to reset your password associated with your wayapay account</h4>

    </div>

    <div className="mt-40 full-width">
        <form onSubmit={onSendOtp}>
            <div className="input-div full-width">
                <label className="text-default fs-14">Email Address <span style={{ color: "red" }}>*</span></label>
                <div className="inputnoBorder input-container">
                    <input 
                        className="input" 
                        type="text" 
                        onChange={onChange}
                        name="phoneOrEmail"
                        required
                    />
                </div>
             {error ? (<h4 className="fs-12 fw-400 text-orange">Please enter a valid email address!</h4>) : null}

            </div>

            <button className="mt-20 orange-button full-width" disabled={disabled}>
                {   submit ?
                    <SubmitLoader className="left-43" />
                    :
                    'Reset Password'
                }
            </button>

            <div className="text-center mt-20">
                <h4 className="fs-16 fw-400 text-default cursor-pointer" onClick={()=>navigate('/login')} >Back to Sign in?</h4>
            </div>
        </form>
    </div>
    </>
  )
}

export default Forgot