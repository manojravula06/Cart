import React from "react";

function ProductCard({ title, price, category, img,description}) {
  return (
    <div>
      <div className="container-fluid">
        <div className="card m-2" style={{width:18+'rem'}}>
          <div className="card-body">
            <img src={img} alt="picture_missing" className="card-img" style={{height:12+'rem',width:10+'rem'}} />
            <p className="fw-bold"> {title}</p>
            <p className="card-text fw-bold text-danger">Price ₹ {price}</p>
            <p className="card-text">Category : {category}</p>
            <p className="card-text">{description}</p>
            <button className="btn btn-dark rounded-4">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
