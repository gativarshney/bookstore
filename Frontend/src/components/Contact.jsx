import React from "react";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
        <Navbar/>
      <div className="flex flex-col h-screen items-center justify-center ">
        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
          <div className="border-black rounded-xl shadow-2xl p-5">
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div>
              <div className="my-2">Name</div>
              <input
                className="px-3 py-2 w-80 rounded border"
                type="text"
                placeholder="Enter your Name"
                {...register("name", { required: true })}
              />{" "}
              <br />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
              <br />
              <div className="my-2">Email</div>
              <input
                className="px-3 py-2 w-80 rounded border"
                type="email"
                placeholder="Enter your Email"
                {...register("email", { required: true })}
              />{" "}
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
              <br />
              <div className="my-2">Message</div>
              <textarea
                className="px-3 py-2 w-80 rounded border"
                type="text"
                placeholder="Enter your Message"
                {...register("message", { required: true })}
              />
              <br />
              {errors.message && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
              <br />
            </div>
          <button method="dialog" className="btn btn-secondary mt-4">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
