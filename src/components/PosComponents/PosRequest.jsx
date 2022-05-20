import React, {useEffect, useState} from 'react'
import { Row, Col, Table, Container } from 'react-bootstrap'
import {FiSearch} from 'react-icons/fi'
import {IoFilterOutline} from 'react-icons/io5'
import {BiLinkExternal} from 'react-icons/bi'
import {MdCheckCircle, MdCancel} from 'react-icons/md'
import {ReactComponent as Pos} from '../../assets/icons/pos-white.svg' 
import {ReactComponent as More} from '../../assets/icons/more.svg' 
import {useNavigate } from 'react-router'
import TerminalCards from '../Cards/TerminalCards'
import { updateTerminalRequests, viewAllTerminalRequests } from '../../plugins/urls'
import axios from '../../plugins/axios'
import { toast, Slide } from "react-toastify";
import NoResultFound from '../NoResultFound/NoResultFound'
import moment from 'moment'
import Swal from '../Swal/swal'


const PosRequest = () => {
    const navigate = useNavigate()
    const {user} = JSON.parse(localStorage.getItem('userDetails'));

    const [state, setState] = useState({
        from:'',
        to:'',
        pageNo:0,
        pageSize: 20,
        terminalList: []
    })
  
    const {from, to, pageNo, pageSize, terminalList} = state;
  
  

    useEffect(()=>{
        getTerminals()
    },[])
    
    const getTerminals = ()=>{
        let reqBody = {
            from,
            to,
            pageNo,
            pageSize,
            paramList:[
                {
                 userid: user? user.id : ''
                }
            ]
        }
    
        axios({
            method: 'post',
            url: `${viewAllTerminalRequests}`,
            data: reqBody
        }).then(res=>{
            if(res.data.respCode === 0){
                setState(state=>({
                    ...state,
                    terminalList: res.data.respBody.content
                }))
            }
        })
        .catch(err=>{
        toast.error(`${err.response.data.message}`, {
            transition: Slide,
            hideProgressBar: true,
            autoClose: 3000,
          });
    })
    }

    const onUpdateRequest = (id, status) =>{
        let reqBody = {
            requestId: id,
            requestStatus: status
        }
        if(status){
            if(status.toLowerCase()=== 'approved'){
                Swal.fire({
                    title: 'Are you sure?',
                    text: "Are you sure you want to approve this terminal request!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes' 
                })
                .then(remove=>{
                    if(remove.isConfirmed){
                        axios({
                            method: 'post',
                            url: `${updateTerminalRequests}`,
                            data: reqBody
                        }).then(res=>{
                            if(res.data.respCode === 0){
                                // setState(state=>({
                                //     ...state,
                                //     submit: false,
                                //     add: false
                                // }))
                
                                toast.success(`Terminal request approved!`, {
                                    transition: Slide,
                                    hideProgressBar: true,
                                    autoClose: 3000,
                                });
                                getTerminals()
                            }
                        })
                        .catch(err=>{
                            toast.error(`${err.response.data.message}`, {
                                transition: Slide,
                                hideProgressBar: true,
                                autoClose: 3000,
                            });
                        })
                    }
                })
            }
            else if(status.toLowerCase()=== 'reject'){
                Swal.fire({
                    title: 'Are you sure?',
                    text: "Are you sure you want to reject this terminal request!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes' 
                })
                .then(remove=>{
                    if(remove.isConfirmed){
                        let reqBody={
                            terminalId: id,
                            status:'ACTIVATED'
                        }
                        axios({
                            method: 'post',
                            url: `${updateTerminalRequests}`,
                            data: reqBody
                        }).then(res=>{
                            if(res.data.respCode === 0){
                                toast.success(`Terminal request rejected!`, {
                                    transition: Slide,
                                    hideProgressBar: true,
                                    autoClose: 3000,
                                });
                                getTerminals()
                            }
                        })
                        .catch(err=>{
                            toast.error(`${err.response.data.message}`, {
                                transition: Slide,
                                hideProgressBar: true,
                                autoClose: 3000,
                            });
                        })
                    }
                }) 
            }
        }
        
    
        
    }
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
                              <th>status</th>
                              <th>request date</th>
                              <th>action</th>

                          </tr>
                      </thead>
                      <tbody>
                    {
                        terminalList?
                        terminalList.length === 0 ?
                            <NoResultFound />
                            :
                            terminalList.map((terminal, i)=>{
                                const{userID, requestedBy, subTotal, partPaymentAmount, status, dateCreated, id} = terminal;
                                const statusClass = () =>{
                                    if(status){
                                        if(status.toLowerCase() === 'successful'){
                                            return 'tabactive'
                                        }
                                        else if(status.toLowerCase() === 'refunded'){
                                            return 'tabpending'
                                        } 
                                        else if(status.toLowerCase() === 'abandoned'){
                                            return 'tabdamaged'
                                        }
                                        else{
                                            return 'tabdanger'
                                        }
                                    }
                                }

                                return(
                                    <tr key={i}>
                                    <td>{userID}</td>
                                    <td>{requestedBy}</td>
                                    <td>BusnessName1</td>
                                    <td>NEXGO</td>
                                    <td>{subTotal}</td>
                                    <td>{partPaymentAmount}</td>
                                    <td>{partPaymentAmount}</td>
                                    <td><span className={`${statusClass()}`}>{status}</span></td>
                                    <td>{dateCreated ? moment(new Date(dateCreated)).format('D/MM/YYYY') : 'N/A'}</td>
                                    <td><span onClick={()=>{onUpdateRequest(id, 'APPROVED')}}><MdCheckCircle size={25} style={{color:'#05B862'}} /> </span> <span  onClick={()=>{onUpdateRequest(id, 'REJECT')}}><MdCancel size={25} style={{color: '#ff4400'}} /></span></td>
                                </tr>
                                )
                            })
                        :
                        <NoResultFound />
                    }
                        
                    </tbody>
                      {/* <tbody>
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
                      </tbody> */}
                  </Table>
              </div>
          </Container>
      </>
    )
}

export default PosRequest