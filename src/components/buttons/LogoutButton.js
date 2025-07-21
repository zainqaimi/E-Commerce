import React from "react";
import { useFirebase } from "../context/Firebase";
import { signOut } from "firebase/auth";
function LogoutButton() {
  const firebase = useFirebase();
  return (
    <>
      <button
        className="text-white w-[100px] h-[50px] rounded-md bg-red-600"
        onClick={() => signOut(firebase.auth)}
      >
        signOut
      </button>
    </>
  );
}

export default LogoutButton;
