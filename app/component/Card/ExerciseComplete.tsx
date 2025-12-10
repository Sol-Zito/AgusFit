import type { DataExercise } from "~/utils/dataexercise";

export const ExerciseComplete = (data: DataExercise) => {
  return (
    <div
      key={data.exerciseId}
      className="border p-2 grid grid-rows-auto gap-2 my-5 max-w-max mx-auto"
    >
      <div className="text-center  w-4/5 m-auto">
        <h1>{data.name.toLocaleUpperCase()}</h1>
        <img
          src={data.gifUrl}
          alt={data.gifUrl}
          className="place-self-center mt-2"
        />
      </div>
      <div className="grid md:grid-cols-2 max-w-max m-auto sm:grid-cols-1">
        <p>♦️ Musculo Objetivo: {data.targetMuscles}</p>
        <p>♦️ Parte del cuerpo: {data.bodyParts[0]}</p>
        <p>♦️ Equipo: {data.equipments[0]}</p>
        <div>
          <p className="inline">♦️ Musculo secundario: </p>
          {data.secondaryMuscles.map((sm, ind) => (
            <p key={ind} className="inline">
              {sm},{" "}
            </p>
          ))}
        </div>
      </div>
      <div>
        <p className="underline">Instrucciones:</p>
        <ul>
          {data.instructions.map((sp, ind) => (
            <li key={ind}>{sp}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
