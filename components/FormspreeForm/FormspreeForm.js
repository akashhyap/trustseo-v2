import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaArrowRight } from "react-icons/fa";

export const FormspreeForm = ({ formId }) => {
  const [state, handleSubmit] = useForm(formId);
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="form_wrap">
      <div className="grid grid-cols-6 gap-6 my-5">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="fname" className="block text-sm text-gray-700">
            First Name
          </label>
          <input
            id="fname"
            type="fname"
            name="fname"
            className="mt-1 block w-full rounded-md input_form"
            required
          />
          <ValidationError field="fname" errors={state.errors} />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="lname" className="block text-sm text-gray-700">
            Last Name
          </label>
          <input
            id="lname"
            type="lname"
            name="lname"
            className="mt-1 block w-full rounded-md input_form"
          />
        </div>
        <div className="col-span-6 sm:col-span-6">
          <label htmlFor="email" className="block text-sm text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="mt-1 block w-full rounded-md input_form"
            required
          />
        </div>
        <div className="col-span-6 sm:col-span-6">
          <label htmlFor="c_message" className="block text-sm text-gray-700">
            Message
          </label>
          <textarea
            id="c_message"
            name="c_message"
            className="mt-1 block w-full rounded-md input_form"
          />
          <ValidationError
            prefix="c_message"
            field="c_message"
            errors={state.errors}
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="text-[16px] inline-flex items-center text-left bg-transparent transition-all duration-150 hover:bg-slate-800 text-white-700 hover:text-white py-4 px-2 lg:px-4 border border-white-500 hover:border-transparent rounded"
      >
        Submit
        <span className="ml-2">
          <FaArrowRight />
        </span>
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
};
