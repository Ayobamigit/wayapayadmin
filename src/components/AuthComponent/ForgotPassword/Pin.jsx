import React, { useContext } from 'react'
import { ForgotPasswordContext } from '../../../pages/Auth/ForgotPassword'

const Pin = () => {
    const {handleChange, onSendOtp, handleSubmit, onClickNext, ref1, ref2, ref3, ref4, ref5, ref6, otp} = useContext(ForgotPasswordContext)
  let disabled = true;

  if(otp.length < 6){
    //   debugger
        disabled = true
    }else{
        disabled = false
    }
  return (
    <>
     <div className="login-header">
        <h4 className="fs-24 fw-500 login-text">Reset your Password</h4>

        <h4 className="fs-16 fw-400 text-default mt-20">Please Input the OTP sent to your email address.</h4>
    </div>

    <div className="mt-40 full-width">
        <form onSubmit={onClickNext}> 
            <div className="inputsHolder">
                <div className=" d-flex justify-content-between full-width text-center">
                    <input type="number" className='single'  ref={ref1} onKeyUp={(e)=>handleChange(ref2,e.target.value)}/>
                    <input type="number" className='single'  ref={ref2} onKeyUp={(e)=>handleChange(ref3,e.target.value)}/>
                    <input type="number" className='single'  ref={ref3} onKeyUp={(e)=>handleChange(ref4,e.target.value)}/>
                    <input type="number" className='single'  ref={ref4} onKeyUp={(e)=>handleChange(ref5,e.target.value)}/>
                    <input type="number" className='single'  ref={ref5} onKeyUp={(e)=>handleChange(ref6,e.target.value)}/>
                    <input type="number" className='single'  ref={ref6} onKeyUp={(e)=>{
                        ref6.current.blur()
                        // setOtp(`${otp}${e.target.value}`)
                        handleSubmit(e.target.value)
                    
                    }}/>
                </div>
            </div>

            <button className="mt-40 orange-button full-width" disabled={disabled}>
                    Proceed
            </button>

            <div className="text-center mt-20">
                <h4 className="mt-20 fs-16 text-orange fw-400">Did not get OTP? <span className="fw-700 cursor-pointer" onClick={onSendOtp} >Resend</span></h4>
            </div>
        </form>
    </div>
    </>
  )
}

export default Pin