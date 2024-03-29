import React from "react";
import { LayoutProps } from "./layout.props";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";


const Layout = ({ children, categories }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header categories={categories}/>
      <div style={{ minHeight: "100vh" }}>{children}</div>
      <Footer/>
    </>
  );
};

export default Layout;
