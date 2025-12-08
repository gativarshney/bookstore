import React from "react";

const Card = ({ item }) => {
  return (
    <>
      <div className="mt-1 mb-10 mr-5 ml-5">
        <div className="card size-95 bg-base-100 w-full shadow-xl hover:scale-105 duration-400">
        <figure>
          <img
            src={item.image}
            alt={item.name}
            className="h-70"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.description}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className="badge badge-outline cursor-pointer hover:bg-pink-500 duration-300 ">Buy Now</div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Card;
