import React from 'react'
import Header from './Header/Header'
import SideBar from './SideBar/SideBar'
import './Layout.scss'

const Layout = (props) => {
  return (
    <div id="wrapper">
        <div id="header">
            <Header title={props.title}  />
        </div>

        <div id="sidebar">
            <SideBar title={props.title}  />
        </div>

        <div id="main">
            
            {props.children}    

        </div>
    </div>
  )
}

export default Layout