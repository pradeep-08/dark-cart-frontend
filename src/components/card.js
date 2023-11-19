

function Card() {
  return <>
    
    <section className="card">
      <img src="https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg" alt="" className="card-img" />
      <div className="card-details">
        <h3 className="card-title">Nike Air Monarch IV</h3>
        <section className="card-reviews">
          <span className="total-reviews">4 stars</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>$353</del> 219
          </div>
          <div className="add"><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/shopping-basket-add.png" alt="shopping-basket-add"/></div>
        </section>
        
      </div>
    </section>
    
    </>
}
export default Card;