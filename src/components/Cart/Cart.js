import React, { useEffect, useState } from "react";
import { addToDb } from "../../utilities/utility";
import { ActivityCompleted } from "../ActivityCompleted/ActivityCompleted";
import { AddBreak } from "../AddBreak/AddBreak";
import { ExerciseDetails } from "../ExerciseDetails/ExerciseDetails";
import { User } from "../User/User";
export const Cart = ({ selectedItem }) => {
  const [breakTime, setBreakTime] = useState(0);
  useEffect(() => {
    const savedBreakTime = localStorage.getItem("break-time");
    setBreakTime(savedBreakTime);
  }, []);

  const totalTime = selectedItem.reduce((prev, curr) => prev + curr, 0);
  const breakRcver = (breakTime) => {
    const breakTimeInt = parseInt(breakTime);
    setBreakTime(breakTimeInt);
    addToDb(breakTimeInt);
  };
  return (
    <>
      <div className="sticky top-0 h-[100vh] bg-[#262626] text-white">
        <User></User>
        <AddBreak breakRcver={breakRcver}></AddBreak>
        <ExerciseDetails
          breakTime={breakTime}
          totalTime={totalTime}
        ></ExerciseDetails>
        <ActivityCompleted></ActivityCompleted>
      </div>
      {/* <hr className=" border-[#262626]" /> */}
    </>
  );
};
