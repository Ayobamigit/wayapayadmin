import React from 'react'
import { Table } from 'react-bootstrap';
import {ReactComponent as Cancel} from '../../assets/icons/cancel.svg' 
import {ReactComponent as Check} from '../../assets/icons/approve.svg' 
import {AiOutlineEye} from 'react-icons/ai'

const Tier4 = () => {
  return (
    <div style={{marginBottom: '50px'}}>
        <div className='d-flex justify-content-between'>
            <div>
                <p className='fs-18 fw-700 text-grey'>Tier 4</p>
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
                        <td>CAC Document - Certificate</td>
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
                        <td>CAC Document - Memart</td>
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
                        <td>Taxpayer Identification Number (TIN)</td>
                        <td className='text-default'>Pending</td>
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

export default Tier4