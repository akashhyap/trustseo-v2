import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export const FormspreeForm = ({ formId }) => {
  const [state, handleSubmit] = useForm(formId);
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="form_wrap">
      <div className="grid grid-cols-6 gap-6 my-5">
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="fname"
            className="block text-sm text-gray-700"
          >
           First Name
          </label>
          <input
            id="fname"
            type="fname"
            name="fname"
            className="mt-1 block w-full rounded-md input_form"
          />
          <ValidationError prefix="fname" field="fname" errors={state.errors} />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="lname"
            className="block text-sm text-gray-700"
          >
           Last Name
          </label>
          <input
            id="lname"
            type="lname"
            name="lname"
            className="mt-1 block w-full rounded-md input_form"
          />
          <ValidationError prefix="lname" field="lname" errors={state.errors} />
        </div>
        <div className="col-span-6 sm:col-span-6">
          <label
            htmlFor="email"
            className="block text-sm text-gray-700"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="mt-1 block w-full rounded-md input_form"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="col-span-6 sm:col-span-6">
          <label
            htmlFor="message"
            className="block text-sm text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="mt-1 block w-full rounded-md input_form"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </form>
  );
};
