import React, { useContext } from 'react'
import { RegisterContext } from '../../../pages/AuthPages/Register'

const BusinessInfo = () => {
  const {state:{businessTypes, orgName, orgEmail, orgPhone, orgType }, onChange, onClickNext} = useContext(RegisterContext)
  let disabled = true;
  let error = false; //To display the email error message
  let emailValidate= true; //To control the form validation for the disabled button

  let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

  if(orgEmail === ""){
    error = null
    }else{
        if (!pattern.test(orgEmail)) {

            error = true
        }else{
            emailValidate = false

        }
    }

    if(emailValidate || orgName.trim() === "" || orgPhone.trim() === "" || orgType.trim() === "" ){
        disabled = true
    }else{
        disabled = false
    }
  return (
    <>
    <div className="input-div full-width">
        <label className="text-default fs-14">Business Name <span style={{ color: "red" }}>*</span></label>
        <div className="input-container">
            <input 
                className="input" 
                type="text" 
                name="orgName"
                required
                onChange={onChange}
            />
        </div>
    </div>
    <div className="input-div full-width">
        <label className="text-default fs-14">Business Email <span style={{ color: "red" }}>*</span></label>
        <div className="input-container">
            <input 
                className="input" 
                type="text" 
                name="orgEmail"
                required
                onChange={onChange}
            />
        </div>
        {error ? (<h4 className="fs-12 fw-400 text-orange">Please enter a valid email address!</h4>) : null}
    </div>

    <div className="input-div full-width">
        <label className="text-default fs-14">Business Phone Number <span style={{ color: "red" }}>*</span></label>
        <div className="input-container">
            <input 
                className="input" 
                type="text" 
                name="orgPhone"
                maxLength='11'
                minLength='11'
                required
                onChange={onChange}
            />
        </div>
    </div>

    <div className="input-div full-width">
        <label className="text-default fs-14">Business Type <span style={{ color: "red" }}>*</span></label>
        <div className="input-container">
            <select 
                className="input select" 
                type="text" 
                name="orgType"
                required
                onChange={onChange}
            >
                <option>Select type</option>
                {
                    businessTypes ? 
                    businessTypes.map((type, i)=>{
                        return  <option
                            value={type.id}
                            key={i}
                        >
                            {type.businessType}
                        </option>
                    })
                    :
                    null
                }
            </select>
        </div>
    </div>

    <button className="mt-20 orange-button full-width" onClick={()=>{onClickNext('personal')}} disabled={disabled}>
        Next
    </button>
    </>
  )
}

export default BusinessInfo