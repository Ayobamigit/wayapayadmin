import React, { createContext, useState } from 'react'
import AuthDispute from '../../components/DisputeComponents/AuthDispute'
import DisputeNav from '../../components/DisputeComponents/DisputeNav'
import OtherDispute from '../../components/DisputeComponents/OtherDispute'
import WayaDispute from '../../components/DisputeComponents/WayaDispute'
import Layout from '../../components/Layout/Layout'

export const DisputeContext = createContext();

const Disputes = () => {
    const[state, setState] = useState({
        route: 'waya'
    })

    const {route} = state;

    const onRouteChange = (value)=>{
        setState(state=>({
            ...state,
            route: value
        }))
    }


    const renderPages = ()=>{
        switch(route){
          case 'waya':
              return <WayaDispute />;
          case 'auth':
              return <AuthDispute />;
          case 'other':
              return <OtherDispute />;
          default:
              return <WayaDispute />
        }
    }
  return (
    <Layout title="Dispute">
        <DisputeContext.Provider value={{
            onRouteChange,
            state
        }}>
            <DisputeNav />
            {renderPages()}
        </DisputeContext.Provider>
    </Layout>
  )
}

export default Disputes