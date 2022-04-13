import React, {useState, useEffect} from 'react'
import Layout from '../../components/Layout/Layout'
import {Table, Container} from 'react-bootstrap'
import {VscAdd} from 'react-icons/vsc'
import axios from '../../plugins/axios'
import { toast, Slide } from "react-toastify"
import {allScheme, createScheme, deleteScheme, updateScheme } from '../../plugins/urls'
import NoResultFound from '../../components/NoResultFound/NoResultFound'
import Modal from '../../components/Modal/Modal'
import {BsPencil} from 'react-icons/bs'
import {MdDelete} from 'react-icons/md'
import Swal from '../../components/Swal/swal'
import AddScheme from '../../components/TechComponents/AddScheme'

const Scheme = () => {
    const {user} = JSON.parse(localStorage.getItem('userDetails'));
    const[state,setState] = useState({
        add: false,
        modalValue:'',
        schemeList: [],
        pageNo: 0,
        pageSize: 20,
        id:'',
        name: '',
        regex:'',
        submit: false
    })

    const {id, name, regex, submit, add, modalValue, schemeList, pageNo, pageSize} = state
    const showModal = (value, data) =>{
        if(!add){
            setState(state=>({
                ...state,
                add: true,
                modalValue: value,
                name: data ? data.name : '',
                regex: data ? data.regex : '',
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
        getAllSchemes()
    },[])

    const onCreateScheme = ()=>{
        setState(state=>({
            ...state,
            submit: true
        }))
        let reqBody = {
            name,
            regex,
        }
        axios({
            method: 'post',
            url:`${createScheme}`,
            data: reqBody
        }).then(res=>{
            if(res.data.respCode === 0){
                setState(state=>({
                    ...state,
                    submit: false,
                    add: false
                }))
                toast.success(
                    `Scheme added successfully`,
                     { transition: Slide, hideProgressBar: true, autoClose: 3000 } 
                )
                getAllSchemes()
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
    const onUpdateScheme = ()=>{
        setState(state=>({
            ...state,
            submit: true
        }))
        let reqBody = {
            id,
            name,
            regex,
        }
        axios({
            method: 'post',
            url:`${updateScheme}`,
            data: reqBody
        }).then(res=>{
            if(res.data.respCode === 0){
                setState(state=>({
                    ...state,
                    submit: false,
                    add: false
                }))
                toast.success(
                    `Scheme updated successfully`,
                     { transition: Slide, hideProgressBar: true, autoClose: 3000 } 
                )
                getAllSchemes()
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
    const onDeleteScheme = (id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "Are you sure you want to delete this scheme!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes' 
        })
        .then(remove=>{
            if(remove.isConfirmed){

                axios({
                    method: 'post',
                    url:`${deleteScheme}`,
                    headers:{
                        'Content-Type' : 'application/json'
                    },
                    data: id
                }).then(res=>{
                    if(res.data.respCode === 0){
                        toast.success(
                            `Scheme deleted successfully`,
                             { transition: Slide, hideProgressBar: true, autoClose: 3000 } 
                        )
                        getAllSchemes()
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
    <Layout title="Scheme">
        <Modal show={add} clicked={showModal} loading={submit} submit={modalValue === 'add' ? onCreateScheme: onUpdateScheme} title={modalValue === 'add' ? "Create New Scheme" : "Edit Scheme"} action="Submit">
            <AddScheme 
                onChange = {onChange} 
                modalValue={modalValue}
                name={name}
                regex={regex}
            />
        </Modal>
              <div className="d-flex justify-content-end align-items-center ">
                  <div className="d-flex justify-content-center align-items-center">
                        <div className="request-button" onClick={()=>showModal('add')}>
                            <VscAdd color={'#fff'} className="mr-5" />
                            Add Scheme
                        </div>
                    </div>
              </div>
  
          <Container fluid>
  
              <div className="data-table mt-40">
                  <Table responsive borderless className="bg-inherit">
                      <thead>
                          <tr style={{backgroundColor: '#F9843533', borderRadius: '5px'}}>
                              <th>#</th>
                              <th>name</th>
                              <th>regex </th> 
                              <th>actions </th> 
                          </tr>
                      </thead>
  
                      <tbody>
                      {
                        schemeList?
                        schemeList.length === 0 ?
                            <NoResultFound />
                            :
                            schemeList.map((scheme, i)=>{
                                const{id,name,regex} = scheme;
                                return(
                                    <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{name}</td>
                                    <td>{regex}</td>
                                    <td><span><BsPencil color="#0086E8" size={20} onClick={()=>{showModal('edit', scheme)}} /></span><span className="ml-22"><MdDelete size={20} color="#FF4400" onClick={()=>{onDeleteScheme(id)}} /></span></td>
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

export default Scheme