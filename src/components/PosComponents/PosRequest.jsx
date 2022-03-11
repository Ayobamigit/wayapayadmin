import React from 'react'
import { Row, Col, Table, Container } from 'react-bootstrap'
import {FiSearch} from 'react-icons/fi'
import {IoFilterOutline} from 'react-icons/io5'
import {BiLinkExternal} from 'react-icons/bi'
import {ReactComponent as Pos} from '../../assets/icons/pos-white.svg' 
import {ReactComponent as Plus} from '../../assets/icons/plus.svg' 
import {useNavigate } from 'react-router'
import TerminalCards from '../Cards/TerminalCards'

const PosRequest = () => {
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
                              <input className="input ml-10" placeholder="Search with terminal id or merchant id" />
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
                      <div className="d-flex justify-content-center align-items-center ">
                          <div className="request-button">
                              <Pos className="mr-5" />
                              ISSUE NEW TERMINAL
                          </div>
                      </div>
  
                  </div>
                  
              </div>
          </div>
  
          <Container fluid>
              <Row className="mt-40 width-50">
                  <Col>
                      <TerminalCards title="Total Terminal Request" value="3" color="text-darker fs-12" textColor="text-darker"/>
                  </Col>
                  <Col>
                      <TerminalCards title="Total Issued Approved" value="3" color="text-darker fs-12" textColor="text-darker"/>
                  </Col>
                  <Col>
                      <TerminalCards title="Total Pending Rejected" value="1" color="text-darker fs-12" textColor="text-darker"/>
                  </Col>
              </Row>
  
              <div className="data-table mt-40">
                  <Table responsive borderless className="bg-inherit">
                      <thead>
                          <tr style={{backgroundColor: '#F9843533', borderRadius: '5px'}}>
                              <th>USER ID</th>
                              <th>REQUESTED BY</th>
                              <th>REQUESTED for</th>
                              <th>terminal Name</th>
                              <th>terminal cost</th>
                              <th>amount paid</th>
                              <th>amount left</th>
                          </tr>
                      </thead>
  
                      <tbody>
                          <tr>
                              <td>44aa22f4-fc64-5b</td>
                              <td>reqestemail@example.com</td>
                              <td>BusnessName1</td>
                              <td>NEXGO</td>
                              <td>NGN 1000,000.00</td>
                              <td>NGN 50,000.00</td>
                              <td>NGN 50,000.00</td>
                          </tr>
  
                          <tr>
                              <td>44aa22f4-fc64-5b</td>
                              <td>reqestemail@example.com</td>
                              <td>BusnessName1</td>
                              <td>NEXGO</td>
                              <td>NGN 1000,000.00</td>
                              <td>NGN 50,000.00</td>
                              <td>NGN 50,000.00</td>
                          </tr>
  
                          <tr>
                              <td>44aa22f4-fc64-5b</td>
                              <td>reqestemail@example.com</td>
                              <td>BusnessName1</td>
                              <td>NEXGO</td>
                              <td>NGN 1000,000.00</td>
                              <td>NGN 50,000.00</td>
                              <td>NGN 50,000.00</td>
  
                          </tr>
  
                          <tr>
                              <td>44aa22f4-fc64-5b</td>
                              <td>reqestemail@example.com</td>
                              <td>BusnessName1</td>
                              <td>NEXGO</td>
                              <td>NGN 1000,000.00</td>
                              <td>NGN 50,000.00</td>
                              <td>NGN 50,000.00</td>
                          </tr>
  
                          <tr>
                              <td>44aa22f4-fc64-5b</td>
                              <td>reqestemail@example.com</td>
                              <td>BusnessName1</td>
                              <td>NEXGO</td>
                              <td>NGN 1000,000.00</td>
                              <td>NGN 50,000.00</td>
                              <td>NGN 50,000.00</td>
                          </tr>
                      </tbody>
                  </Table>
              </div>
          </Container>
      </>
    )
}

export default PosRequest