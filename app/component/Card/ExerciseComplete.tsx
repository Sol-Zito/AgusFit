// contenedor de esta card tiene q tener el fetch que toma el ejercicio de
// la api y le pasa el json con la data necesaria

import type { DataExercise } from "~/utils/dataexercise";

// card q muestra el ejercicio con detalles y demas

export const ExerciseComplete = (data: DataExercise) => {
  return (
    <div key={data.exerciseId}>
      <h1>{data.name}</h1>
      <img src={data.gifUrl} alt={data.gifUrl} />
      <p>Musculo Objetivo: {data.targetMuscles}</p>
      <p>Parte del cuerpo: {data.bodyParts[0]}</p>
      <p>Equipo: {data.equipments[0]}</p>
      <div>
        <p>Musculo secundario:</p>
        <ul>
          {data.secondaryMuscles.map((sm, ind) => (
            <li key={ind}>{sm}</li>
          ))}
        </ul>
      </div>
      <div>
        <p>Instrucciones:</p>
        <ul>
          {data.instructions.map((sp, ind) => (
            <li key={ind}>{sp}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
