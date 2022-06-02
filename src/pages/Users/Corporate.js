import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import Layout from '../../components/Layout/Layout'
import Kyc from '../../components/UsersComponents/Kyc'
import Users from '../../components/UsersComponents/Users'

const Corporate = () => {
    const [state, setState] = useState({
      tab:'users'
    })
    
    const {tab} = state

    const switchTabs = (value) =>{
      setState(state=>({
        ...state,
        tab: value
      }))
    }

    const renderPages = ()=>{
      switch(tab){
        case 'users':
            return <Users />;
        case 'kyc':
            return <Kyc/>;
        default:
            return <Users />
    }
  }
  return (
    <Layout title="Corporate Users">
      <Container fluid>
            <div className="bg-grey d-flex justify-content-between font-secondary br-30 width-35 mb-30 cursor-pointer">
            <div className={`d-flex justify-content-between ${tab === 'users' ? 'active-option' : 'inactive-option'}`} onClick={()=>switchTabs('users')}>
                <h4 className={`fs-14 ${tab === 'users' ? 'text-white' : 'text-darker'}`}>ALL CORPORATE USERS</h4>
            </div>

            <div className={`d-flex justify-content-between ${tab === 'kyc' ? 'active-option' : 'inactive-option'}`}onClick={()=>switchTabs('kyc')}>
                <h4  className={`fs-14 ${tab === 'kyc' ? 'text-white' : 'text-darker'}`}>CORPORATE KYC</h4>
            </div>
            </div>

            {renderPages()}
        </Container>
    </Layout>
  )
}

export default Corporate