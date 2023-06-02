import React, { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import {FcHome} from 'react-icons/fc'
import { updateDoc,doc } from "firebase/firestore";

export default function Profile() {
  const auth = getAuth();
  const [changeDetails, setChangeDetail] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const navigate = useNavigate();
  const { name, email } = formData;
  function Logout() {
    auth.signOut();
    navigate("/");
  }
  function onchange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
 async function onsubmit() {
    try{
       if(auth.currentUser.displayName !== name){
        await updateProfile(auth.currentUser,{
          displayName: name,
        });
        const docRef = doc(db,"users", auth.currentUser.uid);
        await updateDoc(docRef,{
          name,
        });
      }
      toast.success("profile details updated");
    }catch(error){
      toast.error("could not update try again later");
    }
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
              disabled={!changeDetails}
              onChange={onchange}
              className={`mb-6 px-6 py-4 w-full text-gray-70 bg-white border border-gray-300 rounded transition ease-in-out ${changeDetails && 'bg-red-300 focus:bg-red-300'}`}
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
                <span
                  className=" text-red-600 hover:text-red-700 ml-1 transition ease-in-out duration-200 cursor-pointer"
                  onClick={() => {
                    changeDetails && onsubmit();
                    setChangeDetail((prev) => !prev);
                  }}
                >
                  {changeDetails ? "Apply Changes" : "Edit"}
                </span>
              </p>
              <p
                className="text-blue-600 hover:text-blue-800 transition ease-in-out duration-200 cursor-pointer"
                onClick={Logout}
              >
                Sign-out
              </p>
            </div>
          </form>
          <button type="submit" className="w-full bg-blue-600 text-white uppercase px-7 py-3 text-sm font-medium rounded shadow-sm hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800">
           <Link to={'/create-list'} className="flex justify-center items-center">
            <FcHome className="mr-2 text-3xl bg-red-200 rounded-full p-1 border-2"/>
            sell or rent home
           </Link>
          </button>
        </div>
      </section>
    </>
  );
}
