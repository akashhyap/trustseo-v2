import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaArrowRight } from "react-icons/fa";

const formSchema = Yup.object().shape({
  fname: Yup.string()
    .min(3, "Must be at least 3 characters long")
    .required("This field is required"),
  email: Yup.string()
    .email("Invalid email. Please try a valid email")
    .required("This field is required"),
  message: Yup.string().required("This field is required"),
});

export const FormspreeForm = ({ formId }) => {
  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };
  const handleOnSubmit = (values, actions) => {
    axios({
      method: "POST",
      url: `http://formspree.io/forms/${formId}/submissions`,
      data: values,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((response) => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(true, "Thanks!");
      })
      .catch((error) => {
        actions.setSubmitting(false);
        handleServerResponse(false, "Error");
      });
  };

  return (
    <Formik
      initialValues={{ fname: "", email: "", message: "" }}
      onSubmit={handleOnSubmit}
      validationSchema={formSchema}
    >
      {({ isSubmitting }) => (
        <Form id="fs-frm" className="form_wrap" noValidate>
          <div className="mb-5">
            <label htmlFor="fname" className="block text-sm text-gray-700">
              Full Name
            </label>
            <Field
              id="fname"
              type="text"
              name="fname"
              className="mt-1 block w-full rounded-md input_form"
            />
            <ErrorMessage name="fname" className="errorMsg" component="p" />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block text-sm text-gray-700">
              Email Address
            </label>
            <Field
              id="email"
              type="email"
              name="email"
              className="mt-1 block w-full rounded-md input_form"
            />
            <ErrorMessage name="email" className="errorMsg" component="p" />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="block text-sm text-gray-700">
              Message
            </label>
            <Field
              id="message"
              name="message"
              component="textarea"
              className="mt-1 block w-full rounded-md input_form"
            />
            <ErrorMessage name="message" className="errorMsg" component="p" />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="text-[16px] inline-flex items-center text-left bg-transparent transition-all duration-150 hover:bg-slate-800 text-white-700 hover:text-white py-4 px-2 lg:px-4 border border-white-500 hover:border-transparent rounded"
          >
            Submit
            <span className="ml-2">
              <FaArrowRight />
            </span>
          </button>
          {serverState && (
            <p className={!serverState.ok ? "errorMsg" : ""}>
              {serverState.msg}
            </p>
          )}
        </Form>
      )}
    </Formik>
  );
};
