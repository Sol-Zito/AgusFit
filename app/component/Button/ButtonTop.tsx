import { BiArrowToTop } from "react-icons/bi";

const ButtonTop = () => {
  return (
    <a
      href="#"
      className="fixed right-5 bottom-20 bg-primary border-text hover:bg-primarytwo rounded-lg duration-300 transition-colors border px-4 py-2"
    >
      <BiArrowToTop className="size-6 md:size-6 sm:size-4" />
    </a>
  );
};

export default ButtonTop;
