import React, { useContext } from 'react'
import { PosDeviceContext } from './PosDevice'

const AddDevice = () => {
    const {onChange, state:{users, actualTerminalName, description, numberOfPaymentTime, preferredTerminalName, terminalCost, terminalId, terminalSerialNumber, terminalType,modalValue}} = useContext(PosDeviceContext)
  return (
    <form>
    {
        modalValue === 'issue' ?
            <div className="input-div">
                <label className="text-darker fs-14">Select User <span style={{ color: "red" }}>*</span></label>
                <div className="input-container">
                    <select 
                        className="input select" 
                        type="text" 
                        name="userID"
                        required
                        onChange={onChange}
                    >
                        <option>Select User</option>
                        {
                            users ? 
                            users.map((user, i)=>{
                                return  <option
                                    value={user.userId}
                                    key={i}
                                >
                                    {user.firstName +' ' + user.surname}
                                </option>
                            })
                            :
                            null
                        }
                    </select>
                </div>
            </div>
            :
            null
    }

    <div className="input-div">
        <label className="text-darker fs-14">Terminal ID <span style={{ color: "red" }}>*</span></label>
        <div className="input-container">
            <input 
                className="input" 
                type="text" 
                name="terminalId"
                value={terminalId}
                required
                placeholder="Enter terminal device ID"
                onChange={onChange}
            />
        </div>
    </div>

    <div className="input-div">
        <label className="text-darker fs-14">Terminal Serial number <span style={{ color: "red" }}>*</span></label>
        <div className="input-container">
            <input 
                className="input" 
                type="text" 
                name="terminalSerialNumber"
                value={terminalSerialNumber}
                required
                placeholder="Enter terminal device ID"
                onChange={onChange}
            />
        </div>
    </div>

    <div className="input-div">
        <label className="text-darker fs-14">Terminal Cost</label>
        <div className="input-container">
            <input 
                className="input" 
                type="text" 
                name="terminalCost"
                value={terminalCost}
                required
                onChange={onChange}
            />
        </div>
    </div>
    {
        modalValue === 'issue' ?
        null:
        <div className="input-div">
        <label className="text-darker fs-14">Number of Payment Time</label>
        <div className="input-container">
            <input 
                className="input" 
                type="text" 
                name="numberOfPaymentTime"
                value={numberOfPaymentTime}
                required
                onChange={onChange}
            />
        </div>
        </div>
    }
    

    <div className="input-div">
        <label className="text-darker fs-14">Terminal Type</label>
        <div className="input-container">
            <select 
                className="input select" 
                type="text" 
                name="terminalType"
                required
                onChange={onChange}

            >
                <option value="">{ terminalType ? terminalType: 'Select terminal type'}</option>
                <option value="NEXGO">NEXGO</option>
                <option value="PAX">PAX</option>
                <option value="TOPWISE">TOPWISE</option>
                <option value="MOREFUN">MOREFUN</option>
                <option value="VERIFONE">VERIFONE</option>
                
            </select>
        </div>
    </div>

    <div className="input-div">
        <label className="text-darker fs-14">Actual Terminal Name <span style={{ color: "red" }}>*</span></label>
        <div className="input-container container-disabled">
            <input 
                className="input" 
                type="text" 
                name="actualTerminalName"
                required
                disabled
                value={actualTerminalName}
            />
        </div>
    </div>

    <div className="input-div">
        <label className="text-darker fs-14">Preferred Terminal Name</label>
        <div className="input-container">
            <input 
                className="input" 
                type="text" 
                name="preferredTerminalName"
                required
                placeholder="Enter prefered terminal name [Optional]"
                value={preferredTerminalName}
                onChange={onChange}
            />
        </div>
    </div>

    {
        modalValue === 'issue' ?
        null:
    
        <div className="input-div">
            <label className="text-darker fs-14">Description</label>
            <div className="input-container">
                <textarea 
                    className="input textarea" 
                    type="text-area" 
                    name="description"
                    value={description}
                    required
                    placeholder="Give a brief description of what is obtainable using this terminal POS"
                    onChange={onChange}
                ></textarea>
            </div>
        </div>
    }
    </form>
  )
}

export default AddDevice