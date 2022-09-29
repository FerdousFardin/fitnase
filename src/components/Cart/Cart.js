import React from "react";

export const Cart = ({ selectedItem }) => {
  const totalTime = selectedItem.reduce((prev, curr) => prev + curr, 0);
  return (
    <div className="sticky top-0 h-[100vh]">
      <div className="mx-5 my-5 flex">
        <img
          className="w-1/5 rounded-full"
          src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt=""
        />
        <h2>Ferdous Fardin</h2>
      </div>
    </div>
  );
};
