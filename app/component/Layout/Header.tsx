import { Link } from "react-router";

export const Header = () => {
  return (
    <header className="w-full flex flex-row my-2 p-2 gap-6 items-center text-gray-500">
      <div className="basis-1/3 ">
        <Link to={"/welcome"} className="text-center text-xl ml-5">
          🏋️
        </Link>
      </div>
      <nav className="basis-2/3">
        <ul className="flex gap-5 justify-end mr-2">
          <Link to={"/welcome"}>Home</Link>
          <Link to={"/contactme"}>Contact</Link>
        </ul>
      </nav>
    </header>
  );
};
