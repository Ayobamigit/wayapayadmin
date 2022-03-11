import React, { useContext } from 'react'
import { PosDeviceContext } from './PosDevice'

const AddDevice = () => {
    const {onChange, state:{actualTerminalName}} = useContext(PosDeviceContext)
  return (
    <form>

    <div className="input-div">
        <label className="text-darker fs-14">Terminal ID <span style={{ color: "red" }}>*</span></label>
        <div className="input-container">
            <input 
                className="input" 
                type="text" 
                name="terminalId"
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
                required
                onChange={onChange}
            />
        </div>
    </div>

    <div className="input-div">
        <label className="text-darker fs-14">Number of Payment Time</label>
        <div className="input-container">
            <input 
                className="input" 
                type="text" 
                name="numberOfPaymentTime"
                required
                onChange={onChange}
            />
        </div>
    </div>

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
                <option value="">Select terminal type</option>
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
                onChange={onChange}
            />
        </div>
    </div>

    <div className="input-div">
        <label className="text-darker fs-14">Description</label>
        <div className="input-container">
            <textarea 
                className="input textarea" 
                type="text-area" 
                name="description"
                required
                placeholder="Give a brief description of what is obtainable using this terminal POS"
                onChange={onChange}
            ></textarea>
        </div>
    </div>
    </form>
  )
}

export default AddDevice