import React from 'react'
import './Header.scss'

const Header = (props) => {
  return (
    <div className='Header'>
            <div className="d-flex justify-content-between">
                {/* <Col lg={1} sm={1} md={1} xs={2} className="hide">
                  <DrawerToggle clicked={props.drawerToggle} />
                </Col> */}
                <h1 className='Pagetitle'>
                    {props.title}
                </h1>

                <div className='user'>
                    <p className='greet'> Hi, <span className='name'>Admin</span></p>
                    <div className='userIcon'>
                        <h1 className='initials'>A</h1>
                        {/* <h1 className={headerStyles.initials}>{ data ? data.firstName.substring(0, 1) : 'A'}</h1> */}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Header