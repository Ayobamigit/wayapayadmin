import React from 'react'
import './cards.scss'
import {ReactComponent as QR} from '../../assets/icons/qr.svg'
import {ReactComponent as Check} from '../../assets/icons/check.svg'
import {ReactComponent as Copy} from '../../assets/icons/copy.svg'

const AccountCard = (props) => {
  return (
    <div className="cards card-extra-padding">
        <div className="d-flex justify-content-start">
            <QR />
            <h4 className="text-orange fs-16 fw-700 ml-10">{props.accountNumber}</h4>
            <Copy className="ml-10 cursor-pointer" />
        </div>

        <div className="mt-15">
          <h4 className="fs-12 text-darker fw-500 m-0"> Account balance {props.number}/3</h4>
          <h4 className="fs-20 text-darker fw-700 mt-05">{props.value}</h4>
        </div>

        <div className="d-flex justify-content-end">
            <h4 className="fs-12 text-semi-dark fw-700 cursor-pointer mt-05">Click to view Transaction</h4>
            <Check className="ml-10" />
        </div>
    </div>
  )
}

export default AccountCard