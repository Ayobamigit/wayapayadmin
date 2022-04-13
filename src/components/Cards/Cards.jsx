import React from 'react'
import './cards.scss'

const Cards = (props) => {
  return (
    <div className="cards">
        <h4 className={`${props.color ? props.color: ''} fs-14 fw-700`}>{props.cardTitle}</h4>
        <h4 className={`${props.textColor ? props.textColor: ''} ${props.size ? props.size : 'fs-24'} fw-700 mt-20`}>NGN {props.value}</h4>
        <h4 className={`${props.date ? 'text-semi-dark': ''} fs-12 fw-400 mt-20 m-0`}>{props.date}</h4>
    </div>
  )
}

export default Cards