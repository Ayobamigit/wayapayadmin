import React, { createContext, useState } from 'react'
import AuthComponent from '../../components/AuthComponent/AuthComponent'
import AuthContainer from '../../components/AuthComponent/AuthContainer/AuthContainer'
import axios from '../../plugins/axios'
import { resetPassword, sendOtp, signIn } from '../../plugins/urls'
import { useNavigate } from 'react-router-dom';
import { toast, Slide } from "react-toastify";
import Forgot from '../../components/AuthComponent/ForgotPassword/Forgot'
import Pin from '../../components/AuthComponent/ForgotPassword/Pin'
import ResetPassword from '../../components/AuthComponent/ForgotPassword/ResetPassword'
import { useRef } from "react";

export const ForgotPasswordContext = createContext()

const ForgotPassword = () => {
    const navigate = useNavigate()
    const [state, setState] = useState({
        step: 'email',
        phoneOrEmail:'',
        newPassword:'',
        password:'',
        submit: false

    })
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();
    const [otp,setOtp]=useState('')

    const {step, phoneOrEmail, newPassword} = state
    const renderPages = ()=>{
        switch(step){
            case 'email':
                return <Forgot />;
            case 'otp':
                return <Pin />;
            case 'reset':
                return <ResetPassword />;
            default:
                return <Forgot />
        }
    }

    const onChange = (e) =>{
        setState(state=>({
            ...state,
           [ e.target.name]: e.target.value
        }))
    }

    const handleChange = (ref,val) => {
        if(val===""){
          ref1.current.value=""
          ref2.current.value=""
          ref3.current.value=""
          ref4.current.value=""
          ref5.current.value=""
          ref6.current.value=""
          setOtp("")
    
        }else{
          setOtp(`${otp}${val}`)
          ref.current.focus();
        }
      
    };

    const handleSubmit=(val)=>{
        setOtp(`${otp}${val}`)
    }

    const onSendOtp = (e)=>{
        e.preventDefault();
        setState(state=>({
            ...state,
            submit: true
        }))
        axios({
            method: 'get',
            url:`${sendOtp}`,
            params: {
                email: phoneOrEmail,
            },
        }).then(res=>{
            if(res.data.status === true){
                toast.success(
                    `An OTP has been sent to the provided email`,
                     { transition: Slide, hideProgressBar: true, autoClose: 3000 } 
                )
                setState(state=>({
                    ...state,
                    submit: false,
                    step: 'otp'
                }))
                
            }
        }).catch(err=>{
            setState(state=>({
                ...state,
                submit: false
            }))
            toast.error(`${err.response.data.message}`, {
                transition: Slide,
                hideProgressBar: true,
                autoClose: 3000,
            });
        })
    }

    const onClickNext = (e)=>{
        e.preventDefault();

        setState(state=>({
            ...state,
            step: 'reset'
        }))
    }

    const onResetPassword = (e)=>{
        e.preventDefault()
        setState(state=>({
            ...state,
            submit: true
        }))
        let reqBody ={
            newPassword,
            otp,
            phoneOrEmail
        }
        axios({
            method: 'post',
            url: `${resetPassword}`,
            data: reqBody
        }).then(res=>{
            setState(state=>({
                ...state,
                submit: false
            }))
            if(res.data.status === true){
                toast.success(
                    `Password reset successfull, kindly login with new password`,
                     { transition: Slide, hideProgressBar: true, autoClose: 3000 } 
                )
                navigate('/login')
            }
        }).catch(err=>{
            setState(state=>({
                ...state,
                submit: false
            }))
            toast.error(`${err.response.data.message}`, {
                transition: Slide,
                hideProgressBar: true,
                autoClose: 3000,
            });
        })
    }
  return (
    <AuthComponent>
        <AuthContainer>
            <ForgotPasswordContext.Provider value={{
                onChange,
                onSendOtp,
                onClickNext,
                onResetPassword,
                handleChange,
                handleSubmit,
                onClickNext,
                state,
                ref1,
                ref2,
                ref3,
                ref4,
                ref5,
                ref6,
                otp
            }}>
                {renderPages()}
            </ForgotPasswordContext.Provider>
        </AuthContainer>
    </AuthComponent>
  )
}

export default ForgotPassword