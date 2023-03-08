import React from "react";
import { Link } from "react-router-dom";
import { Form, Formik, ErrorMessage, Field } from "formik";
import * as yup from "yup";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    email: yup.string().required().email().trim(),
    password: yup.string().required().trim().min(6),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="grid place-items-center mt-32 w-full">
      <div className="p-5 border-[1px] border-gray-400 rounded-md w-4/12">
        <h1 className="font-bold text-3xl text-center text-blue-700">Login</h1>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          {(props) => {
            return (
              <Form className="mt-5 flex flex-col gap-4">
                <div>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full input-auth"
                  />
                  <ErrorMessage name="email">
                    {(error) => <span className="error-message">{error}</span>}
                  </ErrorMessage>
                </div>
                <div>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="w-full input-auth"
                  />
                  <ErrorMessage name="password">
                    {(error) => <span className="error-message">{error}</span>}
                  </ErrorMessage>
                </div>
                <span>
                  Belum punya akun?
                  <Link to={"/register"} className="text-blue-500">
                    Register
                  </Link>
                </span>
                <button
                  type="submit"
                  className={`${
                    props.isSubmitting || !props.isValid
                      ? "bg-blue-400"
                      : "bg-blue-700"
                  } btn`}
                  disabled={!props.isValid || props.isSubmitting}
                >
                  {props.isSubmitting ? "Please wait" : "Login"}
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
