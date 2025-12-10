import { useEffect, useState } from "react";
import ButtonToHome from "~/component/Button/ButtonToHome";
import { CardSimple } from "~/component/Card/CardSimple";
import { PrincipalHeader } from "~/component/PrincipalHeader";
import {
  getDataExercisesByMuscle,
  type propsDataExercisesMuscle,
} from "~/lib/GetData";
import type { DataApiExercise, DataExercise } from "~/utils/dataexercise";

type props = {
  data: string;
};

export function ExerciseByMuscles({ data }: props) {
  const dataObtenida: propsDataExercisesMuscle = { muscle: data };
  const [dataExercises, setDataExercise] = useState<[DataExercise]>();
  const [apiDataPag, setApiDataPag] = useState<DataApiExercise["metadata"]>();

  const NextPage = async (urlParam: string | null) => {
    const dataObtenida: propsDataExercisesMuscle = {
      url: urlParam,
      muscle: "",
    };
    try {
      const response = await getDataExercisesByMuscle(dataObtenida);
      const dataApi: DataApiExercise = response;
      setDataExercise(dataApi.data);
      setApiDataPag(dataApi.metadata);
      console.log("se cambio de pagina");
    } catch (error) {
      alert("Error fetching data:");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDataExercisesByMuscle(dataObtenida);
        const dataApi: DataApiExercise = response;
        setDataExercise(dataApi.data);
        setApiDataPag(dataApi.metadata);
      } catch (error) {
        alert("Error fetching data:");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <PrincipalHeader />
      <ButtonToHome />
      <h1 className="text-center text-primary antialiased font-semibold tracking-wide text-lg">
        Exercises to work the {data.toLocaleUpperCase()}
      </h1>
      <div className="grid lg:grid-cols-4 gap-2 sm:grid-cols-2">
        {dataExercises?.map((ex) => (
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
          disabled={apiDataPag?.previousPage ? false : true}
          type="submit"
          onClick={() => NextPage(apiDataPag?.previousPage ?? null)}
          className={
            apiDataPag?.previousPage
              ? "transition duration-150 ease-in-out cursor-pointer hover:-translate-y-1 pointer-events-auto border border-gray-200 hover:bg-primary hover:text-text hover:font-bold rounded-md px-3 py-2 font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 mt-2"
              : "transition duration-150 ease-in-out  cursor-pointer hover:-translate-y-1 pointer-events-auto border border-text bg-text rounded-md px-3 py-2 font-semibold text-white"
          }
        >
          Previous Exercises
        </button>
        <button
          disabled={apiDataPag?.nextPage ? false : true}
          type="submit"
          onClick={() =>
            NextPage(apiDataPag?.nextPage ? apiDataPag?.nextPage : null)
          }
          className={
            apiDataPag?.nextPage
              ? "transition duration-150 ease-in-out cursor-pointer hover:-translate-y-1 pointer-events-auto border border-gray-200 hover:bg-primary hover:text-text hover:font-bold rounded-md px-3 py-2 font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 mt-2"
              : "transition duration-150 ease-in-out  cursor-pointer hover:-translate-y-1 pointer-events-auto border border-text bg-text rounded-md px-3 py-2 font-semibold text-white"
          }
        >
          Next Exercises
        </button>
      </div>
    </div>
  );
}
