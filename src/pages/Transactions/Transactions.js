import React, {useState} from 'react'
import Layout from '../../components/Layout/Layout'
import WayaPos from '../../components/TransactionComponents/WayaPos'
import {ReactComponent as Arrow} from '../../assets/icons/arrows.svg'
import WayaAgency from '../../components/TransactionComponents/WayaAgency'
import WayaSettlement from '../../components/TransactionComponents/WayaSettlement'

const Transactions = () => {
  const [state, setState] = useState({
    tab:'transactions'
  })

  const switchTabs = (value) =>{
    setState(state=>({
      ...state,
      tab: value
    }))
  }

  const renderPages = ()=>{
    switch(tab){
      case 'transactions':
          return <WayaPos />;
      case 'settlement':
        return <WayaSettlement />;
      case 'agency':
          return <WayaAgency />;
      default:
          return <WayaPos />
  }
}

  const {tab} = state
  return (
      <Layout title="Transactions">
        <div className="bg-white d-flex justify-content-between font-default br-30 width-70 mb-30 cursor-pointer">
          <div className={`d-flex justify-content-between ${tab === 'transactions' ? 'active-option' : 'inactive-option'}`} onClick={()=>switchTabs('transactions')}>
            <Arrow className={`mr-15 mt-05 ${tab === 'transactions' ? 'white-icon' : 'grey-icon'}` }/>
            <h4 className={`fs-16 ${tab === 'transactions' ? 'text-white' : 'text-default'}`}>Cashout Transactions</h4>
          </div>

          <div className={`d-flex justify-content-between ${tab === 'settlement' ? 'active-option' : 'inactive-option'}`}onClick={()=>switchTabs('settlement')}>
            <Arrow className={`mr-15 mt-05 ${tab === 'settlement' ? 'white-icon' : 'grey-icon'}` } />
            <h4  className={`fs-16 ${tab === 'settlement' ? 'text-white' : 'text-default'}`}>Cashout Settlements</h4>
          </div>

          <div className={`d-flex justify-content-between ${tab === 'agency' ? 'active-option' : 'inactive-option'}`}onClick={()=>switchTabs('agency')}>
            <Arrow className={`mr-15 mt-05 ${tab === 'agency' ? 'white-icon' : 'grey-icon'}` } />
            <h4  className={`fs-16 ${tab === 'agency' ? 'text-white' : 'text-default'}`}>Agency Transactions</h4>
          </div>
        </div>
          {renderPages()}
      </Layout>
  )
}

export default Transactions