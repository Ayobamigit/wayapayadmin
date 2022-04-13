import React from 'react'

const AddStation = (props) => {
  const {onChange, name, zmk, zpk, zmkKcv, zpkKcv, modalValue } = props
  return (
    <form>

    <div className="input-div">
        <label className="text-darker fs-14">Station Name</label>
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
        <label className="text-darker fs-14">Station ZMK</label>
        <div className="input-container">
            <input 
                className="input" 
                type="text" 
                name="zmk"
                value={zmk}
                required
                onChange={onChange}
            />
        </div>
    </div>
    <div className="input-div mt-20">
        <label className="text-darker fs-14">Station ZPK</label>
        <div className="input-container">
            <input 
                className="input" 
                type="text" 
                name="zpk"
                value={zpk}
                required
                onChange={onChange}
            />
        </div>
    </div>
    <div className="input-div mt-20">
        <label className="text-darker fs-14">Station ZMKKCV</label>
        <div className="input-container">
            <input 
                className="input" 
                type="text" 
                name="zmkKcv"
                value={zmkKcv}
                required
                onChange={onChange}
            />
        </div>
    </div>
    <div className="input-div mt-20">
        <label className="text-darker fs-14">Station ZPKKCV</label>
        <div className="input-container">
            <input 
                className="input" 
                type="text" 
                name="zpkKcv"
                value={zpkKcv}
                required
                onChange={onChange}
            />
        </div>
    </div>

    <div className="input-div mt-20">
        <label className="text-darker fs-14">Status</label>
        <div className="input-container">
            <select 
                className="input select" 
                type="text" 
                name="status"
                required
                onChange={onChange}
            >
                <option value="">Select Status</option>
                <option value = "ACTIVE">Active</option>
                <option value = "INACTIVE">Inactive</option>
                
            </select>
        </div>
    </div>

    
    </form>
  )
}

export default AddStation