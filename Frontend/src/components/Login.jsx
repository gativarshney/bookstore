import React from "react";

const Login = () => {
  return (
    <>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Login</h3>
          <div>
            <div className="my-2" >Email</div>
            <input className="px-3 py-2 w-80 rounded border" type="email" placeholder="Enter your Email" /> <br/>
            <div className="my-2" >Password</div>
            <input className="px-3 py-2 w-80 rounded border" type="email" placeholder="Enter your Password" />
          </div>
          <div className="flex align-middle justify-around mt-4 ">
            <button className="btn btn-secondary">Login</button>
            <p className="mt-2" >Not Registered? <span className="text-blue-500 cursor-pointer underline">SignUp</span></p>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Login;
