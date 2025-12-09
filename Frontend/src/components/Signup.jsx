import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Signup = () => {
  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center ">
        <div>
          <div className="border-black rounded-xl shadow-2xl p-5">
            <h3 className="font-bold text-lg mb-4">Signup</h3>
            <div>
              <div className="my-2">Name</div>
              <input
                className="px-3 py-2 w-80 rounded border"
                type="text"
                placeholder="Enter your Name"
              />{" "}
              <br />
              <div className="my-2">Email</div>
              <input
                className="px-3 py-2 w-80 rounded border"
                type="email"
                placeholder="Enter your Email"
              />{" "}
              <br />
              <div className="my-2">Password</div>
              <input
                className="px-3 py-2 w-80 rounded border"
                type="email"
                placeholder="Enter your Password"
              />
            </div>
            <div className="flex align-middle justify-around mt-4 ">
              <button className="btn btn-secondary">SignUp</button>
              <p className="mt-2 ml-2">
                Already have account?{" "}
                <button
                  className="text-blue-500 cursor-pointer underline"
                  onClick={()=>{document.getElementById("my_modal_5").showModal()}}
                >
                  Login
                </button>
                <Login/>
              </p>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
