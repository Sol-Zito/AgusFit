import { useParams } from "react-router";
import { ExerciseCompPage } from "~/pages/Exercises/ExerciseCompPage";

export default function ExerciseComplete() {
  const { id } = useParams();

  return <ExerciseCompPage data={id ?? ""} />;
}
