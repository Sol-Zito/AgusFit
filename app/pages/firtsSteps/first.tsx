import { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { FormContact } from "./FormContact";
import { EncabezadoPrincipal } from "~/component/EncabezadoPrincipal";

export function First() {
  const [isClient, setIsClient] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {}, [isClient]);

  const validationSchema = Yup.object().shape({
    passwordClient: Yup.string()
      .oneOf(["Agusfit"], "El valor no es el esperado")
      .required("La contraseña es requirida"),
  });

  return (
    <div className="flex flex-col items-center justify-center pb-4 gap-9 w-5/6 m-auto h-full">
      <EncabezadoPrincipal />
      <div>
        <h1>Hola!! Espero que estes bien💪🏻</h1>
        <Formik
          initialValues={{ passwordClient: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values, "values");
            if (values.passwordClient == "Agusfit") {
              console.log(values, "values en onsubmit");
              navigate("/welcome");
              alert(JSON.stringify(values, null, 2));
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <label htmlFor="passwordClient">Ingresa la contraseña:</label>
              <div className="my-2 mx-auto">
                <input
                  type="text"
                  id="passwordClient"
                  name="passwordClient"
                  onChange={handleChange}
                  value={values.passwordClient}
                  className="w-full block rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
                <p className="text-error">
                  {touched.passwordClient && errors.passwordClient}
                </p>
              </div>
              <button
                type="submit"
                className="transition duration-150 ease-in-out cursor-pointer hover:-translate-y-1 pointer-events-auto border border-gray-200 hover:bg-primary hover:text-text hover:font-bold 
            w-full rounded-md px-3 py-2 font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 mt-2"
              >
                Ingresar
              </button>
            </form>
          )}
        </Formik>
      </div>
      <div className="w-full border border-gray-200 mx-5"></div>
      <div className="mt-2">
        <header className="flex gap-5 justify-around items-center">
          {isClient ? (
            <>
              <p className="text-wrap">
                Si aun no te has puesto en contacto y quieres inciar con tu
                entrenamiento personalizado, dale click al boton:
              </p>
              <button
                type="button"
                className="transition duration-150 ease-in-out cursor-pointer hover:-translate-y-1 pointer-events-auto border border-gray-200 hover:bg-primary hover:text-text hover:font-bold 
            rounded-md px-3 py-2 font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                onClick={() => setIsClient(!isClient)}
              >
                Comenzar!
              </button>
            </>
          ) : (
            <>
              <p className="text-wrap">
                Completa el formulario, envíalo y pronto me pondre en contacto:
              </p>
            </>
          )}
        </header>
        {!isClient && <FormContact />}
      </div>
    </div>
  );
}

const resources = [
  {
    href: "/",
    text: "Iniciar con la rutina",
    icon: "🤝",
  },
  {
    href: "/contacto",
    text: "Contacto",
    icon: "🧑🏻‍💻",
  },
];
