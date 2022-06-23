import React, { createContext, useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import {ReactComponent as Back} from '../../assets/icons/back.svg'
import { Row } from 'react-bootstrap'
import TransactionDetails from '../../components/TransactionComponents/TransactionDetails'
import CardDetails from '../../components/TransactionComponents/CardDetails'
import axios from '../../plugins/axios'
import { viewTransaction } from '../../plugins/urls'
import { toast, Slide } from "react-toastify"
import { useMatch, useNavigate } from 'react-router';

export const TransactionContext = createContext()
const Transaction = () => {
  const navigate = useNavigate()
  const match = useMatch('/transaction/:id');
  const id = match ?  match.params.id : ''
  const [state, setState] = useState({
    referenceID:'',
    transactionCategory:'',
    terminalType:'',
    paymentMethod:'',
    amount:'',
    newAmount: '',
    terminalId:'',
    paymentStatus:'',
    businessName: '',
    authCode:'',
    transactionLocation:'',
    scheme:'',
    processedBy:'',
    cardNo:'',
    orgName:''
  })

  useEffect(()=>{

    axios({
      method: 'post',
      url:`${viewTransaction}`,
      headers:{
        'Content-Type': 'application/json',
    },
      data: id
    }).then(res=>{
      // console.log(res)
      if(res.data.respCode === 0){
        const {paymentStatus, paymentMethod, transactionCategory,terminalType, de2, de4, de41, de37, de38, transactionLocation, scheme, processedBy, terminals} =res.data.respBody
        setState(state=>({
          ...state,
          paymentStatus,
          paymentMethod,
          transactionCategory,
          terminalType,
          amount: de4,
          terminalId: de41,
          referenceID: de37,
          authCode: de38,
          transactionLocation,
          scheme,
          processedBy,
          cardNo: de2,
          orgName: terminals ? terminals.merchants ? terminals.merchants.orgName: '':''
        }))
      }
    }).catch(err=>{
      toast.error(`${err.response.data.message}`, {
      transition: Slide,
      hideProgressBar: true,
      autoClose: 3000,
      })
  })
  }, [])

  return (
    <Layout title="Transactions">
      <TransactionContext.Provider value={{
        state,
      }}>
        <div className="font-default address">
            <h4 className="text-darker fs-14 fw-700 cursor-pointer" onClick={()=>navigate(-1)}>
                <span className="mr-15"><Back /></span>
                Back 
            </h4>

            <Row className="mt-20">
                <TransactionDetails />
                <CardDetails />
            </Row>
        </div>
      </TransactionContext.Provider>

    </Layout>
  )
}

export default Transaction