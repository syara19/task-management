import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import useRegistration from "../hooks/useRegistration";

const Register = () => {
  const register = useRegistration();
  const initialValues = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    photo: null,
  };

  const validationSchema = yup.object({
    displayName: yup.string().required().trim(),
    email: yup.string().required().email().trim(),
    password: yup.string().required().trim().min(6),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password must match")
      .required(),
    photo: yup.mixed().required(),
  });

  const onSubmit = async (values) => {
    await register(values.email, values.password);
    console.log(values);
  };

  return (
    <div className="grid place-items-center mt-10 w-full">
      <div className="p-5 border-[1px] border-gray-400 rounded-md w-4/12">
        <h1 className="font-bold text-3xl text-center text-blue-700">
          Register
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => {
            return (
              <Form className="mt-5 flex flex-col gap-4">
                <div>
                  <Field
                    name="displayName"
                    type="text"
                    placeholder="Display Name"
                    className="w-full input-auth"
                  />
                  {
                    <ErrorMessage name="displayName">
                      {(error) => (
                        <span className="error-message">{error}</span>
                      )}
                    </ErrorMessage>
                  }
                </div>
                <div>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full input-auth"
                  />
                  {
                    <ErrorMessage name="email">
                      {(error) => (
                        <span className="error-message">{error}</span>
                      )}
                    </ErrorMessage>
                  }
                </div>
                <div>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="w-full input-auth"
                  />
                  {
                    <ErrorMessage name="password">
                      {(error) => (
                        <span className="error-message">{error}</span>
                      )}
                    </ErrorMessage>
                  }
                </div>
                <div>
                  <Field
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full input-auth"
                  />
                  {
                    <ErrorMessage name="confirmPassword">
                      {(error) => (
                        <span className="error-message">{error}</span>
                      )}
                    </ErrorMessage>
                  }
                </div>
                <div>
                  <h1 className="font-medium mb-2">Photo Profile</h1>
                  <input
                    name="photo"
                    type="file"
                    accept="image/png, image/jpg, image/jpeg"
                    onChange={(e) =>
                      props.setFieldValue("photo", e.target.files[0])
                    }
                  />
                  {
                    <ErrorMessage name="photo">
                      {(error) => (
                        <span className="error-message">{error}</span>
                      )}
                    </ErrorMessage>
                  }
                </div>
                <span>
                  Sudah punya akun?{" "}
                  <Link to={"/login"} className="text-blue-500">
                    Login
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
                  {props.isSubmitting ? "Please wait" : "Register"}
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
