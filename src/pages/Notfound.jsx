import React from "react";
import NavPage from "../components/NavPage";

const Notfound = () => {
  return (
    <div className={`bg-green-800 flex flex-col gap-20 p-8 text-3xl h-screen`}>
      <NavPage />
      <h2 className={`text-center`}> Page not found ☹️</h2>
    </div>
  );
};

export default Notfound;
