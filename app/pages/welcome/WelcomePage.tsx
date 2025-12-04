import { Link } from "react-router";
import { PrincipalHeader } from "~/component/PrincipalHeader";
import { descriptionOfFit } from "~/lib/dataHome";

export function WelcomePage() {
  return (
    <main className="flex flex-col items-center justify-center pt-15 pb-4 gap-9 w-5/6 m-auto ">
      <div className="flex min-h-0">
        <PrincipalHeader />
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
            to={"/firtsstep"}
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
