import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ExerciseComplete } from "~/component/Card/ExerciseComplete";
import { PrincipalHeader } from "~/component/PrincipalHeader";
import { getDataExercisesById } from "~/lib/GetData";
import type { DataExercise } from "~/utils/dataexercise";

type props = {
  data: string;
};

export const ExerciseCompPage = ({ data }: props) => {
  const [dataExercise, setApiData] = useState<DataExercise>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDataExercisesById(data);
        const dataApi: DataExercise = response;
        console.log("se obtuvo data de api", dataApi);
        setApiData(dataApi);
      } catch (error) {
        alert("Error fetching data:");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <PrincipalHeader />
      <div className="p-2">
        {dataExercise ? (
          <>
            <Link
              to={`/exercisesBodyPart/${dataExercise?.bodyParts}`}
              className="hover:border hover:p-2 my-5 cursor-pointer text-center text-primary antialiased font-semibold tracking-wide text-lg"
            >
              Go back to {dataExercise?.bodyParts} exercises
            </Link>
            <ExerciseComplete
              key={dataExercise?.exerciseId}
              {...dataExercise}
            />
          </>
        ) : (
          <Link
            to={`/welcome`}
            className="h-screen my-5 cursor-pointer text-center text-primary antialiased font-semibold tracking-wide text-lg"
          >
            No information was found about: {data}.
            <p className="hover:border hover:p-2 inline"> Back to home</p>
          </Link>
        )}
      </div>
    </>
  );
};
