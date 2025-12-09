import { useEffect, useState } from "react";
import { CardSimple } from "~/component/Card/CardSimple";
import { PrincipalHeader } from "~/component/PrincipalHeader";
import {
  getDataExercisesBodyPart,
  type propsDataExercises,
} from "~/lib/GetData";
import type { DataApiExercise, DataExercise } from "~/utils/dataexercise";

type props = {
  data: string;
};

export function ExercisesByBodyPart({ data }: props) {
  const dataObtenida: propsDataExercises = { bodyPart: data };
  const [listData, setData] = useState<[DataExercise]>();
  const [apiData, setApiData] = useState<DataApiExercise["metadata"]>();

  const NextPage = async (urlParam: string | null) => {
    const dataObtenida: propsDataExercises = {
      url: urlParam,
      bodyPart: "",
    };
    try {
      const response = await getDataExercisesBodyPart(dataObtenida);
      const dataApi: DataApiExercise = response;
      setData(dataApi.data);
      setApiData(dataApi.metadata);
      console.log("se cambio de pagina");
    } catch (error) {
      alert("Error fetching data:");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDataExercisesBodyPart(dataObtenida);
        const dataApi: DataApiExercise = response;
        setData(dataApi.data);
        setApiData(dataApi.metadata);
      } catch (error) {
        alert("Error fetching data:");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <PrincipalHeader />
      <h1 className="text-center text-primary antialiased font-semibold tracking-wide text-lg">
        Exercises to work the {data.toLocaleUpperCase()}
      </h1>
      <div className="grid lg:grid-cols-4 gap-2 sm:grid-cols-2">
        {/* Cada card muestra el nombre y el gif/img del ejercicios, a su vez esta card,
        al clickearla nos llevaria  a la pag donde se muentra en detalle en ejercicio
        con su descripcion y demas */}
        {listData?.map((ex) => (
          <CardSimple
            exerciseId={ex.exerciseId}
            gifUrl={ex.gifUrl}
            name={ex.name.toLocaleUpperCase()}
            key={ex.exerciseId}
          />
        ))}
      </div>
      {/* paginacion */}
      <div className="mx-auto my-2 w-full text-center flex gap-6 items-center justify-center">
        <button
          disabled={apiData?.previousPage ? false : true}
          type="submit"
          onClick={() => NextPage(apiData?.previousPage ?? null)}
          className={
            apiData?.previousPage
              ? "transition duration-150 ease-in-out cursor-pointer hover:-translate-y-1 pointer-events-auto border border-gray-200 hover:bg-primary hover:text-text hover:font-bold rounded-md px-3 py-2 font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 mt-2"
              : "transition duration-150 ease-in-out  cursor-pointer hover:-translate-y-1 pointer-events-auto border border-text bg-text rounded-md px-3 py-2 font-semibold text-white"
          }
        >
          Previous Exercises
        </button>
        <button
          disabled={apiData?.nextPage ? false : true}
          type="submit"
          onClick={() => NextPage(apiData?.nextPage ? apiData?.nextPage : null)}
          className={
            apiData?.nextPage
              ? "transition duration-150 ease-in-out cursor-pointer hover:-translate-y-1 pointer-events-auto border border-gray-200 hover:bg-primary hover:text-text hover:font-bold rounded-md px-3 py-2 font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 mt-2"
              : "transition duration-150 ease-in-out  cursor-pointer hover:-translate-y-1 pointer-events-auto border border-text bg-text rounded-md px-3 py-2 font-semibold text-white"
          }
        >
          Next Exercises
        </button>
      </div>
    </>
  );
}
