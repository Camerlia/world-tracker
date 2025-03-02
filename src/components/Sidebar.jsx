import React from "react";
import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import Footer from "./Footer";

export const Sidebar = () => {
  return (
    <div
      className={`${styles.sidebar}flex flex-col items-center basis-[56rem] py-14 px-16 `}
    >
      <Logo />
      <AppNav />
      <p>List</p>
      <Footer />
    </div>
  );
};
