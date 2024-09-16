import { useState } from 'react'

function ProductRating(prop) {
  var star_width = (100 * prop.rating) / 5;
  return(
    <>
    <div className="stars">
                <div className="active" style = {{width: `${star_width}%`}}>
                    <div className="wrapper">
                        <span className="full-star">★</span>
                        <span className="full-star">★</span>
                        <span className="full-star">★</span>
                        <span className="full-star">★</span>
                        <span className="full-star">★</span>
                    </div>
                </div>
                <div className="empty">
                    <span className="empty-star">☆</span>
                    <span className="empty-star">☆</span>
                    <span className="empty-star">☆</span>
                    <span className="empty-star">☆</span>
                    <span className="empty-star">☆</span>
                </div>
            </div>
    </>
  )
}

export default ProductRating
