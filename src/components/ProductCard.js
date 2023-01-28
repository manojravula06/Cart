import React from "react";

function ProductCard({ title, price, category, img,description}) {
  return (
    <div>
      <div className="container-fluid">
        <div className="card" style={{width:18+'rem'}}>
          <div className="card-body">
            <img src={img} alt="picture_missing" className="card-img-top" style={{height:12+'rem',width:10+'rem'}} />
            <p className="fw-bold"> {title}</p>
            <p className="card-text fw-bold display-6 text-danger">Price {price}</p>
            <p className="card-text">Category : {category}</p>
            <button className="btn btn-dark rounded-4">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
