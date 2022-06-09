import React from 'react'

const AddAdmin = (props) => {
  return (
    <form>
        <div className="input-div">
            <label className="text-darker fs-14">Full Name <span style={{ color: "red" }}>*</span></label>
            <div className="input-container">
                <input 
                    className="input" 
                    type="text" 
                    name="businessType"
                    required
                    onChange={props.onChange}
                />
            </div>
        </div>

        <div className="input-div">
            <label className="text-darker fs-14">Email Address <span style={{ color: "red" }}>*</span></label>
            <div className="input-container">
                <input 
                    className="input" 
                    type="text" 
                    name="businessType"
                    required
                    onChange={props.onChange}
                />
            </div>
        </div>

        <div className="input-div">
            <label className="text-darker fs-14">Role <span style={{ color: "red" }}>*</span></label>
            <div className="input-container">
                <input 
                    className="input" 
                    type="text" 
                    name="businessType"
                    required
                    onChange={props.onChange}
                />
            </div>
        </div>
    </form>
  )
}

export default AddAdmin