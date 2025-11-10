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
      .email()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Ingrese un correo valido"
      )
      .required("El correo es requerido para comunicarse"),
    country: Yup.string().min(3).required("El Pais es requirido"),
    cellphone: Yup.string()
      .matches(
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
        "Phone number is not valid"
      )
      .required("El celular es requerido para comunicarse"),
  });
  return (
    <div>
      <div className="border border-white p-5 mt-2">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            country: "Argentina",
            cellphone: "0",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values, "values");
            setSubmitting(true);
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
            <form action="" method="get" onSubmit={handleSubmit}>
              <div className="">
                <h2 className=" font-semibold text-white text-center">
                  Personal Information
                </h2>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
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
                        autoComplete="given-name"
                        onChange={handleChange}
                        value={values.firstName}
                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                      />
                      {touched.firstName && errors.firstName}
                    </div>
                  </div>
                  <div className="sm:col-span-3">
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
                        autoComplete="family-name"
                        onChange={handleChange}
                        value={values.lastName}
                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                      />
                      {touched.lastName && errors.lastName}
                    </div>
                  </div>
                  <div className="sm:col-span-4 w-full">
                    <label
                      htmlFor="email"
                      className="block text-sm/6 font-medium text-white"
                    >
                      Email
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={handleChange}
                        placeholder="asd@gmail.com"
                        value={values.email}
                        autoComplete="email"
                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                      />
                      {touched.email && errors.email}
                    </div>
                  </div>
                  <div className="sm:col-span-3">
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
                        autoComplete="country-name"
                        onChange={handleChange}
                        value={values.country}
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                      >
                        <option>Argentina</option>
                        <option>Brasil</option>
                        <option>Colombia</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
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
                        autoComplete=""
                        onChange={handleChange}
                        value={values.cellphone}
                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                      />
                      {touched.cellphone && errors.cellphone}
                    </div>
                  </div>
                </div>
              </div>
              <div className="m-6 flex items-center justify-center">
                <button
                  type="submit"
                  className="transition duration-150 ease-in-out cursor-pointer hover:-translate-y-1 pointer-events-auto border border-gray-200 hover:bg-primary hover:text-text hover:font-bold 
            w-full rounded-md px-3 py-2 font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 mt-2"
                >
                  Enviar
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
