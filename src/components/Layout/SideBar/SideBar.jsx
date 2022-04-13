import React from 'react';
import './side.scss'
import { ReactComponent as Dashboard } from "../../../assets/icons/dashboard.svg";
import { ReactComponent as Logo } from "../../../assets/icons/logo.svg";
import { ReactComponent as Logs } from "../../../assets/icons/logs.svg";
import { ReactComponent as Official } from "../../../assets/icons/official.svg";
import { ReactComponent as Otp } from "../../../assets/icons/otp.svg";
import { ReactComponent as Pos } from "../../../assets/icons/pos.svg";
import { ReactComponent as Settings } from "../../../assets/icons/settings.svg";
import { ReactComponent as Tech } from "../../../assets/icons/tech.svg";
import { ReactComponent as Transfer } from "../../../assets/icons/transfer.svg";
import { ReactComponent as User } from "../../../assets/icons/user.svg";
import { ReactComponent as Logout } from "../../../assets/icons/logout.svg";
import { ReactComponent as SideWayaBank } from "../../../assets/icons/side_wayabank.svg";
import { ReactComponent as SideWayaGram } from "../../../assets/icons/side_wayagram.svg";
import { ReactComponent as SideWayaWeb } from "../../../assets/icons/side_web.svg";
import {NavLink} from 'react-router-dom';
import Divider from '../../Divider/Divider';
import {useNavigate } from 'react-router'


const SideBar = (props) => {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear();
        navigate('/')
    }
  return (
    <div className="Sidebar">
        <div className="side-padding">
            <Logo />
        </div>
        
        <div className="NavigationBox">
            <ul className={props.title === 'Dashboard' ? 'Navigation-active' : 'Navigation'}>
                <li>
                    <Dashboard className={props.title === 'Dashboard' ? 'activeIcon' : 'sideIcon'} size={20} /><NavLink to ="/">Dashboard</NavLink>
                </li>
            </ul>

            <ul className={props.title === 'Users' ? 'Navigation-active' : 'Navigation'}>
                <li className="dropdown" href="#userSubmenu" data-toggle="collapse" >
                    <User className={props.title === 'Users' ? 'activeIcon' : 'sideIcon'} size={20} /><NavLink to ="#">Users</NavLink>

                    <ul className="collapse list-unstyled nav-link" id="userSubmenu">

                            <li className="submenu">
                                <NavLink to="/" activeClassName="selected">
                                    Manage Admin Users
                                </NavLink>
                            </li>

                            <li className="submenu">
                                <NavLink to="/" activeClassName="selected">
                                    Manage Corporate Users
                                </NavLink>
                            </li>
                            <li className="submenu">
                                <NavLink to="/" activeClassName="selected">
                                    Manage Referals
                                </NavLink>
                            </li>

                    </ul>
                </li>

            </ul>

            <ul className={props.title === 'Transactions' ? 'Navigation-active' : 'Navigation'}>
                <li>
                    <Transfer className={props.title === 'Transactions' ? 'activeIcon' : 'sideIcon'} size={20} /><NavLink to ="/transactions">Transactions</NavLink>
                </li>
            </ul>

            <ul className={props.title === 'Manage KYC' ? 'Navigation-active' : 'Navigation'}>
                <li>
                    <Settings className={props.title === 'Manage KYC' ? 'activeIcon' : 'sideIcon'} size={20} /><NavLink to ="/kyc">Manage KYC</NavLink>
                </li>
            </ul>
            <ul className={props.title === 'Manage POS' ? 'Navigation-active' : 'Navigation'}>
                <li>
                    <Pos className={props.title === 'Manage POS' ? 'activeIcon' : 'sideIcon'} size={20} /><NavLink to ="/manage-pos">Manage POS</NavLink>
                </li>
            </ul>
            <ul className={props.title === 'Logs' ? 'Navigation-active' : 'Navigation'}>
                <li className="dropdown" href="#logSubmenu" data-toggle="collapse">
                    <Logs className={props.title === 'Logs' ? 'activeIcon' : 'sideIcon'} size={20} /><NavLink to ="#">Logs</NavLink>

                    <ul className="collapse list-unstyled nav-link" id="logSubmenu">

                            <li className="submenu">
                                <NavLink to="/disputes" activeClassName="selected">
                                    Dispute
                                </NavLink>
                            </li>

                            <li className="submenu">
                                <NavLink to="/" activeClassName="selected">
                                    Feedback
                                </NavLink>
                            </li>
                            <li className="submenu">
                                <NavLink to="/admin-logs" activeClassName="selected">
                                    Admin Logs
                                </NavLink>
                            </li>
                            <li className="submenu">
                                <NavLink to="/" activeClassName="selected">
                                    Request Logs
                                </NavLink>
                            </li>
                            <li className="submenu">
                                <NavLink to="/" activeClassName="selected">
                                    Third Party Disputes
                                </NavLink>
                            </li>
                            

                    </ul>
                </li>
            </ul>
            <ul className={props.title === 'OTP' ? 'Navigation-active' : 'Navigation'}>
                <li>
                    <Otp className={props.title === 'OTP' ? 'activeIcon' : 'sideIcon'} size={20} /><NavLink to ="/">OTP</NavLink>
                </li>
            </ul>
            <ul className={props.title === 'Transaction Routing' || props.title === 'Pricings' || props.title === 'Stations' || props.title === 'Scheme' ? 'Navigation-active' : 'Navigation'}>
                <li className="dropdown" href="#techSubmenu" data-toggle="collapse">
                    <Tech className={props.title === 'Transaction Routing' || props.title === 'Pricings' || props.title === 'Stations' ? 'activeIcon' : 'sideIcon'} size={20} /><NavLink to ="#">Tech</NavLink>

                    <ul className="collapse list-unstyled nav-link" id="techSubmenu">

                            <li className="submenu">
                                <NavLink to="/" activeClassName="selected">
                                    Tech Admin Vendors
                                </NavLink>
                            </li>

                            <li className="submenu">
                                <NavLink to="/pricing" activeClassName="selected">
                                    Pricings
                                </NavLink>
                            </li>
                            <li className="submenu">
                                <NavLink to="/" activeClassName="selected">
                                    Commissions
                                </NavLink>
                            </li>
                            <li className="submenu">
                                <NavLink to="/" activeClassName="selected">
                                    Third Party Access
                                </NavLink>
                            </li>
                            <li className="submenu">
                                <NavLink to="/routing" activeClassName="selected">
                                    Routing
                                </NavLink>
                            </li>
                            <li className="submenu">
                                <NavLink to="/stations" activeClassName="selected">
                                    Stations
                                </NavLink>
                            </li>
                            <li className="submenu">
                                <NavLink to="/scheme" activeClassName="selected">
                                    Scheme
                                </NavLink>
                            </li>

                    </ul>
                </li>
            </ul>
            <ul className={props.title === 'Waya Official' ? 'Navigation-active' : 'Navigation'}>
                <li>
                    <Official className={props.title === 'Waya Official' ? 'activeIcon' : 'sideIcon'} size={20} /><NavLink to ="/">Waya Official</NavLink>
                </li>
            </ul>

        </div>

        <Divider />

        <div className="NavigationBox">
            <ul className='Navigation'>
                <li>
                    <SideWayaBank  className='sideIcon' size={20} /><NavLink to ="/">Wayabank</NavLink>
                </li>
            </ul>
            <ul className='Navigation'>
                <li>
                    <SideWayaGram className='sideIcon' size={20} /><NavLink to ="/">Wayagram</NavLink>
                </li>
            </ul>
            <ul className='Navigation'>
                <li>
                    <SideWayaWeb className='sideIcon' size={20} /><NavLink to ="/">Wayapay</NavLink>
                </li>
            </ul>

            <ul className='Navigation'>
                <li onClick = {logout}>
                    <Logout className='sideIcon' size={20} /><NavLink to ="/">Log Out</NavLink>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default SideBar