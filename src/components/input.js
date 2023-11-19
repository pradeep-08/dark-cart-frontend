const Input = ({ handleChange, value,  name, color }) => {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleChange} type="radio" value={value}  />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {name}
    </label>
  );
};

export default Input;