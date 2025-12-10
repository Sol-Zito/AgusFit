import { useEffect, useState } from "react";
import { BodyPart } from "~/component/Card/BodyPart";
import { MuscleCard } from "~/component/Card/MuscleCard";
import { PrincipalHeader } from "~/component/PrincipalHeader";
import { RandomExercises } from "~/component/RandomExercises";
import { SearchComponent } from "~/component/Searching/SearchComponent";

type dataName = {
  name: string;
};

export function PrincipalPage() {
  const [parts, setParts] = useState<[dataName]>();
  let urlBody = "https://www.exercisedb.dev/api/v1/bodyparts";

  const [muscles, setMuscles] = useState<[dataName]>();
  let urlMuscle = "https://www.exercisedb.dev/api/v1/muscles";

  useEffect(() => {
    const fetchDataBodyParts = async () => {
      try {
        const response = await fetch(urlBody);
        const result = await response.json();
        const data: [dataName] = result.data;
        setParts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataBodyParts();

    const fetchDataMuscles = async () => {
      try {
        const response = await fetch(urlMuscle);
        const result = await response.json();
        const data: [dataName] = result.data;
        setMuscles(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataMuscles();
  }, []);

  return (
    <main className="w-full flex flex-col items-center justify-center gap-9 m-auto text-gray-400">
      <div className="m-auto w-5/6">
        <PrincipalHeader />
      </div>
      <SearchComponent />
      {/* Body parts */}
      <div className="flex flex-wrap m-auto w-5/6 gap-2 justify-start items-center">
        <h1>Body Parts:</h1>
        {parts?.map((ele) => (
          <BodyPart name={ele.name} key={ele.name} />
        ))}
      </div>
      <div className="border  w-full"></div>
      {/* Muscles */}
      <div className="flex flex-wrap m-auto w-5/6 gap-2 justify-start items-center">
        <h1>Muscles:</h1>
        {muscles?.map((ele) => (
          <MuscleCard name={ele.name} key={ele.name} />
        ))}
      </div>
      {/* Recomendados */}
      <div>
        <RandomExercises />
      </div>
    </main>
  );
}
