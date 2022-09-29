import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";

export const Shop = ({ addToList }) => {
  const [excercises, setExcercises] = useState([]);
  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setExcercises(data));
  }, []);

  return (
    <div className="bg-[#161616] min-h-[100vh] text-white">
      <h1 className="uppercase text-4xl sm:text-5xl md:text-7xl custom-font leading-10 font-bold py-10 mx-2">
        Select today's exercise
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10">
        {excercises.map((excercise) => (
          <Card
            addToList={addToList}
            excercise={excercise}
            key={excercise.id}
          ></Card>
        ))}
      </div>
    </div>
  );
};
