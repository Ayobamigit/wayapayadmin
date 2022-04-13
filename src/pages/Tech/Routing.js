import React, {useState, useEffect} from 'react'
import Layout from '../../components/Layout/Layout'
import {Table, Container} from 'react-bootstrap'
import {VscAdd} from 'react-icons/vsc'
import axios from '../../plugins/axios'
import { toast, Slide } from "react-toastify"
import { allRouting, allScheme, allStation, allUsers, createRouting, deleteRouting, updateRouting } from '../../plugins/urls'
import NoResultFound from '../../components/NoResultFound/NoResultFound'
import Modal from '../../components/Modal/Modal'
import AddRoute from '../../components/TechComponents/AddRoute'
import {BsPencil} from 'react-icons/bs'
import {MdDelete} from 'react-icons/md'
import Swal from '../../components/Swal/swal'


const Routing = () => {
    const {user} = JSON.parse(localStorage.getItem('userDetails'));
    const[state,setState] = useState({
        add: false,
        modalValue:'',
        users:[],
        routeRules: [],
        stationsList:[],
        schemeList:[],
        pageNo: 0,
        pageSize: 20,
        maximum_amount: '',
        minimum_amount:'',
        precedence:'',
        scheme:'',
        stationId:'',
        type:'SCHEME',
        userId:'98',
        values:'',
        id:'',
        submit: false
    })

    const {id, maximum_amount, minimum_amount, precedence, scheme, stationId, station, type, userId, values, submit, add, modalValue, routeRules, stationsList, schemeList, users,  pageNo, pageSize} = state
    const showModal = (value, data) =>{
        if(!add){
            setState(state=>({
                ...state,
                add: true,
                modalValue: value,
                minimum_amount: data ? data.minimum_amount : '',
                maximum_amount: data ? data.maximum_amount : '',
                precedence: data ? data.precedence : '',
                scheme: data ? data.scheme : '',
                stationId: data ? data.stationId ? data.stationId.id : '' : '',
                station: data ? data.stationId ? data.stationId.name : '' : '',
                // type: data ? data.type : '',
                // userId: data ? data.userId : '',
                values: data ? data.values : '',
                id: data ? data.id : '',
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

    const getAllMerchants = ()=>{
        axios({
            method: 'get',
            url: `${allUsers}/true`,
        }).then(res=>{
            if(res.data.respCode === 0){
                setState(state=>({
                    ...state,
                    users: res.data.respBody.content
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

    const getAllRoutes = ()=>{
        let reqBody = {
            from:'',
            to:'',
            pageNo,
            pageSize,
            id: user? user.id : ''
        }

        axios({
            method: 'post',
            url: `${allRouting}`,
            data: reqBody
        }).then(res=>{
            if(res.data.respCode === 0){
                setState(state=>({
                    ...state,
                    routeRules: res.data.respBody.content
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

    const getAllStations = ()=>{
        let reqBody = {
            from:'',
            to:'',
            pageNo,
            pageSize,
            id: user? user.id : ''
        }

        axios({
            method: 'post',
            url: `${allStation}`,
            data: reqBody
        }).then(res=>{
            if(res.data.respCode === 0){
                setState(state=>({
                    ...state,
                    stationsList: res.data.respBody.content
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

    const getAllSchemes = ()=>{
        let reqBody = {
            from:'',
            to:'',
            pageNo,
            pageSize,
            id: user? user.id : ''
        }

        axios({
            method: 'post',
            url: `${allScheme}`,
            data: reqBody
        }).then(res=>{
            if(res.data.respCode === 0){
                setState(state=>({
                    ...state,
                    schemeList: res.data.respBody.content
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
        getAllRoutes()
        getAllStations()
        getAllSchemes()
        getAllMerchants()
    },[])

    const onCreateRoute = ()=>{
        setState(state=>({
            ...state,
            submit: true
        }))
        let reqBody={
            maximum_amount,
            minimum_amount,
            precedence,
            scheme,
            stationId,
            type,
            userId,
            values
        }
        axios({
            method: 'post',
            url:`${createRouting}`,
            data: reqBody
        }).then(res=>{
            if(res.data.respCode === 0){
                setState(state=>({
                    ...state,
                    submit: false,
                    add: false
                }))
                toast.success(
                    `Route created successfully`,
                     { transition: Slide, hideProgressBar: true, autoClose: 3000 } 
                )
                getAllRoutes()
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

    const onUpdateRoute = ()=>{
        setState(state=>({
            ...state,
            submit: true
        }))
        let reqBody={
            id,
            maximum_amount,
            minimum_amount,
            precedence,
            scheme,
            stationId,
            type,
            userId,
            values
        }
        axios({
            method: 'post',
            url:`${updateRouting}`,
            data: reqBody
        }).then(res=>{
            if(res.data.respCode === 0){
                setState(state=>({
                    ...state,
                    submit: false,
                    add: false
                }))
                toast.success(
                    `Route updated successfully`,
                     { transition: Slide, hideProgressBar: true, autoClose: 3000 } 
                )
                getAllRoutes()
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

    const onDeleteRoute = (id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "Are you sure you want to delete this route!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes' 
        })
        .then(remove=>{
            if(remove.isConfirmed){

                axios({
                    method: 'post',
                    url:`${deleteRouting}`,
                    headers:{
                        'Content-Type' : 'application/json'
                    },
                    data: id
                }).then(res=>{
                    if(res.data.respCode === 0){
                        toast.success(
                            `Route deleted successfully`,
                             { transition: Slide, hideProgressBar: true, autoClose: 3000 } 
                        )
                        getAllRoutes()
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
  return (
    <Layout title="Transaction Routing">
        <Modal show={add} clicked={showModal} loading={submit} submit={modalValue === 'add' ? onCreateRoute : onUpdateRoute} title={modalValue === 'add' ? "Create New Route": "Edit Route"} action="Submit">
            <AddRoute 
                onChange = {onChange} 
                stationsList={stationsList}
                schemeList={schemeList}
                modalValue={modalValue}
                minimum_amount={minimum_amount}
                maximum_amount={maximum_amount}
                precedence={precedence}
                scheme={scheme}
                type={type}
                userId={userId}
                values={values}
                stationId={stationId}
                station={station}
            />
        </Modal>
              <div className="d-flex justify-content-end align-items-center ">
                  <div className="d-flex justify-content-center align-items-center">
                        <div className="request-button" onClick={()=>showModal('add')}>
                            <VscAdd color={'#fff'} className="mr-5" />
                            Add processor
                        </div>
                    </div>
              </div>
  
          <Container fluid>
  
              <div className="data-table mt-40">
                  <Table responsive borderless className="bg-inherit">
                      <thead>
                          <tr style={{backgroundColor: '#F9843533', borderRadius: '5px'}}>
                              <th>user id</th>
                              <th>SCHEME</th>
                              <th>minimum amount</th>
                              <th>maximum amount</th>
                              <th>precedence</th>
                              <th>processor</th>
                              <th>values</th>
                              <th>ACTION </th>
                          </tr>
                      </thead>
  
                      <tbody>
                      {
                        routeRules?
                        routeRules.length === 0 ?
                            <NoResultFound />
                            :
                            routeRules.map((rule, i)=>{
                                const{id, userId, scheme, maximum_amount, minimum_amount, precedence, stationId, values} = rule;

                                return(
                                    <tr key={i}>
                                    <td>{userId ? userId : 'N/A'}</td>
                                    <td>{scheme ? scheme : 'N/A'}</td>
                                    <td>{minimum_amount ? minimum_amount : '0'}</td>
                                    <td>{maximum_amount ? maximum_amount : '0'}</td>
                                    <td>{ precedence ? precedence : 'N/A'}</td>
                                    <td>{stationId ? stationId.name : 'N/A'}</td>
                                    <td>{values ? values : 'N/A'}</td>
                                    <td><span><BsPencil color="#0086E8" size={20} onClick={()=>{showModal('edit', rule)}} /></span><span className="ml-22"><MdDelete size={20} color="#FF4400" onClick={()=>{onDeleteRoute(id)}} /></span></td>
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
    </Layout>
  )
}

export default Routing