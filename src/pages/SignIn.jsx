import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Oauth from "../Components/Oauth";
import { toast } from "react-toastify";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { email, password } = formData;
  function updateEmail(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  async function onSubmit(e){
    e.preventDefault();
    try {
      const auth = getAuth();
      const credential = await signInWithEmailAndPassword(auth,email,password);
      if(credential.user){
          navigate("/"); 
      }
    } catch (error) {
      toast.error("Wrong credentials")
    }
  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold uppercase">Sign In</h1>
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
              value={email}
              onChange={updateEmail}
            />
            <div className="relative mb-6">
              <input
                className="w-full px-4 py-2 text-xl text-gray-500 bg-white border-grey-300 rounded transition ease-in-out"
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="password"
                value={password}
                onChange={updateEmail}
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-3 top-3 text-lg cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  className="absolute right-3 top-3 text-lg cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
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
                  to="/forgotPassword"
                  className="text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out ml-1"
                >
                  Forget-password?
                </Link>
              </p>
            </div>
            <button
              type="submit"
              onClick={onSubmit}
              className="w-full bg-blue-600 text-white text-sm px-7 py-3 font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
            >
              Sign In
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
