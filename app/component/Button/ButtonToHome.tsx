import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router";

const ButtonToHome = () => {
  return (
    <div>
      <Link
        to={`/welcome`}
        className="hover:border  hover:bg-primary ml-5 p-2 my-5 cursor-pointer items-center rounded-lg duration-300 transition-colors text-center text-primary hover:text-secondary antialiased tracking-wide text-lg"
      >
        <BiArrowBack className="inline" /> Go back
      </Link>
    </div>
  );
};

export default ButtonToHome;
