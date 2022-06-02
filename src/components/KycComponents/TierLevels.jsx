import React from 'react'
import {Table, Container } from 'react-bootstrap'
import {FiSearch} from 'react-icons/fi'
import {IoFilterOutline} from 'react-icons/io5'
// import NoResultFound from '../NoResultFound/NoResultFound'


const TierLevels = () => {

  return (
    <div>
        <div className="tableHeaders d-flex justify-content-start align-items-center">
            <div className="d-flex justify-content-between filter-contents align-items-center">
                <div className="d-flex justify-content-start align-items-center width-50">
                    <div className="d-flex justify-content-center align-items-center ">
                        <div className="d-flex justify-content-center align-items-center ">
                            <IoFilterOutline size={15} style={{marginRight:15}} />
                            <h4 className="fs-14 text-darker mt-05">Filter</h4>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center filter-search ml-22">
                        <div className="input_Search d-flex justify-content-center align-items-center">
                            <div className="justify-content-center align-items-center"><FiSearch color="#FF4400" /></div>
                            <input className="input ml-10" placeholder="Search tier levels" />
                        </div>

                        {/* <div className="d-flex justify-content-center align-items-center filter-search"> */}
                            <button className="orange-button ml-10">Search</button>
                        {/* </div> */}
                    </div>

                    
                    
                </div>
                
            </div>
        </div>

        <Container fluid>

            <div className="data-table mt-40">
                <Table responsive borderless className="bg-inherit">
                    <thead>
                        <tr style={{backgroundColor: '#F9843533', borderRadius: '5px'}}>
                            <th>TIER</th>
                            <th>external daily transactions</th>
                            <th>daily limits for external transfer</th>
                            <th>single transfer limit for external</th>
                            <th>INTERnal daily transactions</th>
                            <th>daily limits for INTERnal transfer</th>
                            <th>single transfer limit for INTERnal</th>
                            <th>corporate requirements</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Tier 1</td>
                            <td>2</td>
                            <td>NGN 10,000</td>
                            <td>NGN 5,000</td>
                            <td>2</td>
                            <td>NGN 10,000</td>
                            <td>NGN 5,000</td>
                            <td>
                                <span className="tabblack">Business Logo</span>
                                <span className="tabblack ml-10">Business Name</span> <br />
                                <span className="tabblack">Business Description</span>
                                <span className="tabblack ml-10">Business Type</span>
                                <span className="tabblack ml-10">Business Phone number</span>
                                <span className="tabblack ml-10">Business Email Address</span>
                            </td>
                        </tr>

                        <tr>
                            <td>Tier 2</td>
                            <td>50</td>
                            <td>NGN 500,000</td>
                            <td>NGN 500,000</td>
                            <td>50</td>
                            <td>NGN 500,000</td>
                            <td>NGN 500,000</td>
                            <td>
                                <span className="tabblack">BVN Validation</span>
                            </td>
                        </tr>

                        <tr>
                            <td>Tier 3</td>
                            <td>1,000</td>
                            <td>NGN 5,000,000</td>
                            <td>NGN 1,000,000</td>
                            <td>1,000</td>
                            <td>NGN 5,000,000</td>
                            <td>NGN 1,000,000</td>
                            <td>
                                <span className="tabblack">Utility Bill on the Name</span>
                                <span className="tabblack ml-10">Passport Photograph</span><br />
                                <span className="tabblack">Passport/ ID/ Voters Card / NIN</span><br />
                                <span className="tabblack ml-10">Utility bill on the name</span><br />
                                <span className="tabblack ml-10">Proof of address (not less than 1 month)</span><br />
                                <span className="tabblack ml-10">Address Verification - Photo of street, house number, left and right</span>
                            </td>
                        </tr>

                        <tr>
                            <td>Tier 4</td>
                            <td>Unlimited</td>
                            <td>NGN 5,000,000</td>
                            <td>NGN 5,000,000</td>
                            <td>Unlimited</td>
                            <td>NGN 5,000,000</td>
                            <td>NGN 5,000,000</td>
                            <td>
                                <span className="tabblack">CAC Document - Certfificate</span><br />
                                <span className="tabblack ml-10">CAC Document - Merchant</span><br />
                                <span className="tabblack">Taxpayer Identification Number(TIN)</span>
                            </td>
                        </tr>

                    </tbody> 
                </Table>
            </div>
        </Container>
    </div>
  )
}

export default TierLevels