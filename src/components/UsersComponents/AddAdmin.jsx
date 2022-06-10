import React from 'react'

const AddAdmin = (props) => {
    const {firstName, surname, email, gender, referenceCode} = props
  return (
    <form>
        <div className="input-div">
            <label className="text-darker fs-14">First Name <span style={{ color: "red" }}>*</span></label>
            <div className="input-container">
                <input 
                    className="input" 
                    type="text" 
                    name="firstName"
                    value={firstName}
                    required
                    onChange={props.onChange}
                />
            </div>
        </div>

        <div className="input-div">
            <label className="text-darker fs-14">Last Name <span style={{ color: "red" }}>*</span></label>
            <div className="input-container">
                <input 
                    className="input" 
                    type="text" 
                    name="surname"
                    value={surname}
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
                    name="email"
                    value={email}
                    required
                    onChange={props.onChange}
                />
            </div>
        </div>

        <div className="input-div">
            <label className="text-darker fs-14">Gender </label>
            <div className="input-container">
                <select
                    className="input" 
                    type="text" 
                    name="gender"
                    value={gender}
                    required
                    onChange={props.onChange}
                >
                    <option value="">Select Option</option>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                </select>
            </div>
        </div>

        <div className="input-div">
            <label className="text-darker fs-14">Reference Code </label>
            <div className="input-container">
                <input 
                    className="input" 
                    type="text" 
                    name="referenceCode"
                    value={referenceCode}
                    required
                    onChange={props.onChange}
                />
            </div>
        </div>
    </form>
  )
}

export default AddAdmin