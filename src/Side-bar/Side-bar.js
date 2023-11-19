import Category from "./Category/Category";
import Color from "./Color/Color";
import Price from "./Price/Price";
import "./Side-bar.css"


 function Sidebar() {
  return <>
    <section className="sidebar">
        <div className="logo-contaiener">
            <img className="logo-image" src={ require('../Capture.PNG')} alt="" />
        </div>

        <Category />
        <Price />
    
        
    </section>
  </>
}

export default Sidebar;