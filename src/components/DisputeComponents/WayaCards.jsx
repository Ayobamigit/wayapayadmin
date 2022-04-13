import React from 'react'
import './dispute.scss'

const WayaCards = (props) => {
  return (
    <div className = "waya-cards text-center">
        <h4 className={`fs-24 fw-700 ${props.color ? props.color : ''}`}>{props.number}</h4>
        <h4 className={`fs-12 fw-700 mt-15 ${props.color ? props.color : ''}`}>TOTAL {props.title}</h4>
    </div>
  )
}

export default WayaCards