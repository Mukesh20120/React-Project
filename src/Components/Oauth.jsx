import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { db } from "../firebase";
import { getDoc, serverTimestamp, setDoc } from "firebase/firestore";

function Oauth() {
  const navigate = useNavigate();
  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("test");

      //check in database
      const docRef = (db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("something went wrong");
    }
  }
  return (
    <button
      type="button"
      onClick={onGoogleClick}
      className="flex w-full items-center text-center text-white justify-center font-semibold bg-red-500 hover:bg-red-600 px-7 py-3 active:bg-red-700 rounded hover:shadow-lg active:shadow-lg transition duration-200 ease-in-out uppercase text-sm"
    >
      <FcGoogle
        className="text-2xl bg-white rounded-full mr-2
      "
      />
      continue with Google
    </button>
  );
}

export default Oauth;
