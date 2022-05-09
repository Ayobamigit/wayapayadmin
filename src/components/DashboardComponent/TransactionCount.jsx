import React from 'react'
import { Row, Col } from 'react-bootstrap'
import CountCards from './CountCards'
import './dashboard.scss'

const TransactionCount = () => {
  return (
    <div className="transaction-count">
        <Row>
            <Col>
                <CountCards countTitle = "Total Registered Users" countValue="0" />
            </Col>
            <Col>
                <CountCards countTitle = "Total Terminal Issued " countValue="0" />
            </Col>
            <Col>
                <CountCards countTitle = "Total Revenue Acquires" countValue="0" />
            </Col>
            <Col>
                <CountCards countTitle = "Total Revenue Settled" countValue="0" />
            </Col>
            <Col>
                <CountCards countTitle = "Total Revenue Pending" countValue="0" />
            </Col>
            <Col>
                <CountCards countTitle = "Total Revenue Refunded" countValue="0" />
            </Col>
        </Row>
    </div>
  )
}

export default TransactionCount