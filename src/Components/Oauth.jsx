import React from "react";
import { FcGoogle } from "react-icons/fc";
function Oauth() {
  return (
    <button className="flex w-full items-center text-center text-white justify-center font-semibold bg-red-500 hover:bg-red-600 px-7 py-3 active:bg-red-700 rounded hover:shadow-lg active:shadow-lg transition duration-200 ease-in-out uppercase text-sm">
      <FcGoogle className="text-2xl bg-white rounded-full mr-2
      " />
      continue with Google
    </button>
  );
}

export default Oauth;
