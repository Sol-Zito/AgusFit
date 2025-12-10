import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router";
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
      <div></div>
    </div>
  );
}
