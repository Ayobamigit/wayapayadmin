import React from 'react'
import { Table } from 'react-bootstrap';
import {ReactComponent as Cancel} from '../../assets/icons/cancel.svg' 
import {ReactComponent as Check} from '../../assets/icons/approve.svg' 
import {AiOutlineEye} from 'react-icons/ai'

const Tier3 = () => {
  return (
    <div style={{marginBottom: '50px'}}>
        <div className='d-flex justify-content-between'>
            <div>
                <p className='fs-18 fw-700 text-grey'>Tier 3</p>
            </div>

            <div>
                <p className='fs-14 fw-700 text-darker m-0'>Status</p>
                <button className='button-success mt-2'>
                    Completed
                </button>
            </div>
        </div>

        <div className='tier p-20 mt-40'>
            <Table responsive borderless className="bg-inherit">
                <thead>
                    <tr className='kyc-table' style={{borderRadius: '5px'}}>
                        <th>KYC Requirement</th>
                        <th>Status</th>
                        <th>Documents</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Passport</td>
                        <td className='text-sharp-green'>Approved</td>
                        <td>
                            <span className='tabkyc'>
                                business_logo.jpg
                            </span>
                        </td>
                        <td>
                            <span className="tabblack ml-10"><AiOutlineEye size={20} color="#000" /> View</span>
                            <span className="tabactive ml-10"><Check size={20} color="#FF4400"/> Approve</span>
                            <span className="actionDanger ml-10" ><Cancel size={20} color="#FF4400"/> Reject</span>

                        </td>
                    </tr>
                    <tr>
                        <td>Passport/ID/Voter’s Card/NINe</td>
                        <td className='text-sharp-green'>Approved</td>
                        <td>
                            <span className='tabkyc'>
                             National ID.jpg
                            </span>
                        </td>
                        <td>
                            <span className="tabblack ml-10"><AiOutlineEye size={20} color="#000" /> View</span>
                            <span className="tabactive ml-10"><Check size={20} color="#FF4400"/> Approve</span>
                            <span className="actionDanger ml-10" ><Cancel size={20} color="#FF4400"/> Reject</span>

                        </td>
                    </tr>
                    <tr>
                        <td>Utility Bill on the name</td>
                        <td className='text-default'>Pending</td>
                        <td>
                            <span className='tabkyc'>
                            Provide description about your business here..
                            </span>
                        </td>
                        <td>
                            <span className="tabblack ml-10"><AiOutlineEye size={20} color="#000" /> View</span>
                            <span className="tabactive ml-10"><Check size={20} color="#FF4400"/> Approve</span>
                            <span className="actionDanger ml-10" ><Cancel size={20} color="#FF4400"/> Reject</span>

                        </td>
                    </tr>
                    <tr>
                        <td>Proove of Address, not less than 1 month old</td>
                        <td className='text-red'>Rejected</td>
                        <td>
                            <span className='tabkyc'>
                            National ID.jpg
                            </span>
                        </td>
                        <td>
                            <span className="tabblack ml-10"><AiOutlineEye size={20} color="#000" /> View</span>
                            <span className="tabactive ml-10"><Check size={20} color="#FF4400"/> Approve</span>
                            <span className="actionDanger ml-10" ><Cancel size={20} color="#FF4400"/> Reject</span>

                        </td>
                    </tr>
                    <tr>
                        <td>Address verification - photo of the street, house number, left and right </td>
                        <td className='text-red'>Rejected</td>
                        <td>
                            <span className='tabkyc'>
                            National ID.jpg
                            </span>
                        </td>
                        <td>
                            <span className="tabblack ml-10"><AiOutlineEye size={20} color="#000" /> View</span>
                            <span className="tabactive ml-10"><Check size={20} color="#FF4400"/> Approve</span>
                            <span className="actionDanger ml-10" ><Cancel size={20} color="#FF4400"/> Reject</span>

                        </td>
                    </tr>
                    

                </tbody>
                </Table>
        </div>

    </div>
  )
}

export default Tier3