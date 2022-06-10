import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import Modal from '../../components/Modal/Modal'
import AddAdmin from '../../components/UsersComponents/AddAdmin'
import axios from '../../plugins/axios';
import NoResultFound from '../../components/NoResultFound/NoResultFound'
import { allAdminUsers, createAdminUser, deleteUser} from '../../plugins/urls'
import { toast, Slide } from "react-toastify"
import { Row, Col, Table, Container } from 'react-bootstrap'
import {ReactComponent as Plus} from '../../assets/icons/plus.svg' 
import {MdDelete} from 'react-icons/md'
import {FiSearch} from 'react-icons/fi'
import {IoFilterOutline} from 'react-icons/io5' 
import TerminalCards from '../../components/Cards/TerminalCards'
import Swal from '../../components/Swal/swal';



const AdminUsers = () => {
    const [state, setState] = useState({
        adminUsers:[],
        admin: true,
        firstName:'',
        surname:'',
        email:'',
        gender:'',
        referenceCode:'',
        submit: false,
        add: false
    })

    const {adminUsers, add, submit, admin, firstName, surname, email, referenceCode,gender} = state


    const showModal = ()=>{
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
        setState(state=>({
            ...state,
           [ e.target.name]: e.target.value
        }))
    }

    useEffect(()=>{
        getUsers()
    },[])

    const getUsers = ()=>{
        axios({
            method: 'get',
            url:`${allAdminUsers}`
        }).then(res=>{
            setState(state=>({
                ...state,
                adminUsers: res.data.body
            }))
        })
        .catch(err=>{
            toast.error(`${err.response.data.message}`, {
                transition: Slide,
                hideProgressBar: true,
                autoClose: 3000,
              });
        })
    }

    const onCreateAdmin = (e)=>{
        e.preventDefault();
        setState(state=>({
            ...state,
            submit: true
        }))

        let reqBody = {
            admin,
            firstName,
            surname,
            email,
            referenceCode,
            gender,
            password: Math.random().toString(36).slice(2)
        }

        axios({
            method: 'post',
            url:`${createAdminUser}`,
            data: reqBody
        }).then(res=>{
            if (res.data.status){
                setState(state=>({
                    ...state,
                    submit: false,
                    add: false,
                    firstName:'',
                    surname:'',
                    email:'',
                    referenceCode:'',
                    gender:'',
                }))
                toast.success(
                    `${res.data.data}`,
                     { transition: Slide, hideProgressBar: true, autoClose: 3000 } 
                )
                getUsers()
            }else{
                toast.error(
                    `An error occured while creating user`,
                     { transition: Slide, hideProgressBar: true, autoClose: 3000 } 
                )
            }
        }).catch(err=>{
            toast.error(`${err.response.data.message}`, {
                transition: Slide,
                hideProgressBar: true,
                autoClose: 3000,
              });
        })

        
    }

    const onDeleteAdmin = (id) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "Are you sure you want to delete this user!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes' 
        })
        .then(remove=>{
            if(remove.isConfirmed){
                axios({
                    method: 'delete',
                    url:`${deleteUser}/${id}`,
                }).then(res=>{
                    if(res.data.status){
                        toast.success(
                            `User Deleted successfully`,
                            { transition: Slide, hideProgressBar: true, autoClose: 3000 } 
                        )
                        getUsers()
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
    <Layout title="Admin Users">
        <Modal
            show={add} 
            clicked={showModal} 
            submit={onCreateAdmin}
            loading={submit}
            title="Create New Admin User"
            action="Create New User"
        >
            <AddAdmin
                onChange={onChange}
                firstName={firstName}
                surname={surname}
                email={email}
                gender={gender}
                referenceCode={referenceCode}
            />
        </Modal>
        <div>
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
                                <input className="input ml-10" placeholder="Search users" />
                            </div>

                            {/* <div className="d-flex justify-content-center align-items-center filter-search"> */}
                                <button className="orange-button ml-10">Search</button>
                            {/* </div> */}
                        </div>

                        
                        
                    </div>

                    <div className="d-flex justify-content-start align-items-center ">
                        <div className="d-flex justify-content-center align-items-center ">
                            <div className="request-button" onClick={showModal}>
                                <Plus className="mr-5" />
                                Create New Admin User
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>

            <Container fluid>

                <Row className="mt-40">
                    <Col lg={2}>
                        <TerminalCards title="All Users" value="200" color="text-dark" textColor="text-dark" size="fs-16"/>
                    </Col>
                    <Col lg={2}>
                        <TerminalCards title="Total Super Admins" value="54" color="text-dark" textColor="text-dark" size="fs-16"/>
                    </Col>
                    <Col lg={2}>
                        <TerminalCards title="Total Admins" value="23" color="text-dark" textColor="text-dark" size="fs-16"/>
                    </Col>
                    <Col lg={2}>
                        <TerminalCards title="Total Initiators" value="65" color="text-dark" textColor="text-dark" size="fs-16"/>
                    </Col>
                    <Col lg={2}>
                        <TerminalCards title="Total Reviewers" value="23" color="text-dark" textColor="text-dark" size="fs-16"/>
                    </Col>
                    <Col lg={2}>
                        <TerminalCards title="Total Approvals" value="56" color="text-dark" textColor="text-dark" size="fs-16"/>
                    </Col>
                    {/* <Col lg={2}>
                        <TerminalCards title="Total Pending Invites" value="40" color="text-dark" textColor="text-dark" size="fs-16"/>
                    </Col> */}
                </Row>

                <div className="data-table mt-40">
                    <Table responsive borderless className="bg-inherit">
                        <thead>
                            <tr style={{backgroundColor: '#F9843533', borderRadius: '5px'}}>
                                <th>Full name</th>
                                <th>email</th>
                                <th>role</th>
                                <th>date created</th>
                                <th>actions</th>
                            </tr>
                        </thead>

                        <tbody>
                        {
                            adminUsers?
                            adminUsers.length === 0 ?
                                <NoResultFound />
                                :
                                adminUsers.map((user, i)=>{
                                    const{name, email, createdAt, id} = user;
                                    return(
                                        <tr key={i}>
                                        <td>{name}</td>
                                        <td>{email}</td>
                                        <td>Admin User</td>
                                        <td>{createdAt}</td>
                                        <td>
                                            {/* <span className="actionBlue"><AiFillEye size={20} color="#064A72" /></span> */}
                                            <MdDelete  className="ml-10" size={20} color="#FF4400" onClick={()=>onDeleteAdmin(id)} />
                                        </td>
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
        </div>
    </Layout>
  )
}

export default AdminUsers