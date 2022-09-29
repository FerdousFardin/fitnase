import React from "react";

export const Cart = ({ selectedCart }) => {
  const totalTime = selectedCart.reduce((prev, curr) => prev + curr, 0);
  return <div>Total Time: {totalTime}</div>;
};
