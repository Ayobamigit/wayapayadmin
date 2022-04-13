import React from 'react'
import Layout from '../../components/Layout/Layout'
import {Table, Container } from 'react-bootstrap'
// import axios from '../../plugins/axios'
import NoResultFound from '../../components/NoResultFound/NoResultFound'
import { toast, Slide } from "react-toastify"
import DatePicker from 'react-datepicker';


const AdminLogs = () => {
  return (
    <Layout title="Activity Log">
        <div className="tableHeaders d-flex justify-content-start align-items-center">
            <div className="d-flex justify-content-between filter-contents align-items-center">
                <div className="d-flex justify-content-start align-items-center width-50">
                    <div className="d-flex justify-content-center align-items-center ">
                        <div className="d-flex justify-content-center align-items-center ">
                            <h4 className="fs-14 fw-700 text-darker">Duration</h4>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center filter-search ml-22">
                        <div className="input-container d-flex justify-content-center align-items-center">
                        <DatePicker 
                            dateFormat="dd-MM-yyyy"
                            placeholderText="dd-mm-yyyy - dd-mm-yyyy"
                            // onChange={date => onFilterDateChange(date)}
                            // isClearable  
                            // selected={startDate} 
                            // startDate={startDate} 
                            // endDate={endDate} 
                            className="input"  
                            wrapperClassName="datePicker"
                            selectsRange
                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Container fluid>

            <div className="data-table mt-40">
                <Table responsive borderless className="bg-inherit">
                    <thead >
                        <tr style={{backgroundColor: '#F9843533', borderRadius: '5px'}}>
                            <th>name</th>
                            <th>role</th>
                            <th>action performed</th>
                            <th>location</th>
                            <th>date</th>
                        </tr>
                    </thead>

                    <tbody>

                    {/* {
                        activities?
                        activities.length === 0 ?
                            <NoResultFound />
                            :
                            activities.map((audit, i)=>{
                                const{duration, activity} = audit;

                                return(
                                    <tr key={i}>
                                    <td>{duration ? moment(duration).calendar() : 'N/A'}</td>
                                    <td>{activity}</td>
                                </tr>
                                )
                            })
                        : */}
                        <NoResultFound />
                    {/* }  */}
                    </tbody>
                </Table>
            </div>
        </Container>
    </Layout>
  )
}

export default AdminLogs