import { Formik } from "formik";
import * as Yup from "yup";

export const FormContact = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "El nombre debe tener al menos 3 letras")
      .required("El nombre es requirido"),
    lastName: Yup.string()
      .min(3, "El apellido debe tener al menos 3 letras")
      .required("El apellido es requirido"),
    email: Yup.string()
      .email("Ingrese un correo valido")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Ingrese un correo valido"
      )
      .required("El correo es requerido para comunicarse"),
    country: Yup.string().min(3).required("El Pais es requirido"),
    cellphone: Yup.string()
      .matches(
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
        "El celular no es valido"
      )
      .required("El celular es requerido para comunicarse"),
    message: Yup.string().max(100),
  });
  return (
    <div>
      <div className="border border-white p-5 mt-2">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            country: "",
            cellphone: "",
            message:
              "Hola Agus, espero que pronto podamos generar un plan de entrenamiento y nutricion juntos!",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            if (
              values.cellphone &&
              values.country &&
              values.email &&
              values.firstName &&
              values.lastName
            ) {
              console.log(values, "values en onsubmit");
              alert("Se envio el formulario correctamente!");
              actions.resetForm();
              const convertToMail = {
                from: values.email,
                to: "test@yopmail.com",
                subject: "hello world",
                text: `Mi nombre es ${values.firstName} ${values.lastName}, 
                soy de ${values.country}. y me interesaria saber mas sobre el gym. Mi cel es: ${values.cellphone}`,
                html: "<b>Hello world?</b>",
              };
              // SendEmail(convertToMail);
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,

            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <h2 className=" font-semibold text-white text-center">
                Datos Personales para una mejor comunicacion:
              </h2>
              <div className="mt-10 grid grid-cols-3 gap-6 sm:grid-cols-4">
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="firstName"
                    className="block text-sm/6 font-medium text-white"
                  >
                    Nombre
                  </label>
                  <div className="mt-2">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      autoFocus
                      onChange={handleChange}
                      value={values.firstName}
                      autoComplete="nombre"
                      className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                    <p className="text-error">
                      {touched.firstName && errors.firstName}
                    </p>
                  </div>
                </div>
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm/6 font-medium text-white"
                  >
                    Apellido
                  </label>
                  <div className="mt-2">
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      onChange={handleChange}
                      value={values.lastName}
                      autoComplete="apellido"
                      className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                    <p className="text-error">
                      {touched.lastName && errors.lastName}
                    </p>
                  </div>
                </div>
                <div className="col-span-3 sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium text-white"
                  >
                    Email
                  </label>
                  <div className="mt-2"></div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    placeholder="asd@gmail.com"
                    value={values.email}
                    autoComplete="asd@gmail.com"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                  <p className="text-error">{touched.email && errors.email}</p>
                </div>
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="country"
                    className="block text-sm/6 font-medium text-white"
                  >
                    Pais
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      id="country"
                      name="country"
                      onChange={handleChange}
                      value={values.country}
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    >
                      <option hidden>Seleccionar pais</option>
                      <option>Argentina</option>
                      <option>Brasil</option>
                      <option>Colombia</option>
                      <option>Mexico</option>
                    </select>
                    <p className="text-error">
                      {touched.country && errors.country}
                    </p>
                  </div>
                </div>
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="cellphone"
                    className="block text-sm/6 font-medium text-white"
                  >
                    Celular
                  </label>
                  <div className="mt-2">
                    <input
                      id="cellphone"
                      name="cellphone"
                      placeholder="+1 123 456 7890"
                      type="text"
                      onChange={handleChange}
                      value={values.cellphone}
                      autoComplete="+1 123 456 7890"
                      className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                    <p className="text-error">
                      {touched.cellphone && errors.cellphone}
                    </p>
                  </div>
                </div>
                <div className="col-span-3 sm:col-span-4">
                  <label
                    htmlFor="message"
                    className="block text-sm/6 font-medium text-white"
                  >
                    Mensaje
                  </label>
                  <div className="mt-2"></div>
                  <textarea
                    id="message"
                    name="message"
                    maxLength={100}
                    autoComplete="Hola Agus, espero que pronto podamos generar un plan de entrenamiento"
                    placeholder="Hola Agus, espero que pronto podamos generar un plan de entrenamiento y nutricion juntos!"
                    onChange={handleChange}
                    value={values.message}
                    className="w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                  <p className="text-error">
                    {touched.message && errors.message}
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="transition duration-150 ease-in-out cursor-pointer hover:-translate-y-1 pointer-events-auto border border-gray-200 hover:bg-primary hover:text-text hover:font-bold 
            w-full rounded-md px-3 py-2 font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 mt-2"
              >
                Enviar
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
