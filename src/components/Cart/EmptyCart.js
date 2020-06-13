import React from "react";

/**
 * @author
 * @function EmptyCart
 **/

const EmptyCart = (props) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title">
          <h1>your cart is currenty empty</h1>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;