import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './dashboard.scss'
import {ReactComponent as Naira} from '../../assets/icons/naira_balance.svg'

const DashboardCard = () => {
  return (
    <Row className="mt-40">
        <Col>
            <div className="settlement-card font-default">
                <div className="d-flex justify-content-between">
                    <div>
                        <h4 className="fs-18 text-darker fw-700"><Naira className="mr-5"/> 0.00</h4>
                        <h4 className="fs-14 text-orange cursor-pointer">See all settlements</h4>
                    </div>
                    <div>
                        <h4 className="fs-18 text-orange fw-700">Last Settlement</h4>
                        <h4 className="fs-14 text-semi-dark mt-20">No settlements yet</h4>
                    </div>
                </div>
            </div>
        </Col>
        <Col>
            <div className="settlement-card font-default">
                <div className="d-flex justify-content-between">
                    <div>
                        <h4 className="fs-18 text-darker fw-700"><Naira className="mr-5"/> 50,000</h4>
                        <h4 className="fs-14 text-orange cursor-pointer">See all settlements</h4>
                    </div>
                    <div>
                        <h4 className="fs-18 text-orange fw-700">Next Settlement</h4>
                        <h4 className="fs-14 text-semi-dark mt-20">Due on 06 July, 2021</h4>
                    </div>
                </div>
            </div>
        </Col>
    </Row>
  )
}

export default DashboardCard