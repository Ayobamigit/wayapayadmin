import React from 'react'
import './cards.scss'

const TerminalCards = (props) => {
  return (
    <div className="cards">
        <h4 className={`${props.color ? props.color: ''} fs-10 fw-500`}>{props.title}</h4>
        <h4 className={`${props.textColor ? props.textColor: ''} mt-20 fs-24 fw-700`}>{props.value}</h4>
    </div>
  )
}

export default TerminalCards