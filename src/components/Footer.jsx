import React from "react";

const Footer = () => {
  return (
    <footer className={`mt-auto`}>
      <p className={` text-2xl text-white`}>
        &copy; Copyright{new Date().getFullYear()} by Camelia
      </p>
    </footer>
  );
};

export default Footer;
