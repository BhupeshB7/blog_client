import { SignUp } from "@clerk/clerk-react";
import React from "react";

const Registerpage = () => {
  return (
    <div className="flex justify-center items-center h-[(100vh-100px)]">
      <SignUp signInUrl="/login" />
    </div>
  );
};

export default Registerpage;
