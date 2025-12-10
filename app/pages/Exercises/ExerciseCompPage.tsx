import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
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
      <div className="p-2 max-w-max mx-auto">
        {dataExercise ? (
          <>
            <Link
              to={`/exercisesByMuscle/${dataExercise?.targetMuscles}`}
              className="hover:border  hover:bg-primary ml-5 p-2 my-5 cursor-pointer items-center rounded-lg duration-300 transition-colors text-center text-primary hover:text-secondary antialiased tracking-wide text-lg"
            >
              <BiArrowBack className="inline" /> Go back to{" "}
              {dataExercise?.targetMuscles} exercises
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
