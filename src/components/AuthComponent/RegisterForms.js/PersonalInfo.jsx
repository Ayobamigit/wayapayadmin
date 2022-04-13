import React, { useContext } from 'react'
import { RegisterContext } from '../../../pages/AuthPages/Register'

const PersonalInfo = () => {
    const {state:{states, cities, email, surname, firstName, phoneNumber, officeAddress, stateOfOrigin, city}, onChange, onClickNext} = useContext(RegisterContext)
    let disabled = true;
    let error = false; //To display the email error message
    let emailValidate= true; //To control the form validation for the disabled button
  
    let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  
    if(email === ""){
      error = null
      }else{
          if (!pattern.test(email)) {
  
              error = true
          }else{
              emailValidate = false
  
          }
      }
  
      if(emailValidate || surname.trim() === "" || firstName.trim() === "" || phoneNumber.trim() === "" || officeAddress.trim() === "" || stateOfOrigin.trim() === "" || city.trim() === "" ){
          disabled = true
      }else{
          disabled = false
      }
    return (
      <>
      <div className="input-div full-width">
          <label className="text-default fs-14">Last Name <span style={{ color: "red" }}>*</span></label>
          <div className="input-container">
              <input 
                  className="input" 
                  type="text" 
                  name="surname"
                  required
                  onChange={onChange}
              />
          </div>
      </div>
      <div className="input-div full-width">
          <label className="text-default fs-14">First Name <span style={{ color: "red" }}>*</span></label>
          <div className="input-container">
              <input 
                  className="input" 
                  type="text" 
                  name="firstName"
                  required
                  onChange={onChange}
              />
          </div>
      </div>
      <div className="input-div full-width">
          <label className="text-default fs-14">Personal Email Address <span style={{ color: "red" }}>*</span></label>
          <div className="input-container">
              <input 
                  className="input" 
                  type="text" 
                  name="email"
                  required
                  onChange={onChange}
              />
          </div>
            {error ? (<h4 className="fs-12 fw-400 text-orange">Please enter a valid email address!</h4>) : null}
      </div>
  
      <div className="input-div full-width">
          <label className="text-default fs-14">Personal Phone Number <span style={{ color: "red" }}>*</span></label>
          <div className="input-container">
              <input 
                  className="input" 
                  type="text" 
                  name="phoneNumber"
                  minLength='11'
                  maxLength='11'
                  required
                  onChange={onChange}
              />
          </div>
      </div>

      <div className="input-div full-width">
          <label className="text-default fs-14">Office Address <span style={{ color: "red" }}>*</span></label>
          <div className="input-container">
              <input 
                  className="input" 
                  type="text" 
                  name="officeAddress"
                  required
                  onChange={onChange}
              />
          </div>
      </div>
  
      <div className="input-div full-width">
          <label className="text-default fs-14">State <span style={{ color: "red" }}>*</span></label>
          <div className="input-container">
              <select 
                  className="input select" 
                  type="text" 
                  name="stateOfOrigin"
                  required
                  onChange={onChange}
              >
                  <option>Select state</option>
                  {
                      states ? 
                      states.map((state, i)=>{
                          return  <option
                              value={state.state.name}
                              key={i}
                          >
                              {state.state.name}
                          </option>
                      })
                      :
                      null
                  }
              </select>
          </div>
      </div>

      <div className="input-div full-width">
          <label className="text-default fs-14">City <span style={{ color: "red" }}>*</span></label>
          <div className="input-container">
              <select 
                  className="input select" 
                  type="text" 
                  name="city"
                  required
                  onChange={onChange}
              >
                  <option>Select City</option>
                  {
                      cities ? 
                      cities.map((city, i)=>{
                          return  <option
                              value={city.name}
                              key={i}
                          >
                              {city.name}
                          </option>
                      })
                      :
                      null
                  }
              </select>
          </div>
      </div>

      <button className="mt-20 orange-button full-width" onClick={()=>onClickNext('password')} disabled={disabled}>
        Next
      </button>
      </>
    )
}

export default PersonalInfo