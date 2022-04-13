import React, {useContext} from 'react'
import { Col } from 'react-bootstrap'
import Divider from '../Divider/Divider'
import './transaction.scss'
import {TransactionContext} from '../../pages/Transactions/Transaction'

const TransactionDetails = () => {
    const {state:{paymentStatus, paymentMethod, transactionCategory, terminalType, amount, terminalId, referenceID}} = useContext(TransactionContext)
  return (
    <Col className="tran-details">
        <div className="tran-padding">
            <h4 className="text-semi-dark fs-14">Amount</h4>
            <div className="d-flex justify-content-between mt-20">
                <h4 className="fs-18 fw-700 text--darker">NGN {amount}</h4>
                <button className="button-success">Successful</button>
            </div>

            <div className="d-flex justify-content-between mt-40 mb-15">
                <h4 className="text-darker fs-12">Reference ID</h4>
                <h4 className="text-darker fs-12 fw-700">{referenceID}</h4>
            </div>

            <Divider />

            <div className="d-flex justify-content-between mt-20 mb-15">
                <h4 className="text-darker fs-12">Terminal ID</h4>
                <h4 className="text-darker fs-12 fw-700">{terminalId}</h4>
            </div>

            <Divider />

            <div className="d-flex justify-content-between mt-20 mb-15">
                <h4 className="text-darker fs-12">Terminal Device Name</h4>
                <h4 className="text-darker fs-12 fw-700">{terminalType}</h4>
            </div>

            <Divider />

            <div className="d-flex justify-content-between mt-20 mb-15">
                <h4 className="text-darker fs-12">Business Name</h4>
                <h4 className="text-darker fs-12 fw-700">Business Name</h4>
            </div>

            <Divider />

            <div className="d-flex justify-content-between mt-20 mb-15">
                <h4 className="text-darker fs-12">Transaction type</h4>
                <h4 className="text-darker fs-12 fw-700">{transactionCategory}</h4>
            </div>

            <Divider />

            <div className="d-flex justify-content-between mt-20 mb-15">
                <h4 className="text-darker fs-12">Channel</h4>
                <h4 className="text-darker fs-12 fw-700">{paymentMethod}</h4>
            </div>

            <Divider />

            <div className="d-flex justify-content-between mt-20 mb-15">
                <h4 className="text-darker fs-12">Wayapos Fees</h4>
                <h4 className="text-darker fs-12 fw-700">7.50</h4>
            </div>

            <Divider />

            <div className="d-flex justify-content-between mt-20 mb-15">
                <h4 className="text-darker fs-12">Date Paid</h4>
                <h4 className="text-darker fs-12 fw-700">Tuesday, 6 July 2021, 7:30pm GMT</h4>
            </div>

            <Divider />

            <div className="d-flex justify-content-between mt-20 mb-15">
                <h4 className="text-darker fs-12">Message</h4>
                <h4 className="text-darker fs-12 fw-700">{paymentStatus}</h4>
            </div>

            
        </div>
    </Col>
  )
}

export default TransactionDetails