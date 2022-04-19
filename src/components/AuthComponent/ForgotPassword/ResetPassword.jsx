import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { ForgotPasswordContext } from '../../../pages/Auth/ForgotPassword'
import SubmitLoader from '../../SubmitLoader/SubmitLoader'

const ResetPassword = () => {
    const navigate = useNavigate()
    const {state:{password, newPassword, submit}, onResetPassword, onChange} = useContext(ForgotPasswordContext)
    let disabled = true;
    let error = false


    if(password !== '' && newPassword !== ''){
        if(password !== newPassword){
            error = true
            disabled=true
        }
        else{
            disabled = false
        }
    }
  return (
    <>
    <div className="login-header">
        <h4 className="fs-18 fw-500 login-text">Reset Password</h4>
        <h4 className="fs-14 fw-400 text-default mt-15 lh-20">Fill in your new password</h4>

    </div>

    <div className="mt-40 full-width">
        <form onSubmit={onResetPassword}>
            <div className="input-div full-width">
                <label className="text-default fs-14">Password <span style={{ color: "red" }}>*</span></label>
                <div className="inputnoBorder input-container">
                    <input 
                        className="input" 
                        type="password" 
                        onChange={onChange}
                        name="password"
                        required
                    />
                </div>

            </div>

            <div className="input-div full-width">
                <label className="text-default fs-14">Confirm Password <span style={{ color: "red" }}>*</span></label>
                <div className="inputnoBorder input-container">
                    <input 
                        className="input" 
                        type="password" 
                        onChange={onChange}
                        name="newPassword"
                        required
                    />
                </div>
                {error ? (<h4 className="fs-14 fw-400 text-orange mt-15">Passwords don't match!!</h4>) : null}
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

export default ResetPassword