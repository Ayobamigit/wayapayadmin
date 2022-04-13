import React, {useState, useEffect} from 'react'
import { Row, Col, Table, Container} from 'react-bootstrap'
import {FiSearch} from 'react-icons/fi'
import {IoFilterOutline} from 'react-icons/io5'
import {BiLinkExternal} from 'react-icons/bi'
import {VscAdd} from 'react-icons/vsc'
import {useNavigate } from 'react-router'
import {MdDelete} from 'react-icons/md'
import AuthCard from './AuthCard'
import CreateDispute from './CreateDispute'
import Modal from '../Modal/Modal'
import NoResultFound from '../NoResultFound/NoResultFound'
import axios from '../../plugins/axios'
import { toast, Slide } from "react-toastify"
import { allAuthDisputes, createAuthDisputes } from '../../plugins/urls'
import moment from "moment"

const AuthDispute = () => {
    const {user} = JSON.parse(localStorage.getItem('userDetails'));
    const navigate = useNavigate()
    const[state,setState] = useState({
        add: false,
        authDisputes: [],
        pageNo: 0,
        pageSize: 20,
        subject: '',
        description:'',
        attachment:'',
        submit: false
    })

    const {subject, description, submit, attachment, add, authDisputes, pageNo, pageSize} = state
    const showModal = () =>{
        if(!add){
            setState(state=>({
                ...state,
                add: true,
            }))
        }else{
            setState(state=>({
                ...state,
                add: false,
            }))
        }    
    }

    const onChange = (e) =>{
        setState(state=>({
            ...state,
           [ e.target.name]: e.target.value
        }))
    }

    const onFileChange = (event) => {
        let file = event.target.files[0];
        let nameOfField = event.target.name;
        let reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                setState({
                    ...state,
                    [nameOfField]: e.target.result
                })
            }
        }
    }

    const getAllDispute = ()=>{
        let reqBody = {
            from:'',
            to:'',
            pageNo,
            pageSize,
            id: user? user.id : ''
        }

        axios({
            method: 'post',
            url: `${allAuthDisputes}`,
            data: reqBody
        }).then(res=>{
            if(res.data.respCode === 0){
                setState(state=>({
                    ...state,
                    authDisputes: res.data.respBody.content
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

    useEffect(()=>{
        getAllDispute()
    },[])

    const onCreateDispute = ()=>{
        setState(state=>({
            ...state,
            submit: true
        }))
        axios({
            method: 'post',
            url:`${createAuthDisputes}`,
            params: {
                category: subject,
                description,
                attachment
            }
        }).then(res=>{
            if(res.data.respCode === 0){
                setState(state=>({
                    ...state,
                    submit: false,
                    add: false
                }))
                toast.success(
                    `Dispute raised successfully`,
                     { transition: Slide, hideProgressBar: true, autoClose: 3000 } 
                )
                getAllDispute()
            }
        }).catch(err=>{
            setState(state=>({
                ...state,
                submit: false,
            }))
            toast.error(`${err.response.data.message}`, {
                transition: Slide,
                hideProgressBar: true,
                autoClose: 3000,
            });
        })
    }
    return (
      <>
      <Modal show={add} clicked={showModal} loading={submit} submit={onCreateDispute} title="Create New Dispute" action="Submit">
        <CreateDispute onChange = {onChange} onFileChange={onFileChange} />
      </Modal>
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

                  <div className="d-flex justify-content-center align-items-center">
                        <div className="request-button" onClick={showModal}>
                            <VscAdd color={'#fff'} className="mr-5" />
                            Log a Complaint
                        </div>
                    </div>
              </div>
              </div>
          </div>
  
          <Container fluid>
              <Row className="mt-40">
                  <Col>
                      <AuthCard color="text-darker" cardTitle="All Auth & Notification Disputes" value="200"/>
                  </Col>
                  <Col>
                      <AuthCard color="text-sharp-green" cardTitle="Resolved Disputes" value="120" />
                  </Col>
                  <Col>
                      <AuthCard color="text-red" cardTitle="Pending Disputes" value="80"/>
                  </Col>
                  <Col>
                      <AuthCard color="text-yellow" cardTitle="Under Review" value="80" />
                  </Col>
              </Row>
  
              <div className="data-table mt-40">
                  <Table responsive borderless className="bg-inherit">
                      <thead>
                          <tr style={{backgroundColor: '#F9843533', borderRadius: '5px'}}>
                              <th>TICKET ID</th>
                              <th>USERNAME</th>
                              <th>DISPUTE SUBJECT</th>
                              <th>DURATION OF INITIATION</th>
                              <th>STATUS</th>
                              <th>ACTION </th>
                          </tr>
                      </thead>
  
                      <tbody>
                      {
                        authDisputes?
                            authDisputes.length === 0 ?
                            <NoResultFound />
                            :
                            authDisputes.map((dispute, i)=>{
                                const{ticketID, username, subject, initiationDate, status} = dispute;
                                const statusClass = () =>{
                                    if(status){
                                        if(status.toLowerCase() === 'resolved'){
                                            return 'text-sharp-green'
                                        }
                                        else if(status.toLowerCase() === 'rejected'){
                                            return 'text-red'
                                        } 
                                        else if(status.toLowerCase() === 'under review'){
                                            return 'text-yellow'
                                        }
                                        else{
                                            return 'text-yellow'
                                        }
                                    }
                                }

                                return(
                                    <tr key={i}>
                                    <td>{ticketID ? ticketID : 'N/A'}</td>
                                    <td>{username ? username : 'n/a'}</td>
                                    <td>{subject ? subject : 'N/A'}</td>
                                    <td>{ initiationDate ? moment(new Date(initiationDate)).format('LLLL') : 'N/A'}</td>
                                    <td><span className={`${statusClass()}`}>{status}</span></td>
                                    <td><span className="tabtransparent" onClick={()=>{navigate('/transaction/1')}}>View More</span><span className="ml-22"><MdDelete size={20} color="#FF4400" /></span></td>
                                </tr>

                                )
                            })
                        :
                        <NoResultFound />
                        } 
                          {/* <tr>
                              <td>#193029</td>
                              <td>@richard</td>
                              <td>SMS Notifications</td>
                              <td>Tuesday, 6 July 2021, 7:30pm</td>
                              <td className="text-sharp-green">Resolved</td>
                              <td><span className="tabtransparent" onClick={()=>{navigate('/transaction/1')}}>View More</span><span className="ml-22"><MdDelete size={20} color="#FF4400" /></span></td>
                          </tr>

                          <tr>
                              <td>#193029</td>
                              <td>@richard</td>
                              <td>SMS Notifications</td>
                              <td>Tuesday, 6 July 2021, 7:30pm</td>
                              <td className="text-red">Rejected</td>
                              <td><span className="tabtransparent" onClick={()=>{navigate('/transaction/1')}}>View More</span><span className="ml-22"><MdDelete size={20} color="#FF4400" /></span></td>
                          </tr>

                          <tr>
                              <td>#193029</td>
                              <td>@richard</td>
                              <td>SMS Notifications</td>
                              <td>Tuesday, 6 July 2021, 7:30pm</td>
                              <td className="text-yellow">Under Review</td>
                              <td><span className="tabtransparent" onClick={()=>{navigate('/transaction/1')}}>View More</span><span className="ml-22"><MdDelete size={20} color="#FF4400" /></span></td>
                          </tr> */}
                          
  
                          
                      </tbody>
                  </Table>
              </div>
          </Container>
      </>
    )
}

export default AuthDispute