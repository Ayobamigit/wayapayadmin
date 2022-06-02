import React, { useEffect, useState } from 'react';
import { Row, Col, Table, Container } from 'react-bootstrap'
import {IoFilterOutline} from 'react-icons/io5' 
import {FiSearch} from 'react-icons/fi'
import { allReferrals} from '../../plugins/urls'
import { toast, Slide } from "react-toastify";
import TerminalCards from '../Cards/TerminalCards'
import axios from '../../plugins/axios';
import NoResultFound from '../NoResultFound/NoResultFound'
import Layout from '../Layout/Layout'

const Referals = () => {
    const [state, setState] = useState({
        referralList:[]
    })

    const {referralList} = state;

    useEffect(()=>{
        getUsers()
    },[])

    const getUsers = ()=>{
        axios({
            method: 'get',
            url: `${allReferrals}`,
        }).then(res=>{
            if(res.data){
                setState(state=>({
                    ...state,
                    referralList: res.data
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
  return (
    <Layout title="Referals">
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
                
            </div>
        </div>

        <Container fluid>

            <Row className="mt-40">
                <Col>
                    <TerminalCards title="Total Number of Referral Codes Used" value="2008" color="text-dark" textColor="text-dark" size="fs-16"/>
                </Col>
                <Col>
                    <TerminalCards title="Total Users Registered with Referral Code" value="20,000" color="text-dark" textColor="text-dark" size="fs-16"/>
                </Col>
            </Row>

            <div className="data-table mt-40">
                <Table responsive borderless className="bg-inherit">
                    <thead>
                        <tr style={{backgroundColor: '#F9843533', borderRadius: '5px'}}>
                            <th>Business name</th>
                            <th>PHONE NUMBER</th>
                            <th>EMAIL ADDRESS</th>
                            <th>DATE JOINED</th>
                            <th>referral code</th>
                        </tr>
                    </thead>

                    <tbody>
                    {
                        referralList?
                        referralList.length === 0 ?
                            <NoResultFound />
                            :
                            referralList.map((business, i)=>{
                                const{referralCode, profile:{email, firstName, surname, phoneNumber, createdAt}} = business;
                                return(
                                    <tr key={i}>
                                    <td>{firstName +  ' ' + surname}</td>
                                    <td>{phoneNumber}</td>
                                    <td>{email}</td>
                                    <td>{createdAt}</td>
                                    <td>{referralCode}</td>
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

export default Referals