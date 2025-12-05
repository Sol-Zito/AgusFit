import { useParams } from "react-router";
import { ExercisesByBodyPart } from "~/pages/Exercises/ExercisesBodyPart";

export default function Exercise() {
  const { id } = useParams();

  return <ExercisesByBodyPart data={id ?? ""} />;
}
