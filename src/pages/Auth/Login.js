import React, { useState } from 'react'
import AuthComponent from '../../components/AuthComponent/AuthComponent'
import AuthContainer from '../../components/AuthComponent/AuthContainer/AuthContainer'
import SubmitLoader from '../../components/SubmitLoader/SubmitLoader'
import axios from '../../plugins/axios'
import { signIn } from '../../plugins/urls'
import { useNavigate } from 'react-router-dom';
import { toast, Slide } from "react-toastify";


const Login = () => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        emailOrPhoneNumber:'',
        password:'',
        submit: false
    })

    const {submit, emailOrPhoneNumber, password} = state

    const onChange = (e) =>{
        setState(state=>({
            ...state,
           [ e.target.name]: e.target.value
        }))
    }

    const onLogin = (e)=>{
        e.preventDefault();
        setState(state=>({
            ...state,
            submit: true
        }))

        let reqBody = {
            emailOrPhoneNumber,
            password
        }

        axios({
            method: 'post',
            url: `${signIn}`,
            data: reqBody
        }).then(res=>{
            console.log(res.data)
            setState(state=>({
                ...state,
                submit: false
            }))
            if(res.data.status === true){
                
                const {token, user} = res.data.data;

                localStorage.setItem('userDetails', JSON.stringify({
                    token,
                    user                      
                }))
                localStorage.setItem('reloadCount',0)
                navigate('/dashboard')
            }else{
                toast.error(`${res.data.message}`, {
                    transition: Slide,
                    hideProgressBar: true,
                    autoClose: 3000,
                  });
            }

        }).catch(err=>{
            setState(state=>({
                ...state,
                submit: false,
            }))
            console.log(err)
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
            <div className="login-header">
                <h4 className="fs-24 fw-500 login-text">Sign In</h4>
            </div>

            <div className="mt-40 full-width">
                <form onSubmit={onLogin}>
                    <div className="input-div full-width">
                        <label className="text-default fs-14">Email or Phone number <span style={{ color: "red" }}>*</span></label>
                        <div className="inputnoBorder input-container">
                            <input 
                                className="input" 
                                type="text" 
                                onChange={onChange}
                                name="emailOrPhoneNumber"
                                required
                            />
                        </div>
                    </div>

                    <div className="input-div full-width">
                        <label className="text-default fs-14">Password <span style={{ color: "red" }}>*</span></label>
                        <div className="inputnoBorder input-container">
                            <input 
                                className="input" 
                                type="password" 
                                name="password"
                                onChange={onChange}
                                required
                            />
                        </div>
                    </div>

                    <button className="mt-20 orange-button full-width">
                        {   submit ?
                            <SubmitLoader className="left-43" />
                            :
                            'Log in'
                        }
                    </button>

                    <div className="text-center mt-20">
                        {/* <h4 className="fs-16 fw-400 text-default">Don't have an account? <span className="text-orange cursor-pointer" onClick={()=>navigate('/register')}> Sign up instead </span></h4> */}
                        <h4 className="mt-20 fs-16 text-orange fw-400 cursor-pointer" onClick={()=>navigate('/forgot-password')}>Forgot your password?</h4>
                    </div>
                </form>
            </div>
        </AuthContainer>

    </AuthComponent>
  )
}

export default Login