import { FC, ReactNode } from "react";
import React from 'react'
import Footer from "./Footer";
import Header from "./Header";

type layoutProps = {
  children: ReactNode,
}

const Layout: FC <layoutProps> = ({ children }) => {

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>


  );
}


export default Layout;