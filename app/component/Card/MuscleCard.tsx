import { Link } from "react-router";

type nameExercise = {
  name: string;
};

export const MuscleCard = (part: nameExercise) => {
  return (
    <Link
      to={`/exercisesByMuscle/${part.name}`}
      key={part.name}
      className="p-2 rounded-xl border border-gray
        transition delay-150 duration-300 ease-in-out cursor-pointer 
        hover:-translate-y-1 hover:scale-110 hover:text-white
        hover:bg-linear-to-r from-footer-primary to-footer-secondary
        focus:-translate-y-1 focus:scale-110 focus:text-white
        focus:bg-linear-to-r from-footer-primary to-footer-secondary"
    >
      {part.name.toUpperCase()}
    </Link>
  );
};
