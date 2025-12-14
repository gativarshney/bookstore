import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <dialog id="my_modal_5" className="modal sm:modal-middle ">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-lg mb-4">Login</h3>
          <div>
            <div className="my-2">Email</div>
            <input
              className="px-3 py-2 w-80 rounded border"
              type="email"
              placeholder="Enter your Email"
               {...register("email", { required: true })}
            />{" "}
            <br/>
            {errors.email && <span className="text-sm text-red-500" >This field is required</span>}
            <br />
            <div className="my-2">Password</div>
            <input
              className="px-3 py-2 w-80 rounded border"
              type="password"
              placeholder="Enter your Password"
               {...register("password", { required: true })}
            />
            <br/>
            {errors.password && <span className="text-sm text-red-500" >This field is required</span>}
          </div>
          <div className="flex align-middle justify-around mt-4 ">
            <button className="btn btn-secondary">Login</button>
            <p className="mt-2">
              Not Registered?{" "}
              <Link
                to={"/signup"}
                className="text-blue-500 cursor-pointer underline"
              >
                SignUp
              </Link>
            </p>
          </div>
          <div className="modal-action">
            <Link method="dialog" to={"/"}>
              <button className="btn">Close</button>
            </Link>
          </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Login;
