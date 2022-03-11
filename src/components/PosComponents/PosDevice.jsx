import React, {createContext, useState} from 'react'
import { Row, Col, Table, Container } from 'react-bootstrap'
import {FiSearch} from 'react-icons/fi'
import {IoFilterOutline} from 'react-icons/io5'
import {BiLinkExternal} from 'react-icons/bi'
import {ReactComponent as Pos} from '../../assets/icons/pos-white.svg' 
import {ReactComponent as Plus} from '../../assets/icons/plus.svg' 
import {ReactComponent as Cancel} from '../../assets/icons/cancel.svg' 
import {ReactComponent as Setting} from '../../assets/icons/setting-blue.svg' 
import {ReactComponent as Check} from '../../assets/icons/approve.svg' 
import {useNavigate } from 'react-router'
import TerminalCards from '../Cards/TerminalCards'
import {AiFillEye} from 'react-icons/ai'
import {MdDelete} from 'react-icons/md'
import Modal from '../Modal/Modal'
import AddDevice from './AddDevice'
import axios from '../../plugins/axios'
import { createterminal } from '../../plugins/urls'
import { toast, Slide } from "react-toastify";


export const PosDeviceContext = createContext();

const PosDevice = () => {
  const navigate = useNavigate()

  const [state, setState] = useState({
      add: false,
      actualTerminalName:'',
      description:'',
      numberOfPaymentTime:'',
      preferredTerminalName:'',
      terminalCost:'',
      terminalId:'',
      terminalSerialNumber:'',
      terminalType:'',
      submit: false
  })

  const {add, actualTerminalName, description, numberOfPaymentTime, preferredTerminalName, terminalCost, terminalId, terminalSerialNumber, terminalType, submit} = state;

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

const onChange =(e)=>{

    let name = e.target.name;
    let value = e.target.value;

    setState(state=>({
        ...state,
       [ e.target.name]: e.target.value
    }))

    if (name==="terminalType"){
        setState(state=>({
            ...state,
            actualTerminalName: value
        }))
    }
}

const onCreateTerminal = (e) =>{
    e.preventDefault();
    setState(state=>({
        ...state,
        submit: true
    }))

    let reqBody ={
        actualTerminalName,
        description, 
        numberOfPaymentTime,
        preferredTerminalName,
        terminalCost,
        terminalId, 
        terminalSerialNumber,
        terminalType,
    }

    axios({
        method: 'post',
        url: `${createterminal}`,
        data: reqBody
    }).then(res=>{
        
        if(res.data.status === true){
            setState(state=>({
                ...state,
                submit: true,
                add: false
            }))
                
            toast.success(`${res.data.message}`, {
                transition: Slide,
                hideProgressBar: true,
                autoClose: 3000,
              });
        }else{
            toast.error(`${res.data.message}`, {
                transition: Slide,
                hideProgressBar: true,
                autoClose: 3000,
              });
        }

    }).catch(err=>{
        setState(state=>({
            ...state,
            submit: false,
            add: false
        }))
        console.log(err)
        toast.error(`${err.response.data.message}`, {
            transition: Slide,
            hideProgressBar: true,
            autoClose: 3000,
          });
    })
    
}
  return (
    <PosDeviceContext.Provider value={{
        onChange,
        state
    }}>
    <Modal 
        show={add} 
        clicked={showModal} 
        submit={onCreateTerminal}
        loading={submit}
        title="Add new terminal device" 
        action="Add Terminal" 
        close="Cancel"
    >
        <AddDevice />
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
                    <div className="d-flex justify-content-center align-items-center ">
                        <div className="primary-button" onClick={showModal}>
                            <Plus className="mr-5" />
                            ADD NEW TERMINAL
                        </div>
                    </div>

                </div>
                
            </div>
        </div>

        <Container fluid>
            <Row className="mt-40">
                <Col>
                    <TerminalCards title="Total Terminals Configured" value="3" color="text-grey" textColor="text-grey"/>
                </Col>
                <Col>
                    <TerminalCards title="Total Issued Terminals" value="3" color="text-grey" textColor="text-grey"/>
                </Col>
                <Col>
                    <TerminalCards title="Total  Active Terminals" value="1" color="text-grey" textColor="text-grey"/>
                </Col>
                <Col>
                    <TerminalCards title="Total  Inactive (Damaged)" value="1" color="text-grey" textColor="text-grey"/>
                </Col>
                <Col>
                    <TerminalCards title="Total Inactive (Suspended)" value="1" color="text-grey" textColor="text-grey"/>
                </Col>
                <Col>
                    <TerminalCards title="Total Inactive (Not in Use)" value="1" color="text-grey" textColor="text-grey"/>
                </Col>
            </Row>

            <div className="data-table mt-40">
                <Table responsive borderless className="bg-inherit">
                    <thead>
                        <tr style={{backgroundColor: '#F9843533', borderRadius: '5px'}}>
                            <th>TERMINAL ID</th>
                            <th>TERMINAL NAME</th>
                            <th>TERMINAL COST</th>
                            <th>ASSIGNED TO</th>
                            <th>STATUS</th>
                            <th>ISSUED DATE</th>
                            <th>action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>123232328</td>
                            <td>Nexgo</td>
                            <td>NGN 50,000</td>
                            <td>Business name 1</td>
                            <td><span className="tabactive">Active</span></td>
                            <td>Tue. 9th Sept 2021 07:04 AM (WAT)</td>
                            <td>
                                <span className="actionBlue"><AiFillEye size={20} color="#064A72" /></span>
                                <span className="action-lightBlue ml-10"><Setting size={20} color="#064A72" /> Edit</span>
                                <span className="actionDanger ml-10"><Cancel size={20} color="#FF4400"/> Deactivate</span>
                                <MdDelete  className="ml-10" size={20} color="#FF4400" />
                            </td>
                        </tr>

                        <tr>
                            <td>123232328</td>
                            <td>Nexgo</td>
                            <td>NGN 50,000</td>
                            <td>Business name 1</td>
                            <td><span className="tabactive">Active</span></td>
                            <td>Tue. 9th Sept 2021 07:04 AM (WAT)</td>
                            <td>
                                <span className="actionBlue"><AiFillEye size={20} color="#064A72" /></span>
                                <span className="action-lightBlue ml-10"><Setting size={20} color="#064A72" /> Edit</span>
                                <span className="actionSuccess ml-10"><Check size={20} color="#FF4400"/> Activate</span>
                                <MdDelete  className="ml-10" size={20} color="#FF4400" />
                            </td>
                        </tr>

                        <tr>
                            <td>123232328</td>
                            <td>Nexgo</td>
                            <td>NGN 50,000</td>
                            <td>Business name 1</td>
                            <td><span className="tabdamaged">INACTIVE (DAMAGED)</span></td>
                            <td>Tue. 9th Sept 2021 07:04 AM (WAT)</td>
                            <td>
                                <span className="actionBlue"><AiFillEye size={20} color="#064A72" /></span>
                                <span className="action-lightBlue ml-10"><Setting size={20} color="#064A72" /> Edit</span>
                                <span className="actionDanger ml-10"><Cancel size={20} color="#FF4400"/> Deactivate</span>
                                <MdDelete  className="ml-10" size={20} color="#FF4400" />
                            </td>

                        </tr>

                        <tr>
                            <td>123232328</td>
                            <td>Nexgo</td>
                            <td>NGN 50,000</td>
                            <td>Business name 1</td>
                            <td><span className="tabactive">Active</span></td>
                            <td>Tue. 9th Sept 2021 07:04 AM (WAT)</td>
                            <td>
                                <span className="actionBlue"><AiFillEye size={20} color="#064A72" /></span>
                                <span className="action-lightBlue ml-10"><Setting size={20} color="#064A72" /> Edit</span>
                                <span className="actionSuccess ml-10"><Check size={20} color="#FF4400"/> Activate</span>
                                <MdDelete  className="ml-10" size={20} color="#FF4400" />
                            </td>
                        </tr>

                        <tr>
                            <td>123232328</td>
                            <td>Nexgo</td>
                            <td>NGN 50,000</td>
                            <td>Business name 1</td>
                            <td><span className="tabdamaged">INACTIVE (DAMAGED)</span></td>
                            <td>Tue. 9th Sept 2021 07:04 AM (WAT)</td>
                            <td>
                                <span className="actionBlue"><AiFillEye size={20} color="#064A72" /></span>
                                <span className="action-lightBlue ml-10"><Setting size={20} color="#064A72" /> Edit</span>
                                <span className="actionDanger ml-10"><Cancel size={20} color="#FF4400"/> Deactivate</span>
                                <MdDelete  className="ml-10" size={20} color="#FF4400" />
                            </td>

                        </tr>
                    </tbody>
                </Table>
            </div>
        </Container>
    </PosDeviceContext.Provider>
  )
}

export default PosDevice