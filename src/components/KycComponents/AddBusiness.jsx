import React from 'react'

const AddBusiness = (props) => {
  return (
    <form>
        <div className="input-div">
            <label className="text-darker fs-14">Business Type <span style={{ color: "red" }}>*</span></label>
            <div className="input-container">
                <input 
                    className="input" 
                    type="text" 
                    name="businessType"
                    value={props.businessType}
                    required
                    onChange={props.onChange}
                />
            </div>
        </div>
    </form>
  )
}

export default AddBusiness