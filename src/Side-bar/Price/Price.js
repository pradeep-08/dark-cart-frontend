import Input from "../../components/input";
import "./Price.css"

 function Price({ handleChange }) {
  return <>
  <div>
      <h2 className="sidebar-title">Price</h2>
      <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value=""  />
          <span className="checkmark" ></span>All
        </label>
      <div>
      <Input 
          handleChange={handleChange}
          value="{500}"
          name="₹0-500"
        />
      
      <Input 
          handleChange={handleChange}
          value="{800}"
          name="₹500-800"
        />
     
      <Input 
          handleChange={handleChange}
          value="{1000}"
          name="₹800-1000"
        />
      <Input 
          handleChange={handleChange}
          value="{1000}"
          name="Above ₹1000"
        />
     
        {/* <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>Under ₹500
        </label>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>₹500 - ₹1,000
        </label>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>₹1,000 - ₹2,000
        </label>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>₹2,000 - ₹3,000
        </label>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>Over ₹3,000
        </label> */}
       
      </div>
    </div>
  
  </>
    
  
}
export default Price;