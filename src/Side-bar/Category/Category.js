import Input from "../../components/input";
import "./Category.css";


function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
      <Input />
      <Input />
      <Input />
      <Input />
       
      </div>
    </div>
  );
}

export default Category;