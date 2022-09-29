import React from "react";
import "./AddBreak.css";

export const AddBreak = ({ breakRcver }) => {
  return (
    <div>
      <h1 className="my-3 text-center text-3xl custom-font">Add A Break</h1>
      <div className="card w-11/12 mx-auto bg-[#1f1f1f] shadow-xl">
        <div className="card-actions justify-end mx-auto py-4">
          <button
            onClick={(e) => breakRcver(e.target.textContent)}
            className="btn rounded-full"
          >
            10s
          </button>
          <button
            onClick={(e) => breakRcver(e.target.textContent)}
            className="btn rounded-full"
          >
            20s
          </button>
          <button
            onClick={(e) => breakRcver(e.target.textContent)}
            className="btn rounded-full"
          >
            30s
          </button>
          <button
            onClick={(e) => breakRcver(e.target.textContent)}
            className="btn rounded-full"
          >
            60s
          </button>
        </div>
      </div>
    </div>
  );
};
