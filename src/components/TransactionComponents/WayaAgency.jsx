import React from 'react'
import { Row, Col, Table, Container } from 'react-bootstrap'
import {FiSearch} from 'react-icons/fi'
import {IoFilterOutline} from 'react-icons/io5'
import {BiLinkExternal} from 'react-icons/bi'
import {useNavigate } from 'react-router'
import AccountCard from '../Cards/AccountCard'

const WayaAgency = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className="tableHeaders d-flex justify-content-start align-items-center">
        <div className="d-flex justify-content-between filter-contents align-items-center">
                <div className="d-flex justify-content-start align-items-center width-50">
                    <div className="d-flex justify-content-center align-items-center ">
                        <div className="d-flex justify-content-center align-items-center ">
                            <IoFilterOutline size={15} style={{marginRight:15}} />
                            <h4 className="fs-14 text-darker mt-05">Filter</h4>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center filter-search ml-22">
                        <div className="input_Search d-flex justify-content-center align-items-center">
                            <div className="justify-content-center align-items-center"><FiSearch color="#FF4400" /></div>
                            <input className="input ml-10" placeholder="search with reference id" />
                        </div>

                        {/* <div className="d-flex justify-content-center align-items-center filter-search"> */}
                            <button className="orange-button ml-10">Search</button>
                        {/* </div> */}
                    </div>

                    
                    
                </div>
                <div className="d-flex justify-content-start align-items-center ">
                    <div className="d-flex justify-content-center align-items-center ">
                        <div className="export-button">
                            <BiLinkExternal color={'#fff'} className="mr-5" />
                            Export data
                        </div>
                    </div>

                </div>
        </div>
    </div>

        <Container fluid>
            <Row className="mt-40">
                <Col>
                    <AccountCard accountNumber="232333432334" value="NGN 2850.75" number="1"/>
                </Col>
                <Col>
                    <AccountCard accountNumber="232333432334" value="NGN 3453.75" number="2" />
                </Col>
            </Row>

            <div className="data-table mt-40">
                <Table responsive borderless className="bg-inherit">
                    <thead>
                        <tr style={{backgroundColor: '#F9843533', borderRadius: '5px'}}>
                            <th>Reference Id</th>
                            <th>Transaction Category</th>
                            <th>Terminal Type</th>
                            <th>Payment Method</th>
                            <th>Amount</th>
                            <th>Created At</th>
                            <th>Payment Status</th>
                            <th>action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>44aa22f4-fc64-5b</td>
                            <td>Cashout</td>
                            <td>Nexgo</td>
                            <td>Card</td>
                            <td>NGN 2000</td>
                            <td>Tue. 9th Sept 2021 07:04 AM (WAT)</td>
                            <td><span className="tabactive">Successful</span></td>
                            <td><span className="tabtransparent" onClick={()=>{navigate('/transaction/1')}}>View More</span></td>
                        </tr>

                        <tr>
                            <td>44aa22f4-fc64-5b</td>
                            <td>Cashout</td>
                            <td>Nexgo</td>
                            <td>Card</td>
                            <td>NGN 2000</td>
                            <td>Tue. 9th Sept 2021 07:04 AM (WAT)</td>
                            <td><span className="tabactive">Successful</span></td>
                            <td><span className="tabtransparent">View More</span></td>
                        </tr>

                        <tr>
                        <td>44aa22f4-fc64-5b</td>
                            <td>Cashout</td>
                            <td>Nexgo</td>
                            <td>Card</td>
                            <td>NGN 2000</td>
                            <td>Tue. 9th Sept 2021 07:04 AM (WAT)</td>
                            <td><span className="tabdamaged">Abandoned</span></td>
                            <td><span className="tabtransparent">View More</span></td>

                        </tr>

                        <tr>
                            <td>44aa22f4-fc64-5b</td>
                            <td>Cashout</td>
                            <td>Nexgo</td>
                            <td>Card</td>
                            <td>NGN 2000</td>
                            <td>Tue. 9th Sept 2021 07:04 AM (WAT)</td>
                            <td><span className="tabdanger">Failed</span></td>
                            <td><span className="tabtransparent">View More</span></td>

                        </tr>

                        <tr>
                            <td>44aa22f4-fc64-5b</td>
                            <td>Cashout</td>
                            <td>Nexgo</td>
                            <td>Card</td>
                            <td>NGN 2000</td>
                            <td>Tue. 9th Sept 2021 07:04 AM (WAT)</td>
                            <td><span className="tabpending">Refunded</span></td>
                            <td><span className="tabtransparent">View More</span></td>

                        </tr>
                    </tbody>
                </Table>
            </div>
        </Container>
    </>
  )
}

export default WayaAgency