import { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { getDataSearchingExercise } from "~/lib/GetData";
import type { DataExercise } from "~/utils/dataexercise";
import { CardSimple } from "../Card/CardSimple";

export const SearchComponent = () => {
  const inputRef = useRef<string>("");

  const [dataApiSearch, setDataApiSearch] = useState<[DataExercise] | null>();
  const [error, setError] = useState<string>();

  const focusInput = () => {
    fetchData(inputRef.current);
    console.log(inputRef.current);
  };

  const fetchData = async (paramSearch: string) => {
    try {
      const data = await getDataSearchingExercise(paramSearch);
      const resp = data.data;
      if (resp.length < 1) {
        console.log("que data me devuelve esta pija", resp);
      } else {
        setDataApiSearch(resp);
        setError("");
      }
    } catch (error) {
      setError("No se encontro informacion");
      setDataApiSearch(null);
      throw new Error("Error");
    }
  };

  return (
    <>
      <h2 className="m-auto w-4/5 text-center">
        Encontra el ejercicio que estas buscando💪🏻
      </h2>
      <div
        className="relative mx-auto w-4/5 max-w-xl h-14 rounded-full duration-200 group after:border 
        after:border-gray after:absolute after:inset-0 after:w-full after:h-full after:border-gray
        after:rounded-full lg:max-w-none hover:text-white hover:bg-linear-to-r from-footer-primary to-footer-secondary
        hover:after:border-cool-indigo after:duration-200 focus-within:bg-white focus-within:after:border-cool-indigo 
        hover:ring-1 ring-cool-indigo focus-within:ring-1 focus-within:ring-cool-indigo"
      >
        <input
          type="search"
          autoFocus
          onBlur={(e) => (inputRef.current = e.target.value)}
          className="text-gray relative z-10 outline-hidden border-none  w-full h-14 
          py-0 pl-6 pr-20 outline-hidden relative  
          hover:outline-hidden hover:text-secondary focus:text-secondary placeholder:text-gray focus:ring-0"
          placeholder="Buscar por nombre, musculo, equipamiento, parte del cuerpo"
        />
        <button
          type="submit"
          onClick={() => focusInput()}
          className="inline-flex absolute top-2 right-2 z-20 justify-center items-center w-10 h-10 text-sm 
          rounded-full transition duration-200 ease-in-out cursor-pointer outline-hidden sm:text-base 
          sm:font-medium hover:bg-yellow-500 focus:outline-hidden focus:ring-2 focus:ring-offset-2 
          focus:ring-cool-indigo"
        >
          <BiSearch className="w-5 h-5 " />
        </button>
      </div>
      {error && <p>{error}</p>}
      {dataApiSearch && (
        <div className="text-center w-full transition duration-200 ease-in-out">
          <p>Ejercicios encontrados:</p>
          <div className="w-4/5 m-auto my-5 grid gap-4 lg:grid-cols-4 sm:grid-col md:grid-cols-2 justify-start ">
            {dataApiSearch?.map((ele) => (
              <CardSimple
                exerciseId={ele.exerciseId}
                gifUrl={ele.gifUrl}
                name={ele.name.toLocaleUpperCase()}
                key={ele.exerciseId}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

/* un input con un desplegable con 1 opciones del msuculo y 2 opciones del bodypart */
// export const componentSearch = (dataArr: [dataName], nameSearching: string) => {
//   return (
//     <select name="nameSearching" id="nameSearching">
//       {/* Buscar por musculo - desplegable */}
//       <option hidden>nameSearching</option>
//       {dataArr?.map((ele) => (
//         <option value={ele.name}>{ele.name}</option>
//       ))}
//     </select>
//   );
// };
