import React from 'react'

const CartItem = ({image,productName,price,inStock}) => {

const addItem=()=> {
    console.log(productName)
}

const removeItem=()=>{
    console.log('trigger', productName)
}

const deleteItem=()=>{
    console.log('item')
}
  return (
    <div className='container-fluid'>
        <div className="card mb-4">
            <div className="row g-0">
                <div className="col-md-4">
                <img src={image} className="card-img-top" alt='img'/>
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h4 className="card-title">{productName}</h4>
                        <p className='card-text'>{price}</p>
                        <p>{inStock}</p>
                        <div className="p-2">
                        <button className='btn btn-light mx-2' onClick={addItem}>+</button>
                        <button className='btn btn-danger mx-2' onClick={removeItem}>-</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                        <div className="algn-items-center my-5">
                        <button className='btn btn-warning' onClick={deleteItem}>Remove from cart</button>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem