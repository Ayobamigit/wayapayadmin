import React, { useContext } from 'react'
import { Col } from 'react-bootstrap'
import { TransactionContext } from '../../pages/Transactions/Transaction'
import Divider from '../Divider/Divider'
import './transaction.scss'

const CardDetails = () => {
    const {state:{authCode, transactionLocation, scheme, processedBy, cardNo}} = useContext(TransactionContext)
  return (
    <Col className="card-details">
        <div className="card-padding">
            <h4 className="fs-14 text-darker">Analytics</h4>

            <Divider />

            <div className="d-flex justify-content-between mt-40">
                <div>
                    <h4 className="text-darker fs-14 fw-700">Card Type</h4>
                    <h4 className="text-darker fs-12">{scheme ? scheme : 'N/A'}</h4>
                </div>

                <div>
                    <h4 className="text-darker fs-14 fw-700">Card Number</h4>
                    <h4 className="text-darker fs-12">{cardNo ? cardNo : 'N/A'}</h4>
                </div>
            </div>

            <div className="d-flex justify-content-between mt-40 mb-15">
                <div>
                    <h4 className="text-darker fs-14 fw-700">Authorization</h4>
                    <h4 className="text-darker fs-12">{authCode ? authCode : 'N/A'}</h4>
                </div>

                <div className="text-end">
                    <h4 className="text-darker fs-14 fw-700">Issuing Bank & Country</h4>
                    <h4 className="text-darker fs-12">United Bank for Africa (UBA) (NGN)</h4>
                </div>
            </div>

            <div className="d-flex justify-content-between mt-40 mb-15">
                <div>
                    <h4 className="text-darker fs-14 fw-700">IP Address</h4>
                    <h4 className="text-darker fs-12">{transactionLocation ? transactionLocation : 'N/A'}</h4>
                </div>

                <div className="text-end">
                    <h4 className="text-darker fs-14 fw-700">Payment Processor</h4>
                    <h4 className="text-darker fs-12">{processedBy ? processedBy : 'N/A'}</h4>
                </div>
            </div>

            <Divider />
        </div>
    </Col>
  )
}

export default CardDetails