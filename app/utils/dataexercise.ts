export type DataExercise = {
  exerciseId: string; //"LMGXZn8";
  name: string; //"barbell decline close grip to skull press";
  gifUrl: string; //"https://static.exercisedb.dev/media/LMGXZn8.gif";
  targetMuscles: [string]; //["triceps"];
  bodyParts: [string]; //["upper arms"];
  equipments: [string]; //["barbell"];
  secondaryMuscles: [string]; //["chest", "shoulders"];
  instructions: [string];
};

export type DataApiExerciseById = {
  success: boolean; //true,
  message: string;
  data: DataExercise;
};

export type DataApiExercise = {
  metadata: {
    totalPages: number;
    totalExercises: number;
    currentPage: number;
    previousPage: string | null;
    nextPage: string | null;
  };
  data: [DataExercise];
};

export type DataSimpleExercise = {
  exerciseId: string; //"LMGXZn8";
  name: string; //"barbell decline close grip to skull press";
  gifUrl: string; //"https://static.exercisedb.dev/media/LMGXZn8.gif";
};
