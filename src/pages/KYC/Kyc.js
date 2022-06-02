import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import BusinessType from '../../components/KycComponents/BusinessType'
import TierLevels from '../../components/KycComponents/TierLevels'

import Layout from '../../components/Layout/Layout'

const Kyc = () => {
    const [state, setState] = useState({
        tab:'tier'
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
          case 'tier':
              return <TierLevels />;
          case 'business':
              return <BusinessType />;
          default:
              return <TierLevels />
      }
    }
  return (
    <Layout title="Manage KYC">
        <Container fluid>
            <div className="bg-grey d-flex justify-content-between font-secondary br-30 width-35 mb-30 cursor-pointer">
            <div className={`d-flex justify-content-between ${tab === 'tier' ? 'active-option' : 'inactive-option'}`} onClick={()=>switchTabs('tier')}>
                <h4 className={`fs-14 ${tab === 'tier' ? 'text-white' : 'text-darker'}`}>Tier Levels Management</h4>
            </div>

            <div className={`d-flex justify-content-between ${tab === 'business' ? 'active-option' : 'inactive-option'}`}onClick={()=>switchTabs('business')}>
                <h4  className={`fs-14 ${tab === 'business' ? 'text-white' : 'text-darker'}`}>Business Type</h4>
            </div>
            </div>

            {renderPages()}
        </Container>
    </Layout>
  )
}

export default Kyc