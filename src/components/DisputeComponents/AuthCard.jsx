import React from 'react'
import './dispute.scss'

const AuthCard = (props) => {
  return (
    <div className="auth-card">
        <h4 className={`${props.color ? props.color: ''} fs-14 fw-700`}>{props.cardTitle}</h4>
        <h4 className={`${props.color ? props.color: ''} fs-24 fw-700 mt-20`}>{props.value}</h4>
    </div>
  )
}

export default AuthCard