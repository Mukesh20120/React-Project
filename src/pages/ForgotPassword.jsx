import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import Oauth from "../Components/Oauth";
export default function SignUp() {
  const [formEmail, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  function updateEmail(e) {
    setEmail(e.target.value)
  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold uppercase">Forget password</h1>
      <div className="flex justify-center flex-wrap px-6 py-12 mx-auto items-center max-w-6xl">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form className="mb-6">
            <input
              className="w-full px-4 py-2 text-xl text-gray-500 bg-white border-grey-300 rounded transition ease-in-out mb-6"
              type="email"
              id="email"
              placeholder="email address"
              value={formEmail}
              onChange={updateEmail}
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p>
                Don't have account?
                <Link
                  to="/signUp"
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out "
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to="/signIn"
                  className="text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out ml-1"
                >
                 Sign In instead
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white text-sm px-7 py-3 font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
            >
              send reset password
            </button>
            <div className="flex my-4 items-center before:border-t before:border-gray-500 before:flex-1 after:border-t after:border-gray-500 after:flex-1">
              <p className=" text-center font-semibold mx-4">OR</p>
            </div>
          </form>
          <Oauth/>
        </div>
      </div>
    </section>
  );
}
