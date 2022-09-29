import React, { useState } from "react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addToDb } from "../../utilities/utility";
import { AddBreak } from "../AddBreak/AddBreak";
export const Cart = ({ selectedItem }) => {
  const [breakTime, setBreakTime] = useState(0);
  const totalTime = selectedItem.reduce((prev, curr) => prev + curr, 0);
  const breakRcver = (breakTime) => {
    const breakTimeInt = parseInt(breakTime);
    setBreakTime(breakTimeInt);
    addToDb(breakTimeInt);
  };
  return (
    <div className="sticky top-0 h-[100vh] bg-[#262626] text-white">
      <div className="mx-5 my-5 flex gap-2">
        <img
          className="w-1/5 rounded-full"
          src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt=""
        />
        <div>
          <h2>Ferdous Fardin</h2>
          <p className="text-info opacity-60">
            <FontAwesomeIcon icon={faLocationDot} />
            Moulvibazar, Sylhet
          </p>
        </div>
      </div>
      <div className="card mx-auto w-5/6 bg-[#1f1f1f] shadow-xl">
        <div className="card-body">
          <div className="flex text-slate-400">
            <p>
              <div>
                <span className="text-2xl text-white font-bold">65</span>kg
              </div>
              Weight
            </p>
            <p>
              <div>
                <span className="text-2xl text-white font-bold">5.6</span>
              </div>
              Height
            </p>
            <p>
              <div>
                <span className="text-2xl text-white font-bold">22</span>yrs
              </div>
              Age
            </p>
          </div>
        </div>
      </div>
      <AddBreak breakRcver={breakRcver}></AddBreak>
    </div>
  );
};
