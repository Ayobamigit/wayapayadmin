import React, {useState, useEffect} from 'react'
import Layout from '../../components/Layout/Layout'
import {Table, Container} from 'react-bootstrap'
import {VscAdd} from 'react-icons/vsc'
import axios from '../../plugins/axios'
import { toast, Slide } from "react-toastify"
import {allPricing, allRouting, createAuthDisputes, createPricing, updatePricing } from '../../plugins/urls'
import moment from "moment"
import NoResultFound from '../../components/NoResultFound/NoResultFound'
import Modal from '../../components/Modal/Modal'
import AddRoute from '../../components/TechComponents/AddRoute'
import {FcCheckmark} from 'react-icons/fc'
import {VscClose} from 'react-icons/vsc'
import {BsPencil} from 'react-icons/bs'
import {MdDelete} from 'react-icons/md'
import AddPricing from '../../components/TechComponents/AddPricing'

const Pricing = () => {
    const {user} = JSON.parse(localStorage.getItem('userDetails'));
    const[state,setState] = useState({
        add: false,
        modalValue: '',
        pricingList: [],
        pageNo: 0,
        pageSize: 20,
        agent: false,
        aggregator:false,
        merchant: false,
        agentValue: '',
        aggregatorValue:'',
        merchantValue: '',
        id:'',
        cap:'',
        name:'',
        discount:'',
        pricingRate:'',
        products:'',
        userId: '',
        submit: false
    })

    const {id, agent, aggregator, merchant, agentValue, aggregatorValue, merchantValue, name, discount, pricingRate, userId, products, submit, cap, add, pricingList, pageNo, pageSize, modalValue} = state
    const showModal = (value, data) =>{
        if(!add){
            setState(state=>({
                ...state,
                add: true,
                modalValue: value,
                name: data ? data.name : '',
                cap: data ? data.cap : '',
                discount: data ? data.discount : '',
                pricingRate: data ? data.pricingRate : '',
                products: data ? data.products : '',
                id: data ? data.id : '',
                userId: data ? data.userId : '',
                merchant: data ? data.merchant : '',
                aggregator: data ? data.aggregator : '',
                agent:  data ? data.agent : '',
                merchantValue: data ? data.merchant ? 'Yes': 'No': '',
                aggregatorValue: data ? data.aggregator ? 'Yes': 'No': '',
                agentValue:  data ? data.agent ? 'Yes': 'No': ''
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

    const getAllPricing = ()=>{
        let reqBody = {
            from:'',
            to:'',
            pageNo,
            pageSize,
            id: user? user.id : ''
        }

        axios({
            method: 'post',
            url: `${allPricing}`,
            data: reqBody
        }).then(res=>{
            if(res.data.respCode === 0){
                setState(state=>({
                    ...state,
                    pricingList: res.data.respBody.content
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
        getAllPricing()
    },[])

    const onCreatePricing = ()=>{
        setState(state=>({
            ...state,
            submit: true
        }))
        let reqBody={
            agent,
            aggregator,
            merchant,
            name,
            discount,
            pricingRate,
            userId,
            products,
            cap
        }
        axios({
            method: 'post',
            url:`${createPricing}`,
            data: reqBody
        }).then(res=>{
            if(res.data.respCode === 0){
                setState(state=>({
                    ...state,
                    submit: false,
                    add: false
                }))
                toast.success(
                    `Pricing created successfully`,
                     { transition: Slide, hideProgressBar: true, autoClose: 3000 } 
                )
                getAllPricing()
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

    const onUpdatePricing = ()=>{
        setState(state=>({
            ...state,
            submit: true
        }))
        let reqBody={
            id,
            agent,
            aggregator,
            merchant,
            name,
            discount,
            pricingRate,
            userId,
            products,
            cap
        }
        axios({
            method: 'post',
            url:`${updatePricing}`,
            data: reqBody
        }).then(res=>{
            if(res.data.respCode === 0){
                setState(state=>({
                    ...state,
                    submit: false,
                    add: false
                }))
                toast.success(
                    `Pricing updated successfully`,
                     { transition: Slide, hideProgressBar: true, autoClose: 3000 } 
                )
                getAllPricing()
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
  return (
    <Layout title="Pricings">
        <Modal show={add} clicked={showModal} loading={submit} submit={modalValue === 'add' ? onCreatePricing: onUpdatePricing } title={modalValue === 'add' ? "Create New Pricing" : "Edit Pricing"} action="Submit">
            <AddPricing 
                onChange = {onChange} 
                agentValue={agentValue}
                aggregatorValue={aggregatorValue}
                cap={cap}
                pricingRate={pricingRate}
                discount={discount}
                merchantValue={merchantValue}
                products={products}
                name={name}
                userId={userId}

            />
        </Modal>
              <div className="d-flex justify-content-end align-items-center ">
                  <div className="d-flex justify-content-center align-items-center">
                        <div className="request-button" onClick={()=>showModal('add')}>
                            <VscAdd color={'#fff'} className="mr-5" />
                            Add Pricing
                        </div>
                    </div>
              </div>
  
          <Container fluid>
  
              <div className="data-table mt-40">
                  <Table responsive borderless className="bg-inherit">
                      <thead>
                          <tr style={{backgroundColor: '#F9843533', borderRadius: '5px'}}>
                              <th>user id</th>
                              <th>name</th>
                              <th>products</th>
                              <th>pricing rate</th>
                              <th>cap(#)</th>
                              <th>discount </th>
                              <th>merchant </th>
                              <th>agent </th>
                              <th>aggregator </th> 
                              <th>actions </th> 
                          </tr>
                      </thead>
  
                      <tbody>
                      {
                        pricingList?
                        pricingList.length === 0 ?
                            <NoResultFound />
                            :
                            pricingList.map((price, i)=>{
                                const{userId, name, products, pricingRate, cap, discount, agent, merchant, aggregator} = price;

                                return(
                                    <tr key={i}>
                                    <td>{userId}</td>
                                    <td>{name}</td>
                                    <td>{products}</td>
                                    <td>{pricingRate}%</td>
                                    <td>{cap}</td>
                                    <td>{discount}%</td>
                                    <td>{merchant ? <FcCheckmark size={20} /> : <VscClose  size={20}/>}</td>
                                    <td>{agent ? <FcCheckmark size={20} /> : <VscClose  size={20}/>}</td>
                                    <td>{aggregator ? <FcCheckmark size={20} /> : <VscClose  size={20}/>}</td>
                                    <td><span><BsPencil color="#0086E8" size={20} onClick={()=>showModal('edit', price)} /></span></td>
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

export default Pricing