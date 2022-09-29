import React from "react";
import "./ExerciseDetails.css";

export const ExerciseDetails = ({ totalTime, breakTime }) => {
  return (
    <div>
      <h1 className="custom-font text-3xl text-center my-4">
        Exercise Details
      </h1>
      <div className="card w-4/5 mx-auto bg-[#1f1f1f] shadow-xl">
        <div className="card-body py-3 px-4">
          <p>
            <strong>Exercise Time:</strong> {totalTime} seconds
          </p>
        </div>
      </div>
      <div className="card w-4/5 mx-auto bg-[#1f1f1f] shadow-xl my-5">
        <div className="card-body py-3 px-4">
          <p>
            <strong>Break Time:</strong> {breakTime} seconds
          </p>
        </div>
      </div>
    </div>
  );
};
