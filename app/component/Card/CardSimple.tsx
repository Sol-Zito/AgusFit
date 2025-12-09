import { Link } from "react-router";
import type { DataSimpleExercise } from "~/utils/dataexercise";

export const CardSimple = (props: DataSimpleExercise) => {
  return (
    <Link
      to={`/exercisescomplete/${props.exerciseId}`}
      className="grid justify-center p-8 m-2 border border-primary text-center"
      key={props.exerciseId}
    >
      <h1 className="mb-2 text-center text-primary antialiased font-semibold tracking-wide underline underline-offset-4">
        {props.name.toLocaleUpperCase()}
      </h1>
      <img src={props.gifUrl} alt={props.name} className="place-self-center" />
    </Link>
  );
};
