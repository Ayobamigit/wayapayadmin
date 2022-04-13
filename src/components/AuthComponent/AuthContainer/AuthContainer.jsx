import React from 'react'
import './container.scss'
import { ReactComponent as Logo } from '../../../assets/icons/logo.svg'

const AuthContainer = (props) => {
  return (
    <div className="auth-container">
      <div className="text-center">
        <Logo />
      </div>
        {props.children}
    </div>
  )
}

export default AuthContainer