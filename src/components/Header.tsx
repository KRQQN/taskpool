import React from "react";
import Login from "./auth/Login";
import Logout from "./auth/Logout";
import { getServerSession } from "next-auth";

const Header = async () => {
  const session = await getServerSession();;

  return (
    <div className="bg-darkRed flex justify-between min-h-20 shadow-md">
      <h1 className="text-6xl m-3 shadow-sm">TP</h1>
      <div className="flex flex-col-reverse ">
        {!session ? <Login /> : <Logout />}
      </div>
    </div>
  );
};

export default Header;
