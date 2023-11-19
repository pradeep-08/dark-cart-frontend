import Input from "../../components/input";
import "./Category.css";


function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
    
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio"   />
          <span className="checkmark" ></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="MEN"
          name="MEN"
        />
        <Input
          handleChange={handleChange}
          value="MEN"
          name="WOMEN"
        />
        <Input
          handleChange={handleChange}
          value="MEN"
          name="KIDS"
        />

       
    
    </div>
    </div>
    
  );
}

export default Category;