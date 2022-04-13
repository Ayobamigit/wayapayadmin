import React from 'react'

const CreateDispute = (props) => {
  return (
    <form>

    <div className="input-div">
        <label className="text-darker fs-14">Categories</label>
        <div className="input-container">
            <select 
                className="input select" 
                type="text" 
                name="subject"
                required
                onChange={props.onChange}
            >
                <option valule="">Select Dispute Category</option>
                <option value = "Auth and Notification">Auth and Notification Dispute</option>
                <option value = "Other Dispute">Other Dispute</option>
                
            </select>
        </div>
    </div>

    <div className="input-div mt-20">
        <label className="text-darker fs-14">Dispute Description</label>
        <div className="input-container">
            <textarea 
                className="input textarea" 
                type="text-area" 
                name="description"
                required
                onChange={props.onChange}
            ></textarea>
        </div>
    </div>

    <div className="input-div mt-20">
        <label className="text-darker fs-14">Attach file</label>
        <div className="input-container">
            <input 
                type="file"
                className="input" 
                id="attachment"
                required
                placeholder="File"
                name="attachment"
                onChange={props.onFileChange}
            />
        </div>
    </div>
    </form>
  )
}

export default CreateDispute