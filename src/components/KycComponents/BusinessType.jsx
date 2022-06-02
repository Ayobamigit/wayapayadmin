import React, {useState, useEffect} from 'react'
import { Row, Col, Table, Container } from 'react-bootstrap'
import {FiSearch} from 'react-icons/fi'
import {IoFilterOutline} from 'react-icons/io5' 
import {MdDelete, MdOutlineEdit} from 'react-icons/md'
import NoResultFound from '../NoResultFound/NoResultFound'
import {ReactComponent as Plus} from '../../assets/icons/plus.svg' 
import axios from '../../plugins/axios'
import { businessTypesList, createBusinessType, updateBusinessType, deleteBusinessType } from '../../plugins/urls'
import { toast, Slide } from "react-toastify";
import TerminalCards from '../Cards/TerminalCards'
import Modal from '../Modal/Modal'
import AddBusiness from './AddBusiness'
import Swal from '../Swal/swal'



const BusinessType = () => {
    const [state, setState] = useState({
        businessList:[],
        page:0,
        size:100,
        total: 0,
        add: false,
        submit: false,
        businessType: '',
        id:'',
        modalValue:'',
    })
    
    const {businessList, page, size, total, submit, add, businessType, id, modalValue} = state;

    useEffect(()=>{
        getAllBusiness()
    },[])

    const getAllBusiness = ()=>{
        axios({
            method: 'get',
            url:`${businessTypesList}`,
            params:{
                page,
                size
            }
        })
        .then(res=>{
            setState(state=>({
                ...state,
                businessList: res.data.businessTypeList,
                total:res.data.totalItems
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

    const showModal = (value, business)=>{
        if(!add){
            setState(state=>({
                ...state,
                add: true,
                modalValue: value,
                businessType: business ? business.businessType ? business.businessType:'': '',
                id: business ? business.id ? business.id:'': '',
            }))
        }else{
            setState(state=>({
                ...state,
                add: false,
            }))
        } 
    }

    const onCreateBusiness = (e)=>{
        e.preventDefault();
        setState(state=>({
            ...state,
            submit: true
        }))
        let reqBody={
            businessType
        }

        axios({
            method: 'post',
            url: `${createBusinessType}`,
            data: reqBody
        }).then(res=>{
            
            if(res.data.code === 0){
                setState(state=>({
                    ...state,
                    submit: false,
                    add: false
                }))
                    
                toast.success(`Business Type Created Successfully`, {
                    transition: Slide,
                    hideProgressBar: true,
                    autoClose: 3000,
                  });
                  getAllBusiness()
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
            toast.error(`${err.response.data.message}`, {
                transition: Slide,
                hideProgressBar: true,
                autoClose: 3000,
              });
        })
    }

    const onUpdateBusiness = (e)=>{
        e.preventDefault();
        setState(state=>({
            ...state,
            submit: true
        }))
        let reqBody={
            id,
            businessType
        }

        axios({
            method: 'put',
            url: `${updateBusinessType}`,
            data: reqBody
        }).then(res=>{
            
            if(res.data.code === 0){
                setState(state=>({
                    ...state,
                    submit: false,
                    add: false
                }))
                    
                toast.success(`Business Type updated Successfully`, {
                    transition: Slide,
                    hideProgressBar: true,
                    autoClose: 3000,
                  });
                  getAllBusiness()
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
            toast.error(`${err.response.data.message}`, {
                transition: Slide,
                hideProgressBar: true,
                autoClose: 3000,
              });
        })
    }

    const onDeleteBusiness = (id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "Are you sure you want to delete this business type!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes' 
        })
        .then(remove=>{
            if(remove.isConfirmed){
                axios({
                    method: 'delete',
                    url:`${deleteBusinessType}/${id}`,
                }).then(res=>{
                    if(res.data.code === 0){
                        toast.success(
                            `Business Deleted successfully`,
                                { transition: Slide, hideProgressBar: true, autoClose: 3000 } 
                        )
                        getAllBusiness()
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

    const onChange =(e)=>{
        setState(state=>({
            ...state,
           [ e.target.name]: e.target.value
        }))
    }

  return (
    <>
    <Modal
        show={add} 
        clicked={showModal} 
        submit={modalValue === 'add' ? onCreateBusiness : onUpdateBusiness}
        loading={submit}
        title={modalValue === 'add' ? "Create New Business Industry"  : "Update Business"}
        action={modalValue === 'add' ? "Add Business"  : "Update"}
    >
        <AddBusiness
            onChange={onChange}
            businessType={businessType}
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
                            <input className="input ml-10" placeholder="Search tier levels" />
                        </div>

                        {/* <div className="d-flex justify-content-center align-items-center filter-search"> */}
                            <button className="orange-button ml-10">Search</button>
                        {/* </div> */}
                    </div>

                    
                    
                </div>

                <div className="d-flex justify-content-start align-items-center ">
                    <div className="d-flex justify-content-center align-items-center ">
                        <div className="request-button" onClick={()=>showModal('add')}>
                            <Plus className="mr-5" />
                            Create New Business Type
                        </div>
                    </div>

                </div>
                
            </div>
        </div>

        <Container fluid>

            <Row className="mt-40">
                <Col lg={3}>
                    <TerminalCards title="Total Business Types" value={total} color="text-dark" textColor="text-dark" size="fs-16"/>
                </Col>
            </Row>

            <div className="data-table mt-40">
                <Table responsive borderless className="bg-inherit">
                    <thead>
                        <tr style={{backgroundColor: '#F9843533', borderRadius: '5px'}}>
                            <th>TyPE OF INDUSTRIES</th>
                            <th>actions</th>
                        </tr>
                    </thead>

                    <tbody>
                    {
                        businessList?
                        businessList.length === 0 ?
                            <NoResultFound />
                            :
                            businessList.map((business, i)=>{
                                const{businessType, id} = business;
                                return(
                                    <tr key={i}>
                                    <td>{businessType}</td>
                                    <td>
                                        {/* <span className="actionBlue"><AiFillEye size={20} color="#064A72" /></span> */}
                                        <MdOutlineEdit  className="ml-10" size={20} color="#000" onClick={()=>{showModal('edit', business)}} />
                                        <MdDelete  className="ml-10" size={20} color="#FF4400" onClick={()=>onDeleteBusiness(id)} />
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
    </>
    
  )
}

export default BusinessType