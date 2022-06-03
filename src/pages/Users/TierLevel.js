import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import Tier1 from '../../components/UsersComponents/Tier1'
import {ReactComponent as Back} from '../../assets/icons/back.svg'
import { useMatch, useNavigate } from 'react-router'
import { Col, Container, Row } from 'react-bootstrap'
import axios from '../../plugins/axios'
import { kycStatus } from '../../plugins/urls'
import Tier2 from '../../components/UsersComponents/Tier2'
import Tier3 from '../../components/UsersComponents/Tier3'
import Tier4 from '../../components/UsersComponents/Tier4'


const TierLevel = () => {
    const [state, setState] = useState({
        level: 1
    })

    const {tierNo, level} = state;
    const navigate = useNavigate()
    const match = useMatch('/corporate-users/:id');
    const id = match ?  match.params.id : ''
    useEffect(()=>{
    // console.log(id)
        axios({
            method: 'get',
            url:`${kycStatus}/${id}`
        }).then(res=>{
            console.log(res)
        })
    })

    const renderPages = ()=>{
        switch(level){
            case 1:
                return <Tier1 />;
            case 2:
                return <Tier2 />;
            case 3:
                return <Tier3 />;
            case 4:
                return <Tier4 />;
            default:
                return <Tier1 />
        }
    }

    const onClickNext = () =>{
        let step = level;

        step = step >= 3? 4: step + 1
        setState(state =>({
            ...state,
            level:step
        }))
            
        

         // If the current step is 1 or 2, then add one on "next" button click
       
    }

    const onClickPrev = () =>{
        let step = level;
        // If the current level is 2 or 3 or 4, then subtract one on "previous" button click
        step = step <= 1? 1: step - 1
        setState(state =>({
            ...state,
            level:step
        }))
    }
  return (
    <Layout title="Corporate Users">
        <Container>
        <Row className="font-default">
            <Col lg={4}>
                <h4 className="text-darker fs-14 fw-700 cursor-pointer" onClick={()=>navigate(-1)}>
                    <span className="mr-15"><Back /></span>
                    Back 
                </h4>
            </Col>
            <Col>
                <p className="text-darker fs-18 fw-500 cursor-pointer">Upgrade KYC Level</p>
            </Col>
        </Row>
        <div className='tier p-30'>
            {renderPages()}

            <div className='d-flex justify-content-center'>
                <div className='kyc-action d-flex'>
                    <p className='mb-0 fs-14 text-default cursor-pointer' onClick={onClickPrev}>Previous</p>
                    <span className='ml-22 mb-0 fs-14 text-default fw-700'>{level}</span>
                    <p className='mb-0 fs-14 text-default cursor-pointer ml-22' onClick={onClickNext}>Next</p>
                </div>
            </div>
        </div>
        </Container>
    </Layout>
  )
}

export default TierLevel