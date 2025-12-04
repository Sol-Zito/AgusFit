import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router";
import { FormContact } from "~/component/ContactUs.tsx/FormContact";

export const ContactPage = () => {
  return (
    <div className="w-4/5 mx-auto mb-2 flex flex-col gap-2 items-center justify-evenly sm:flex-row">
      <div className=" text-center border border-white p-5 mt-2 w-full md:w-auto">
        <h2>Social Medias</h2>
        <ul className=" py-5 flex items-center justify-evenly">
          <Link to={"https://www.instagram.com/aguszito.fit/"}>
            <BsInstagram className="size-6" />
          </Link>
          <Link to="https://www.linkedin.com/in/agustin-zito-65b119241/">
            <BsLinkedin className="size-6" />
          </Link>
        </ul>
      </div>
      <div>
        <FormContact />
      </div>
    </div>
  );
};
