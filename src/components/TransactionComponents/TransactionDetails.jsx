import React, {useContext} from 'react'
import { Col } from 'react-bootstrap'
import Divider from '../Divider/Divider'
import './transaction.scss'
import {TransactionContext} from '../../pages/Transactions/Transaction'

const TransactionDetails = () => {
    const {state:{paymentStatus, paymentMethod, transactionCategory, terminalType, amount, terminalId, referenceID, orgName}} = useContext(TransactionContext)

    const getAmount = () =>{
        if(amount !== ''){
            let res = parseFloat(amount);
            return res/100;
        }else{
            return '0.00'
        }
        
    }
  return (
    <Col className="tran-details">
        <div className="tran-padding">
            <h4 className="text-semi-dark fs-14">Amount</h4>
            <div className="d-flex justify-content-between mt-20">
                <h4 className="fs-18 fw-700 text--darker">NGN {getAmount()}</h4>
                {
                    paymentStatus ? 
                    paymentStatus.toLowerCase() === 'successful' ?
                    <button className="button-success">Successful</button>
                    :
                    paymentStatus.toLowerCase() === 'refunded' ?
                    <button className="button-success">Refunded</button>
                    :
                    <button className="button-failed">Failed</button>
                    :
                    null

                }
            </div>

            <div className="d-flex justify-content-between mt-40 mb-15">
                <h4 className="text-darker fs-12">Reference ID</h4>
                <h4 className="text-darker fs-12 fw-700">{referenceID ? referenceID :'N/A'}</h4>
            </div>

            <Divider />

            <div className="d-flex justify-content-between mt-20 mb-15">
                <h4 className="text-darker fs-12">Terminal ID</h4>
                <h4 className="text-darker fs-12 fw-700">{terminalId ? terminalId : 'N/A'}</h4>
            </div>

            <Divider />

            <div className="d-flex justify-content-between mt-20 mb-15">
                <h4 className="text-darker fs-12">Terminal Device Name</h4>
                <h4 className="text-darker fs-12 fw-700">{terminalType ? terminalType: 'N/A'}</h4>
            </div>

            <Divider />

            <div className="d-flex justify-content-between mt-20 mb-15">
                <h4 className="text-darker fs-12">Business Name</h4>
                <h4 className="text-darker fs-12 fw-700">{orgName ? orgName : 'N/A'}</h4>
            </div>

            <Divider />

            <div className="d-flex justify-content-between mt-20 mb-15">
                <h4 className="text-darker fs-12">Transaction type</h4>
                <h4 className="text-darker fs-12 fw-700">{transactionCategory ? transactionCategory : 'N/A'}</h4>
            </div>

            <Divider />

            <div className="d-flex justify-content-between mt-20 mb-15">
                <h4 className="text-darker fs-12">Channel</h4>
                <h4 className="text-darker fs-12 fw-700">{paymentMethod ? paymentMethod : 'N/A'}</h4>
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
                <h4 className="text-darker fs-12 fw-700">{paymentStatus ? paymentStatus : 'N/A'}</h4>
            </div>

            
        </div>
    </Col>
  )
}

export default TransactionDetails