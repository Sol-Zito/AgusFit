import React, { useEffect, useState } from "react";
import { getRandomExercise } from "~/lib/GetData";
import { CardSimple } from "./Card/CardSimple";
import type { DataExercise } from "~/utils/dataexercise";

export const RandomExercises = () => {
  const [dataApiRandom, setDataApiRandom] = useState<[DataExercise]>();
  let arrBodyParts = [
    "neck",
    "lower arms",
    "shoulders",
    "cardio",
    "upper arms",
    "chest",
    "lower legs",
    "back",
    "upper legs",
    "waist",
  ];

  const indiceAleatorio = Math.floor(Math.random() * arrBodyParts.length);

  useEffect(() => {
    const fetchDataApiRandom = async () => {
      try {
        const response = await getRandomExercise(arrBodyParts[indiceAleatorio]);
        const result = response;
        const data: [DataExercise] = result.data;
        setDataApiRandom(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataApiRandom();
  }, []);

  return (
    <div className="text-center w-full">
      <p>Recommended:</p>
      <div className="w-4/5 m-auto my-5 grid gap-4 lg:grid-cols-4 sm:grid-col md:grid-cols-2 justify-start ">
        {dataApiRandom?.map((ele) => (
          <CardSimple
            exerciseId={ele.exerciseId}
            gifUrl={ele.gifUrl}
            name={ele.name.toLocaleUpperCase()}
            key={ele.exerciseId}
          />
        ))}
      </div>
    </div>
  );
};
