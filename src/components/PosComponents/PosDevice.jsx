import React, {createContext, useState, useEffect} from 'react'
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
import { allUsers, activateTerminal, createterminal, updateterminal, viewAllTerminals, issueterminal } from '../../plugins/urls'
import { toast, Slide } from "react-toastify";
import NoResultFound from '../NoResultFound/NoResultFound'
import moment from 'moment'
import Swal from '../Swal/swal'


export const PosDeviceContext = createContext();

const PosDevice = () => {
    const {user} = JSON.parse(localStorage.getItem('userDetails'));
  const navigate = useNavigate()

  const [state, setState] = useState({
      add: false,
      modalValue:'',
      from:'',
      to:'',
      pageNo:0,
      pageSize: 20,
      users:[],
      terminalList: [],
      userID:'',
      actualTerminalName:'',
      description:'',
      amountLeft:'',
      amountPaid:'',
      numberOfPaymentTime:'',
      preferredTerminalName:'',
      terminalCost:'',
      terminalId:'',
      terminalSerialNumber:'',
      terminalType:'',
      submit: false
  })

  const {userID, terminalList, add, modalValue, actualTerminalName, amountPaid, amountLeft,  description, numberOfPaymentTime, preferredTerminalName, terminalCost, terminalId, terminalSerialNumber, terminalType, from, to, pageNo, pageSize, submit} = state;

  const showModal = (value, terminal) =>{
    if(!add){
        setState(state=>({
            ...state,
            add: true,
            modalValue: value,
            actualTerminalName: terminal ? terminal.actualTerminalName ? terminal.actualTerminalName:'': '',
            description: terminal ? terminal.description ? terminal.description: '': '', 
            numberOfPaymentTime: terminal ? terminal.numberOfPaymentTime ? terminal.numberOfPaymentTime: '': '',
            preferredTerminalName: terminal ? terminal.preferredTerminalName ? terminal.preferredTerminalName: '': '',
            terminalCost: terminal ? terminal.terminalAmount ? terminal.terminalAmount: '' : '',
            terminalId: terminal ? terminal.terminalId ? terminal.terminalId: '': '', 
            terminalSerialNumber: terminal ? terminal.terminalSerialNumber ? terminal.terminalSerialNumber: '': '',
            terminalType: terminal ? terminal.terminalType? terminal.terminalType : '' : '',
            terminalId: terminal ? terminal.terminalId ? terminal.terminalId: '': '',
            amountPaid: terminal ? terminal.amountPaid ? terminal.amountPaid: '0': '',
            amountLeft: terminal ? terminal.amountLeft ? terminal.amountLeft: '0': '',
        }))
    }else{
        setState(state=>({
            ...state,
            add: false,
        }))
    } 
  
}

useEffect(()=>{
    getTerminals()
    getUsers()
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
        url: `${viewAllTerminals}`,
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

const getUsers = ()=>{
    axios({
        method: 'get',
        url: `${allUsers}?size=1000`,
    }).then(res=>{
        console.log(res.data.users)
        if(res.data){
            setState(state=>({
                ...state,
                users: res.data.users
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
        
        if(res.data.respCode === 0){
            setState(state=>({
                ...state,
                submit: false,
                add: false
            }))
                
            toast.success(`Terminal Created Successfully`, {
                transition: Slide,
                hideProgressBar: true,
                autoClose: 3000,
              });
              getTerminals()
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

const onUpdateTerminal = (e) =>{
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
        url: `${updateterminal}`,
        data: reqBody
    }).then(res=>{
        
        if(res.data.respCode === 0){
            setState(state=>({
                ...state,
                submit: false,
                add: false
            }))
                
            toast.success(`Terminal Updated Successfully`, {
                transition: Slide,
                hideProgressBar: true,
                autoClose: 3000,
              });
              getTerminals()
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

const onIssueTerminal = (e) =>{
    e.preventDefault();
    setState(state=>({
        ...state,
        submit: true
    }))

    let reqBody ={
        userID,
        actualTerminalName,
        preferredTerminalName,
        amountLeft,
        amountPaid,
        terminalCost,
        terminalId, 
    }

    axios({
        method: 'post',
        url: `${issueterminal}`,
        data: reqBody
    }).then(res=>{
        
        if(res.data.respCode === 0){
            setState(state=>({
                ...state,
                submit: false,
                add: false
            }))
                
            toast.success(`Terminal Issued Successfully`, {
                transition: Slide,
                hideProgressBar: true,
                autoClose: 3000,
              });
              getTerminals()
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

const onActivateTerminal = (id, status)=>{
    if(status){
        if(status.toLowerCase()=== 'activated'){
            Swal.fire({
                title: 'Are you sure?',
                text: "Are you sure you want to deactivate this terminal!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes' 
            })
            .then(remove=>{
                if(remove.isConfirmed){
                    let reqBody={
                        terminalId: id,
                        status:'DEACTIVATED'
                    }
                    axios({
                        method: 'post',
                        url:`${activateTerminal}`,
                        headers:{
                            'Content-Type' : 'application/json'
                        },
                        data: reqBody
                    }).then(res=>{
                        if(res.data.respCode === 0){
                            toast.success(
                                `Terminal Deactivated successfully`,
                                 { transition: Slide, hideProgressBar: true, autoClose: 3000 } 
                            )
                            getTerminals()
                        }
                    }).catch(err=>{
                        toast.error(`${err.response.data.message}`, {
                            transition: Slide,
                            hideProgressBar: true,
                            autoClose: 3000,
                        });
                    })
                }
            })
        }
        else if(status.toLowerCase()=== 'deactivated'){
            Swal.fire({
                title: 'Are you sure?',
                text: "Are you sure you want to Activate this terminal!",
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
                        url:`${activateTerminal}`,
                        headers:{
                            'Content-Type' : 'application/json'
                        },
                        data: reqBody
                    }).then(res=>{
                        if(res.data.respCode === 0){
                            toast.success(
                                `Terminal Activated successfully`,
                                 { transition: Slide, hideProgressBar: true, autoClose: 3000 } 
                            )
                            getTerminals()
                        }
                    }).catch(err=>{
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
    <PosDeviceContext.Provider value={{
        onChange,
        state
    }}>
    <Modal 
        show={add} 
        clicked={showModal} 
        submit={modalValue === 'add' ? onCreateTerminal : modalValue === 'issue' ? onIssueTerminal : onUpdateTerminal}
        loading={submit}
        title={modalValue === 'add' ? "Add new terminal device" : modalValue === 'issue' ? "Issue Terminal" : "Edit Terminal"} 
        action={modalValue === 'add' ? "Add Terminal" : modalValue === 'issue' ? " Issue Device" : "Update Terminal"}
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
                        <div className="primary-button" onClick={()=>showModal('add')}>
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
                    {
                        terminalList?
                        terminalList.length === 0 ?
                            <NoResultFound />
                            :
                            terminalList.map((terminal, i)=>{
                                const{terminalId, actualTerminalName, assignedTo, terminalAmount, status, issuedDate} = terminal;
                                const statusClass = () =>{
                                    if(status){
                                        if(status.toLowerCase() === 'activated'){
                                            return 'tabactive'
                                        }
                                        // else if(status.toLowerCase() === 'refunded'){
                                        //     return 'tabpending'
                                        // } 
                                        // else if(status.toLowerCase() === 'abandoned'){
                                        //     return 'tabdamaged'
                                        // }
                                        else{
                                            return 'tabdamaged'
                                        }
                                    }
                                }

                                return(
                                    <tr key={i}>
                                    <td>{terminalId}</td>
                                    <td>{actualTerminalName}</td>
                                    <td>{terminalAmount}</td>
                                    <td>{assignedTo}</td>
                                    <td><span className={`${statusClass()}`}>{status}</span></td>
                                    <td>{issuedDate ? moment(new Date(issuedDate)).format('D/MM/YYYY') : 'N/A'}</td>
                                    <td>
                                        {/* <span className="actionBlue"><AiFillEye size={20} color="#064A72" /></span> */}
                                        <span className="action-lightBlue ml-10" onClick={()=>showModal('edit', terminal)}><Setting size={20} color="#064A72" /> Edit</span>
                                        {
                                            status?
                                            status.toLowerCase() === 'activated' ?
                                             <span className="actionDanger ml-10" onClick={()=>onActivateTerminal(terminalId, status)}><Cancel size={20} color="#FF4400"/> Deactivate</span>
                                             :
                                             <span className="actionSuccess ml-10" onClick={()=>onActivateTerminal(terminalId, status)}><Check size={20} color="#FF4400"/> Activate</span>
                                             :
                                             null

                                        }
                                        {
                                            assignedTo ?
                                            null:
                                            <span className="actionSuccess ml-10" onClick={()=>showModal('issue', terminal)}><Check size={20} c/> Issue</span>
                                        }
                                        {/* <MdDelete  className="ml-10" size={20} color="#FF4400" /> */}
                                    </td>
                                </tr>
                                )
                            })
                        :
                        <NoResultFound />
                    }
                        
                    </tbody>

                    {/* <tbody>
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
                    </tbody> */}
                </Table>
            </div>
        </Container>
    </PosDeviceContext.Provider>
  )
}

export default PosDevice