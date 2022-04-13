import React from 'react'

const AddPricing = (props) => {
    const {onChange,  name, pricingRate, cap,userId, discount, aggregatorValue, merchantValue, products, agentValue} = props
    return (
      <form>
        <div className="input-div">
          <label className="text-darker fs-14">User Id</label>
          <div className="input-container">
              <input 
                  className="input" 
                  type="text" 
                  name="userId"
                  value={userId ? userId : ''}
                  required
                  onChange={onChange}
              />
          </div>
         </div>
      <div className="input-div">
          <label className="text-darker fs-14">Name</label>
          <div className="input-container">
              <input 
                  className="input" 
                  type="text" 
                  name="name"
                  value={name ? name : ''}
                  required
                  onChange={onChange}
              />
          </div>
      </div>
  
      <div className="input-div mt-20">
          <label className="text-darker fs-14">Products</label>
          <div className="input-container">
              <input 
                  className="input" 
                  type="text" 
                  name="products"
                  value={products ? products : ''}
                  required
                  onChange={onChange}
              />
          </div>
      </div>
      <div className="input-div mt-20">
          <label className="text-darker fs-14">Pricing rate</label>
          <div className="input-container">
              <input 
                  className="input" 
                  type="text" 
                  name="pricingRate"
                  value={pricingRate ? pricingRate : ''}
                  required
                  onChange={onChange}
              />
          </div>
      </div>

      <div className="input-div mt-20">
          <label className="text-darker fs-14">Discount</label>
          <div className="input-container">
              <input 
                  className="input" 
                  type="text" 
                  name="discount"
                  value={discount ? discount : ''}
                  required
                  onChange={onChange}
              />
          </div>
      </div>

      <div className="input-div mt-20">
          <label className="text-darker fs-14">Cap</label>
          <div className="input-container">
              <input 
                  className="input" 
                  type="text" 
                  name="cap"
                  value={cap ? cap : ''}
                  required
                  onChange={onChange}
              />
          </div>
      </div>
  
  
      <div className="input-div mt-20">
          <label className="text-darker fs-14">Merchant</label>
          <div className="input-container">
              <select 
                  className="input select" 
                  type="text" 
                  name="merchant"
                  required
                  onChange={onChange}
              >
                  <option value="">{merchantValue ? merchantValue : 'Select Option'}</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                  
              </select>
          </div>
      </div>

      <div className="input-div mt-20">
          <label className="text-darker fs-14">Aggregator</label>
          <div className="input-container">
              <select 
                  className="input select" 
                  type="text" 
                  name="aggregator"
                  required
                  onChange={onChange}
              >
                  <option value="">{aggregatorValue ? aggregatorValue : 'Select Option'}</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                  
              </select>
          </div>
      </div>

      <div className="input-div mt-20">
          <label className="text-darker fs-14">Agent</label>
          <div className="input-container">
              <select 
                  className="input select" 
                  type="text" 
                  name="agent"
                  required
                  onChange={onChange}
              >
                  <option value="">{agentValue ? agentValue : 'Select Option'}</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                  
              </select>
          </div>
      </div>

      </form>
    )
}

export default AddPricing