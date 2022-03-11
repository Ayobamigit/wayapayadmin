import React, {useState} from 'react'
import { Container } from 'react-bootstrap'

import Layout from '../../components/Layout/Layout'
import PosDevice from '../../components/PosComponents/PosDevice'
import PosRequest from '../../components/PosComponents/PosRequest'

const Terminals = () => {
    const [state, setState] = useState({
        tab:'device'
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
          case 'device':
              return <PosDevice />;
          case 'request':
              return <PosRequest />;
          default:
              return <PosDevice />
      }
    }
  return (
    <Layout title="Manage POS">
        <Container fluid>
            <div className="bg-grey d-flex justify-content-between font-secondary br-30 width-35 mb-30 cursor-pointer">
            <div className={`d-flex justify-content-between ${tab === 'device' ? 'active-option' : 'inactive-option'}`} onClick={()=>switchTabs('device')}>
                <h4 className={`fs-14 ${tab === 'device' ? 'text-white' : 'text-darker'}`}>Manage POS Device</h4>
            </div>

            <div className={`d-flex justify-content-between ${tab === 'request' ? 'active-option' : 'inactive-option'}`}onClick={()=>switchTabs('request')}>
                <h4  className={`fs-14 ${tab === 'request' ? 'text-white' : 'text-darker'}`}>Manage POS Request</h4>
            </div>
            </div>

            {renderPages()}
        </Container>
    </Layout>
  )
}

export default Terminals