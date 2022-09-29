import React from "react";
import "./Card.css";

export const Card = ({
  excercise: { picture, name, description, timeToPerform },
  addToList,
}) => {
  return (
    <div className="card w-96 bg-[#2a2a2a] shadow-xl">
      <figure className="px-3 pt-3">
        <img src={picture} alt="" className="rounded-xl h-52 w-full" />
      </figure>
      <div className="card-body items-center text-left">
        <h2 className="card-title font-normal text-4xl tracking-wide custom-font">
          {name}
        </h2>
        <p>
          {description.length > 150 ? description.slice(0, 150) : description}
        </p>
        <p>
          <strong>Time Required:</strong> {timeToPerform} seconds (per 12/15
          sets)
        </p>
        <div className="card-actions w-full justify-center">
          <button
            onClick={() => addToList(timeToPerform)}
            className="btn w-10/12 border-4 transition ease duration-200 border-[#ff5e17] bg-[#ff5e17] hover:text-[#ff5e17] hover:border-[#ff5e17] hover:bg-[#2a2a2a] "
          >
            Add To List
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
