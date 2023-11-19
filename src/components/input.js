
 function Input(handleChange) {
  return <>
     <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
  </>
    
  
}
export default Input;