import React, { useEffect, useState } from 'react';
import { Row, Col, Table, Container } from 'react-bootstrap'
import {IoFilterOutline} from 'react-icons/io5' 
import {FiSearch} from 'react-icons/fi'
import { activeCorporate, registeredCorporate, inactiveCorporate, allUsers } from '../../plugins/urls'
import { toast, Slide } from "react-toastify";
import TerminalCards from '../Cards/TerminalCards'
import axios from '../../plugins/axios';
import NoResultFound from '../NoResultFound/NoResultFound'


const Users = () => {
    const [state, setState] = useState({
        activeUsers: 0,
        inactiveUsers:0,
        registeredUsers:0,
        corporateList:[]
    })

    const {activeUsers, inactiveUsers, registeredUsers, corporateList} = state;

    useEffect(()=>{
        axios({
            method: 'get',
            url:`${activeCorporate}`
        }).then(res=>{
            setState(state=>({
                ...state,
                activeUsers: res.data
            }))
        })
        .catch(err=>{
            toast.error(`${err.response.data.message}`, {
                transition: Slide,
                hideProgressBar: true,
                autoClose: 3000,
              });
        })

        axios({
            method: 'get',
            url:`${inactiveCorporate}`
        }).then(res=>{
            setState(state=>({
                ...state,
                inactiveUsers: res.data
            }))
        })
        .catch(err=>{
            toast.error(`${err.response.data.message}`, {
                transition: Slide,
                hideProgressBar: true,
                autoClose: 3000,
              });
        })

        axios({
            method: 'get',
            url:`${registeredCorporate}`
        }).then(res=>{
            setState(state=>({
                ...state,
                registeredUsers: res.data
            }))
        })
        .catch(err=>{
            toast.error(`${err.response.data.message}`, {
                transition: Slide,
                hideProgressBar: true,
                autoClose: 3000,
              });
        })

        getUsers()
    },[])

    const getUsers = ()=>{
        axios({
            method: 'get',
            url: `${allUsers}?size=1000`,
        }).then(res=>{
            // console.log(res.data.users)
            if(res.data){
                setState(state=>({
                    ...state,
                    corporateList: res.data.users
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
                
            </div>
        </div>

        <Container fluid>

            <Row className="mt-40">
                <Col>
                    <TerminalCards title="Total Registered Users" value={registeredUsers} color="text-dark" textColor="text-dark" size="fs-16"/>
                </Col>
                <Col>
                    <TerminalCards title="Total Active users" value={activeUsers} color="text-dark" textColor="text-dark" size="fs-16"/>
                </Col>
                <Col>
                    <TerminalCards title="Total Inactive Users" value={inactiveUsers} color="text-dark" textColor="text-dark" size="fs-16"/>
                </Col>
            </Row>

            <div className="data-table mt-40">
                <Table responsive borderless className="bg-inherit">
                    <thead>
                        <tr style={{backgroundColor: '#F9843533', borderRadius: '5px'}}>
                            <th>Business name</th>
                            <th>PHONE</th>
                            <th>EMAIL</th>
                            <th>State</th>
                            <th>city</th>
                            <th>business type</th>
                            <th>DATE CREATED</th>
                        </tr>
                    </thead>

                    <tbody>
                    {
                        corporateList?
                        corporateList.length === 0 ?
                            <NoResultFound />
                            :
                            corporateList.map((business, i)=>{
                                const{otherDetails:{organisationEmail,businessType, organisationName, organizationCity, organizationState, organisationPhone}, createdAt} = business;
                                return(
                                    <tr key={i}>
                                    <td>{organisationName}</td>
                                    <td>{organisationPhone}</td>
                                    <td>{organisationEmail}</td>
                                    <td>{organizationState}</td>
                                    <td>{organizationCity}</td>
                                    <td>{businessType}</td>
                                    <td>{createdAt}</td>
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
  )
}

export default Users