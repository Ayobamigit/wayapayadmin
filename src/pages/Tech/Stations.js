import React, {useState, useEffect} from 'react'
import Layout from '../../components/Layout/Layout'
import {Table, Container} from 'react-bootstrap'
import {VscAdd} from 'react-icons/vsc'
import axios from '../../plugins/axios'
import { toast, Slide } from "react-toastify"
import {allStation, createStation, deleteStation, updateStation } from '../../plugins/urls'
import NoResultFound from '../../components/NoResultFound/NoResultFound'
import Modal from '../../components/Modal/Modal'
import {BsPencil} from 'react-icons/bs'
import {MdDelete} from 'react-icons/md'
import AddStation from '../../components/TechComponents/AddStation'
import Swal from '../../components/Swal/swal'


const Stations = () => {
    const {user} = JSON.parse(localStorage.getItem('userDetails'));
    const[state,setState] = useState({
        add: false,
        modalValue:'',
        stationsList: [],
        pageNo: 0,
        pageSize: 20,
        id:'',
        name: '',
        zmk:'',
        zpk:'',
        zmkKcv:'',
        zpkKcv:'',
        newZpkKcv:'',
        status:'',
        submit: false
    })

    const {id, name, zmk, zpk, zmkKcv, zpkKcv, newZpkKcv, status, submit, add, modalValue, stationsList, pageNo, pageSize} = state
    const showModal = (value, data) =>{
        if(!add){
            setState(state=>({
                ...state,
                add: true,
                modalValue: value,
                name: data ? data.name : '',
                zmk: data ? data.zmk : '',
                zpk: data ? data.zpk : '',
                zmkKcv: data ? data.zmkKcv : '',
                zpkKcv: data ? data.zpkKcv : '',
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

    useEffect(()=>{
        getAllStations()
    },[])

    const onCreateStation = ()=>{
        setState(state=>({
            ...state,
            submit: true
        }))
        let reqBody = {
            name,
            zmk,
            zpk,
            zmkKcv,
            zpkKcv,
            newZpkKcv,
            status
        }
        axios({
            method: 'post',
            url:`${createStation}`,
            data: reqBody
        }).then(res=>{
            if(res.data.respCode === 0){
                setState(state=>({
                    ...state,
                    submit: false,
                    add: false
                }))
                toast.success(
                    `Station added successfully`,
                     { transition: Slide, hideProgressBar: true, autoClose: 3000 } 
                )
                getAllStations()
            }else{
                setState(state=>({
                    ...state,
                    submit: false,
                    add: false
                }))
                toast.error(
                    `${res.data.respBody}`,
                     { transition: Slide, hideProgressBar: true, autoClose: 3000 } 
                )
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
    const onUpdateStation = ()=>{
        setState(state=>({
            ...state,
            submit: true
        }))
        let reqBody = {
            id,
            name,
            zmk,
            zpk,
            zmkKcv,
            zpkKcv,
            newZpkKcv,
            status
        }
        axios({
            method: 'post',
            url:`${updateStation}`,
            data: reqBody
        }).then(res=>{
            if(res.data.respCode === 0){
                setState(state=>({
                    ...state,
                    submit: false,
                    add: false
                }))
                toast.success(
                    `Station updated successfully`,
                     { transition: Slide, hideProgressBar: true, autoClose: 3000 } 
                )
                getAllStations()
            }else{
                setState(state=>({
                    ...state,
                    submit: false,
                    add: false
                }))
                toast.error(
                    `${res.data.respBody}`,
                     { transition: Slide, hideProgressBar: true, autoClose: 3000 } 
                )
            }
        }).catch(err=>{
            setState(state=>({
                ...state,
                submit: false,
                add: false
            }))
            toast.error(`${err.response.data.message}`, {
                transition: Slide,
                hideProgressBar: true,
                autoClose: 3000,
            });
        })
    }
    const onDeleteStation = (id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "Are you sure you want to delete this station!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes' 
        })
        .then(remove=>{
            if(remove.isConfirmed){

                axios({
                    method: 'post',
                    url:`${deleteStation}`,
                    headers:{
                        'Content-Type' : 'application/json'
                    },
                    data: id
                }).then(res=>{
                    if(res.data.respCode === 0){
                        toast.success(
                            `Station deleted successfully`,
                             { transition: Slide, hideProgressBar: true, autoClose: 3000 } 
                        )
                        getAllStations()
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
    <Layout title="Stations">
        <Modal show={add} clicked={showModal} loading={submit} submit={modalValue === 'add' ? onCreateStation: onUpdateStation} title={modalValue === 'add' ? "Create New Station" : "Edit Station"} action="Submit">
            <AddStation 
                onChange = {onChange} 
                modalValue={modalValue}
                name={name}
                zmk={zmk}
                zpk={zpk}
                zmkKcv={zmkKcv}
                zpkKcv={zpkKcv}
            />
        </Modal>
              <div className="d-flex justify-content-end align-items-center ">
                  <div className="d-flex justify-content-center align-items-center">
                        <div className="request-button" onClick={()=>showModal('add')}>
                            <VscAdd color={'#fff'} className="mr-5" />
                            Add Station
                        </div>
                    </div>
              </div>
  
          <Container fluid>
  
              <div className="data-table mt-40">
                  <Table responsive borderless className="bg-inherit">
                      <thead>
                          <tr style={{backgroundColor: '#F9843533', borderRadius: '5px'}}>
                              <th>name</th>
                              <th>status </th> 
                              <th>actions </th> 
                          </tr>
                      </thead>
  
                      <tbody>
                      {
                        stationsList?
                        stationsList.length === 0 ?
                            <NoResultFound />
                            :
                            stationsList.map((station, i)=>{
                                const{id,name,status} = station;
                                const statusClass = () =>{
                                    if(status){
                                        if(status.toLowerCase() === 'active'){
                                            return 'tabactive'
                                        }
                                        else{
                                            return 'tabdanger'
                                        } 
                                    }
                                }
                                return(
                                    <tr key={i}>
                                    <td>{name}</td>
                                    <td><span className={`${statusClass()}`}>{status}</span></td>
                                    <td><span><BsPencil color="#0086E8" size={20} onClick={()=>{showModal('edit', station)}} /></span><span className="ml-22"><MdDelete size={20} color="#FF4400" onClick={()=>{onDeleteStation(id)}} /></span></td>
                                </tr>

                                )
                            })
                        :
                        <NoResultFound />
                        } 
                      </tbody>
                  </Table>
              </div>
          </Container>
    </Layout>
  )
}

export default Stations