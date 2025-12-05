import { useParams } from "react-router";
import { ExerciseByMuscles } from "~/pages/Exercises/ExerciseMuscles";

export default function exerciseMuscle() {
  const { id } = useParams();

  return <ExerciseByMuscles data={id ?? ""} />;
}
