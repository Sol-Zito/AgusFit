import type { DataApiExercise, DataExercise } from "~/utils/dataexercise";

export type propsDataExercises = {
  bodyPart: string;
  url?: string | null;
};

export const getDataExercisesBodyPart = async ({
  bodyPart,
  url,
}: propsDataExercises): Promise<DataApiExercise> => {
  const urlDinamic: string =
    url ??
    `https://www.exercisedb.dev/api/v1/bodyparts/${bodyPart}/exercises?offset=0&limit=20`;

  try {
    const response = await fetch(urlDinamic);

    if (!response.ok) {
      throw new Error("Error fetching data");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export type propsDataExercisesMuscle = {
  muscle: string;
  url?: string | null;
};

export const getDataExercisesByMuscle = async ({
  muscle,
  url,
}: propsDataExercisesMuscle): Promise<DataApiExercise> => {
  const urlDinamic: string =
    url ??
    `https://www.exercisedb.dev/api/v1/muscles/${muscle}/exercises?offset=0&limit=20&includeSecondary=false`;

  try {
    const response = await fetch(urlDinamic);

    if (!response.ok) {
      throw new Error("Error fetching data");
    }

    const data: DataApiExercise = await response.json();

    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getDataExercisesById = async (
  idExercise: string
): Promise<DataExercise> => {
  const urldata = `https://www.exercisedb.dev/api/v1/exercises/${idExercise}`;
  try {
    const response = await fetch(urldata);

    if (!response.ok) {
      throw new Error("Error fetching data");
    }
    const dataApi = await response.json();
    console.log("dataApi al obtener ejercicio por id", dataApi);

    return dataApi.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getRandomExercise = async (
  dataBodyParts: string
): Promise<DataApiExercise> => {
  const urlBase = `https://www.exercisedb.dev/api/v1/exercises?offset=0&limit=6&search=${dataBodyParts}&sortBy=name&sortOrder=asc`;
  try {
    const response = await fetch(urlBase);
    if (!response.ok) {
      throw new Error("Error fetching data");
    }
    const dataApi = await response.json();
    console.log("data ejercicios random", dataApi);
    return dataApi;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
