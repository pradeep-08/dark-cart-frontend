import "../Recommended/Recommended.css"

 function Recommended() {
  return <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <button className="btns">All Products</button>
          <button className="btns">Low</button>
          <button className="btns">High</button>
          <button className="btns">Meidum</button>
          <button className="btns">Offer</button>
          
        </div>
      </div>
  </>
}
export default Recommended;