import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router";

export default function Profile() {
  const auth = getAuth();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const navigate = useNavigate();
  const { name, email } = formData;
  function Logout(){
     auth.signOut();
     navigate("/");
  }
  return (
    <>
      <section className="max-w-6xl flex justify-center items-center flex-col mx-auto">
        <h1 className="text-3xl font-bold mt-6 text-center">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            {/* input name */}
            <input
              type="text"
              id="name"
              value={name}
              disabled
              className="mb-6 px-6 py-4 w-full text-gray-70 bg-white border border-gray-300 rounded transition ease-in-out"
            />
            {/* input email */}
            <input
              type="text"
              id="email"
              value={email}
              disabled
              className="mb-6 px-6 py-4 w-full text-gray-70 bg-white border border-gray-300 rounded transition ease-in-out"
            />
            <div className="flex justify-between mb-6 whitespace-nowrap sm:text-lg">
              <p>
                Do you want to change your name?{" "}
                <span className=" text-red-600 hover:text-red-700 ml-1 transition ease-in-out duration-200 cursor-pointer">
                  Edit
                </span>
              </p>
              <p className="text-blue-600 hover:text-blue-800 transition ease-in-out duration-200 cursor-pointer" onClick={Logout}>
                Sign-out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
