import React from 'react';

const BuyProduct = () => {
    return (
        <>
            <h3 className='text-center bg-body-secondary'>Add items into a cart</h3>
            <div className="container-fluid text-center">
            <img src="asests/Images/p1.jpg" alt=""  Style={"height:450px"}/>
            </div>
        <div className="container-fluid  m-4 text-center">
            <button className='btn btn-outline-secondary w-25 rounded  mx-2 fs-4 fw-bold '>-</button>
            <button className='btn btn-outline-secondary w-25 rounded  mx-2 fs-4 fw-bold '>+</button>
        </div>
        
        </>
    );
}

export default BuyProduct;

