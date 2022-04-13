import React from 'react'

const AddRoute = (props) => {
    const {onChange,  maximum_amount, minimum_amount, precedence, scheme, station, userId, values , stationsList, schemeList} = props
    return (
      <form>
  
      <div className="input-div">
          <label className="text-darker fs-14">Maximum amount</label>
          <div className="input-container">
              <input 
                  className="input" 
                  type="number" 
                  name="maximum_amount"
                  value={maximum_amount ? maximum_amount : ''}
                  required
                  onChange={onChange}
              />
          </div>
      </div>
  
      <div className="input-div mt-20">
          <label className="text-darker fs-14">Minimum amount</label>
          <div className="input-container">
              <input 
                  className="input" 
                  type="number" 
                  name="minimum_amount"
                  value={minimum_amount ? minimum_amount : ''}
                  required
                  onChange={onChange}
              />
          </div>
      </div>
      <div className="input-div mt-20">
          <label className="text-darker fs-14">Precedence</label>
          <div className="input-container">
              <input 
                  className="input" 
                  type="number" 
                  name="precedence"
                  value={precedence ? precedence : ''}
                  required
                  onChange={onChange}
              />
          </div>
      </div>
      <div className="input-div mt-20">
          <label className="text-darker fs-14">Values</label>
          <div className="input-container">
              <input 
                  className="input" 
                  type="text" 
                  name="values"
                  value={values ? values : ''}
                  required
                  onChange={onChange}
              />
          </div>
      </div>
  
      <div className="input-div mt-20">
          <label className="text-darker fs-14">Scheme</label>
          <div className="input-container">
              <select 
                  className="input select" 
                  type="text" 
                  name="scheme"
                  required
                  onChange={onChange}
              >
                  <option value="">{scheme ? scheme : 'Select Scheme'}</option>
                  {
                      schemeList ?
                      schemeList.map((scheme, i)=>{
                        return  <option
                            value={scheme.name}
                            key={i}
                        >
                            {scheme.name}
                        </option>
                    })
                    :
                    null
                  }
                  
              </select>
          </div>
      </div>

      <div className="input-div mt-20">
          <label className="text-darker fs-14">Station</label>
          <div className="input-container">
              <select 
                  className="input select" 
                  type="text" 
                  name="stationId"
                  required
                  onChange={onChange}
              >
                  <option value="">{station ? station : 'Select Station'}</option>
                  {
                      stationsList ?
                      stationsList.map((station, i)=>{
                        return  <option
                            value={station.id}
                            key={i}
                        >
                            {station.name}
                        </option>
                    })
                    :
                    null
                  }
                  
              </select>
          </div>
      </div>
  
      
      </form>
    )
}

export default AddRoute