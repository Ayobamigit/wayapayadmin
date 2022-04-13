import React from 'react';
import './auth.scss'

const AuthComponent = (props) => {
  return (
    <div className="auth-background">
        {props.children}
    </div>
  )
}

export default AuthComponent