import React from "react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const User = () => {
  return (
    <div className="hidden md:block">
      <div className="mx-5 my-5 flex gap-2 ">
        <img
          className="w-1/5 rounded-full"
          src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=894&q=80"
          alt=""
        />
        <div>
          <h2 className="custom-font tracking-wider text-lg">Ferdous Fardin</h2>
          <p className="text-info opacity-60">
            <FontAwesomeIcon icon={faLocationDot} />
            <span className="mx-1">Moulvibazar, Sylhet</span>
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
    </div>
  );
};
