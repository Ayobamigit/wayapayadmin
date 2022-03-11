import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import SubmitLoader from '../SubmitLoader/SubmitLoader'
import './modal.scss'
import {ReactComponent as Close} from '../../assets/icons/close.svg'

const Modal = (props) => {
    return (
        <>
            <Backdrop show={props.show} closeModal={props.clicked} />

            <div 
                className="Modal"
                style = {{
                    transform:props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' :'0',
                    
                }}
            >

                <div className="modaldialog modaldialogcentered"
                 
                >
                    <div className="modalcontent">
                          <div className="d-flex justify-content-end" style={{padding:'16px', paddingBottom: '0'}}><Close onClick={props.clicked} className="cursor-pointer" /></div>
                        <div className="modalheader">
                            <h6 className="fs-18 fw-700 mb-0">
                                {props.title}
                            </h6>
                        </div>

                        <div className="modalbody">
                            {props.children}
                        </div>

                        <div className="modalfooter">
                            {props.close ? <button type="button" className="button-white mr-30" onClick={props.clicked}>{props.close}</button> : null}
                            <button type="submit" className={`${props.extraPadding} orange-button`} onClick={props.submit}>
                                {
                                    props.loading ?
                                    <SubmitLoader />
                                    :
                                    props.action

                                }
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Modal