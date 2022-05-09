import React from 'react'
import './dashboard.scss'

const CountCards = (props) => {
  return (
    <div className="count-card text-center">
        <h4 className="text-default fs-12">{props.countTitle}</h4>
        <h4 className="text-darker fs-12 fw-700">{props.countValue}</h4>
    </div>
  )
}

export default CountCards