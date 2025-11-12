import { Link } from "react-router";

export function Welcome() {
  return (
    <main className="flex flex-col items-center justify-center pt-15 pb-4 gap-9 w-5/6 m-auto ">
      <div className="flex min-h-0">
        <header className="flex flex-col items-center p-2 font-bold">
          <h1 className=" capitalize text-clip">
            🏋️Tu compañero digital para una vida sana y activa.
          </h1>
          <div className="w-full border border-gray-200 m-2"></div>
          <h2 className="capitalize text-bold">Entrena con Coach Agustin💪🏻</h2>
        </header>
      </div>
      <div className="m-auto p-4 rounded-3xl border border-gray-200 dark:border-gray-700 space-y-4 ">
        <p>{descriptionOfFit.describe}</p>
        <ul>
          {descriptionOfFit.objects.map((tip) => (
            <li key={tip}>➡️{tip}</li>
          ))}
        </ul>
        <p className="text-clip">{descriptionOfFit.ending}</p>
        <div className="place-self-center pt-2">
          <Link
            to={"/firtsStep"}
            className="transition duration-150 ease-in-out cursor-pointer hover:-translate-y-1 pointer-events-auto border border-gray-200 p-2 hover:bg-primary hover:text-text hover:font-bold 
            w-full rounded-md px-3 py-2 font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 mt-2"
          >
            Comencemos
          </Link>
        </div>
      </div>
    </main>
  );
}

const descriptionOfFit = {
  describe:
    "Estoy para ayudarte a alcanzar tus objetivos de salud y bienestar de forma personalizada y efectiva. Brindandote:",
  objects: [
    "Programas de entrenamiento adaptados a distintos niveles y objetivos, tanto para el gimnasio como para tu hogar.",
    "Videos explicativos y descripciones detalladas de cada ejercicio para que entrenes con seguridad y técnica.",
    "Rutinas personalizadas según tus metas, disponibilidad y preferencias.",
    "Planes de alimentación pensados para complementar tu entrenamiento y mejorar tu rendimiento.",
    "Consejos prácticos sobre hábitos saludables, recuperación, motivación y estilo de vida fit.",
    "Seguimiento cada 15 días de avances y tecnicas",
    "Asesoramiento diario de lunes a lunes.",
  ],
  ending:
    "Ya sea que estés empezando o buscando llevar tu entrenamiento al siguiente nivel, te acompaño en cada paso del camino. Nunca es tarde💪🏻",
};
