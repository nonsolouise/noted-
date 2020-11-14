import React from "react";

const Item = ({ item }) => {
  return (
    <>
      <div className="container">
        <div className="col-md-12 bg-dark">
          <h3 className=" text-danger">{item.title}  <button className='btn btn-warning m-2'>edit</button> </h3>
        </div>
        <div className="col-md-12 mt-2 text-dark mt-2">
          <p>{item.body}</p>
        </div>
      </div>
    </>
  );
};

export default Item;
