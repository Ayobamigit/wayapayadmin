import React, { useContext } from 'react'
import { DisputeContext } from '../../pages/Disputes/Disputes'
import './dispute.scss'

const DisputeNav = () => {
    const {state:{route}, onRouteChange} = useContext(DisputeContext)
  return (
    <div className="Nav-Bar">
           <div className="nav-navigation">
               <ul className="nav-ul">
                   <li 
                        onClick={()=>onRouteChange('waya')} 
                        className={route === 'waya' ? 'nav-li-active' : null}
                    >
                       WayaPOS Dispute
                    </li>

                   <li 
                        onClick={()=>onRouteChange('auth')} 
                        className={route === 'auth' ? 'nav-li-active' : null}
                    >
                        Auth & Notification Disputes
                    </li>

                   <li 
                        onClick={()=>onRouteChange('other')} 
                        className= {route === 'other' ? 'nav-li-active' : null}
                    >
                        Other Disputes
                    </li>
               </ul>
            </div> 
        </div>
  )
}

export default DisputeNav