import React, {useEffect, useState} from 'react'
import { Row, Col, Table, Container } from 'react-bootstrap'
import Cards from '../../components/Cards/Cards'
import {FiSearch} from 'react-icons/fi'
import {IoFilterOutline} from 'react-icons/io5'
import {BiLinkExternal} from 'react-icons/bi'
import TransactionCard from '../Cards/TransactionCard'
import {useNavigate } from 'react-router'
import axios from '../../plugins/axios'
import { toast, Slide } from "react-toastify"
import { allTransactions, revenueStats, transactionStats } from '../../plugins/urls'
import NoResultFound from '../NoResultFound/NoResultFound'
import moment from "moment"


const WayaPos = () => {
    const {user} = JSON.parse(localStorage.getItem('userDetails'));
    const navigate = useNavigate()

    const [state, setState] = useState({
        transactions:[],
        from:'',
        to:'',
        pageNo:0,
        pageSize: 20,
        refunded:'',
        failed:'',
        abandoned:'',
        successful:'',
        gross_revenue:'',
        net_revenue:''
    })

    const {from, to, pageNo, pageSize, transactions, failed, refunded, abandoned, successful, net_revenue, gross_revenue} = state;

    useEffect(()=>{
        getTransactions();
        getTransactionsStats();
        getRevenueStats()
    }, [])

    const getTransactions = () =>{
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
            url: `${allTransactions}`,
            data: reqBody
        }).then(res=>{
            if(res.data.respCode === 0){
                setState(state=>({
                    ...state,
                    transactions: res.data.respBody.content
                }))
            }
        })
        .catch(err=>{
            toast.error(`${err.response.data.message}`, {
            transition: Slide,
            hideProgressBar: true,
            autoClose: 3000,
            })
        })
    }

    const getTransactionsStats = () =>{

        axios({
            method: 'post',
            url: `${transactionStats}`
        }).then(res=>{
            if(res.data.respCode === 0){
                const {failed, refunded, abandoned, successful} = res.data.respBody
                setState(state=>({
                    ...state,
                    failed,
                    refunded,
                    abandoned,
                    successful
                }))
            }
        })
        .catch(err=>{
            toast.error(`${err.response.data.message}`, {
            transition: Slide,
            hideProgressBar: true,
            autoClose: 3000,
            })
        })
    }

    const getRevenueStats = () =>{

        axios({
            method: 'post',
            url: `${revenueStats}`
        }).then(res=>{
            if(res.data.respCode === 0){
                const {gross_revenue, net_revenue} = res.data.respBody
                setState(state=>({
                    ...state,
                    gross_revenue,
                    net_revenue
                }))
            }
        })
        .catch(err=>{
            toast.error(`${err.response.data.message}`, {
            transition: Slide,
            hideProgressBar: true,
            autoClose: 3000,
            })
        })
    }
  return (
    <>
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
                            <input className="input ml-10" placeholder="search with reference id" />
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

                </div>
            </div>
        </div>

        <Container fluid>
            <Row className="mt-40">
                <Col>
                    <Cards cardTitle="Gross Revenue" value={gross_revenue} color="text-orange" textColor="text-darker"/>
                </Col>
                <Col>
                    <Cards cardTitle="Net Revenue" value={net_revenue} color="text-orange" textColor="text-darker"/>
                </Col>
                <Col>
                    <TransactionCard failed={failed} refunded={refunded} abandoned={abandoned} successful={successful} />
                </Col>
            </Row>

            <div className="data-table mt-40">
                <Table responsive borderless className="bg-inherit">
                    <thead>
                        <tr style={{backgroundColor: '#F9843533', borderRadius: '5px'}}>
                            <th>Reference Id</th>
                            <th>Transaction Category</th>
                            <th>Terminal Type</th>
                            <th>Payment Method</th>
                            <th>Amount</th>
                            <th>Created At</th>
                            <th>Payment Status</th>
                            <th>action</th>
                        </tr>
                    </thead>

                    <tbody>
                    {
                        transactions?
                            transactions.length === 0 ?
                            <NoResultFound />
                            :
                            transactions.map((transaction, i)=>{
                                const{de37, transactionCategory, terminalType, paymentMethod, de7, paymentStatus, de4, id} = transaction;
                                const statusClass = () =>{
                                    if(paymentStatus){
                                        if(paymentStatus.toLowerCase() === 'successful'){
                                            return 'tabactive'
                                        }
                                        else if(paymentStatus.toLowerCase() === 'refunded'){
                                            return 'tabpending'
                                        } 
                                        else if(paymentStatus.toLowerCase() === 'abandoned'){
                                            return 'tabdamaged'
                                        }
                                        else{
                                            return 'tabdanger'
                                        }
                                    }
                                }

                                return(
                                    <tr key={i}>
                                    <td>{de37}</td>
                                    <td>{transactionCategory}</td>
                                    <td>{terminalType}</td>
                                    <td>{paymentMethod}</td>
                                    <td>{de4}</td>
                                    <td>{de7 ? moment(new Date(de7)).format('D/MM/YYYY') : 'N/A'}</td>
                                    <td><span className={`${statusClass()}`}>{paymentStatus}</span></td>
                                    <td><span className="tabtransparent" onClick={()=>{navigate(`/transaction/${id}`)}}>View More</span></td>
                                </tr>
                                )
                            })
                        :
                        <NoResultFound />
                    }
                        {/* <tr>
                            <td>44aa22f4-fc64-5b</td>
                            <td>Cashout</td>
                            <td>Nexgo</td>
                            <td>Card</td>
                            <td>NGN 2000</td>
                            <td>Tue. 9th Sept 2021 07:04 AM (WAT)</td>
                            <td><span className="tabactive">Successful</span></td>
                            <td><span className="tabtransparent" onClick={()=>{navigate('/transaction/1')}}>View More</span></td>
                        </tr>

                        <tr>
                            <td>44aa22f4-fc64-5b</td>
                            <td>Cashout</td>
                            <td>Nexgo</td>
                            <td>Card</td>
                            <td>NGN 2000</td>
                            <td>Tue. 9th Sept 2021 07:04 AM (WAT)</td>
                            <td><span className="tabactive">Successful</span></td>
                            <td><span className="tabtransparent">View More</span></td>
                        </tr>

                        <tr>
                        <td>44aa22f4-fc64-5b</td>
                            <td>Cashout</td>
                            <td>Nexgo</td>
                            <td>Card</td>
                            <td>NGN 2000</td>
                            <td>Tue. 9th Sept 2021 07:04 AM (WAT)</td>
                            <td><span className="tabdamaged">Abandoned</span></td>
                            <td><span className="tabtransparent">View More</span></td>

                        </tr>

                        <tr>
                            <td>44aa22f4-fc64-5b</td>
                            <td>Cashout</td>
                            <td>Nexgo</td>
                            <td>Card</td>
                            <td>NGN 2000</td>
                            <td>Tue. 9th Sept 2021 07:04 AM (WAT)</td>
                            <td><span className="tabdanger">Failed</span></td>
                            <td><span className="tabtransparent">View More</span></td>

                        </tr>

                        <tr>
                            <td>44aa22f4-fc64-5b</td>
                            <td>Cashout</td>
                            <td>Nexgo</td>
                            <td>Card</td>
                            <td>NGN 2000</td>
                            <td>Tue. 9th Sept 2021 07:04 AM (WAT)</td>
                            <td><span className="tabpending">Refunded</span></td>
                            <td><span className="tabtransparent">View More</span></td>

                        </tr> */}
                    </tbody>
                </Table>
            </div>
        </Container>
    </>
  )
}

export default WayaPos