import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ActivityCompleted = () => {
  return (
    <div className="flex justify-center">
      <button
        className="btn border-4 transition ease duration-200 border-[#ff5e17] bg-[#ff5e17] hover:text-[#ff5e17] hover:border-[#ff5e17] hover:bg-[#2a2a2a] w-2/3"
        onClick={() => {
          toast.success("Congratulations! You completed the Excercise", {
            position: toast.POSITION.TOP_LEFT,
            className: "bg-primary  ",
          });
          return toast;
        }}
      >
        Activity Completed
      </button>
      <ToastContainer />
    </div>
  );
};
