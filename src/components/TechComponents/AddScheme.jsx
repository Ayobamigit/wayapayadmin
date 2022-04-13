import React from 'react'

const AddScheme = (props) => {
    const {onChange, name, regex, modalValue } = props
    return (
      <form>
  
      <div className="input-div">
          <label className="text-darker fs-14">Scheme Name</label>
          <div className={`${modalValue === 'edit' ? 'container-disabled' : null} input-container`}>
              <input 
                  className="input" 
                  type="text" 
                  name="name"
                  value={name}
                  disabled={modalValue === 'edit'}
                  required
                  onChange={onChange}
              />
          </div>
      </div>
  
      <div className="input-div mt-20">
          <label className="text-darker fs-14">Station Regex</label>
          <div className="input-container">
              <input 
                  className="input" 
                  type="text" 
                  name="regex"
                  value={regex}
                  required
                  onChange={onChange}
              />
          </div>
      </div>
      </form>
    )
}

export default AddScheme