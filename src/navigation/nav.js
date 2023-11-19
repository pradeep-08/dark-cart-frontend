import React from 'react'
import "./nav.css"


 function Navigation({ handleInputChange, query }) {
  return <nav>
    <div className="nav-cotnainer">
        <input     onChange={handleInputChange}
          value={query} type="text" placeholder="Enter your search" className = "search-input" /> 
    </div>
    <div className="profile-container">
    <div>1</div>
    </div>
  </nav>
}
export default Navigation;