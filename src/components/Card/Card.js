import React from "react";

export const Card = ({
  excercise: { picture, name, description, timeToPerform },
  addToCart,
}) => {
  return (
    <div className="card w-96 bg-[#2a2a2a] shadow-xl">
      <figure className="px-3 pt-3">
        <img src={picture} alt="" className="rounded-xl h-52 w-full" />
      </figure>
      <div className="card-body items-center text-left">
        <h2 className="card-title text-left text-2xl">{name}</h2>
        <p>
          {description.length > 150 ? description.slice(0, 150) : description}
        </p>
        <div className="card-actions">
          <button
            onClick={() => addToCart(timeToPerform)}
            className="btn border-4 border-[#ff5e17] bg-[#ff5e17] hover:text-[#ff5e17] hover:border-[#ff5e17] hover:bg-[#2a2a2a]"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
    // <div className="">
    //   <img className="h-2/5 w-3/4 rounded-lg" src={picture} alt="" />
    //   <h1></h1>
    //   <p>{description}</p>
    //   <h3>{timeToPerform}</h3>
    // </div>
  );
};
