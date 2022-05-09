import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {ReactComponent as Qr} from '../../assets/icons/qryellow.svg'
import Cards from '../Cards/Cards'

const AccountRevenue = () => {
  return (
    <Row className="mt-40">
        <Col>
            <Cards cardTitle="Gross Revenue" value="NGN 0.00" color="text-orange" textColor="text-darker" size="fs-20"/>
        </Col>

        <Col>
            <Cards cardTitle="Net Revenue" value="NGN 0.00" color="text-orange" textColor="text-darker" size="fs-20"/>
        </Col>

        <Col>
            <Cards cardTitle="Commissions" value="NGN 0.00" color="text-orange" textColor="text-darker" size="fs-20"/>
        </Col>

        <Col lg={2}>
            <h4 className="text-darker fs-10 font-default fw-700">Your Wayabank Account Number:</h4>
            <div className="d-flex justify-content-start align-items-center account-div">
                <Qr />
                <div className="ml-10">
                    <h4 className="fs-12 text-white m-0">23454564568</h4>
                    <h4 className="fs-10 text-red m-0">Sunday Daniel</h4>
                    <h4 className="fs-05 text-white">Total Payment received: <span className="fs-06 text-semi-white">NGN 5,000.00</span></h4>
                </div>
            </div>
        </Col>

        <Col lg={2}>
            <h4 className="text-darker fs-10 font-default fw-700">Your  Bank Account Number::</h4>
            <div className="d-flex justify-content-start align-items-center account-div-white">
                <div className="ml-10">
                    <h4 className="fs-12 text-darker m-0">23454564568</h4>
                    <h4 className="fs-10 text-red m-0">Sunday Daniel</h4>
                    <h4 className="fs-10 text-default">United Bank of Nigeria (UBA)</h4>
                </div>
            </div>
        </Col>
    </Row>
  )
}

export default AccountRevenue