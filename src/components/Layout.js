import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { layoutStyle } from "../styles/layoutStyle";




const Layout = ({ pageTitle, children, pageStyle, context }) => {
  
    return (
      <div style={layoutStyle}>
        <Header context={context}/>
        <main style={pageStyle}>
          {/*<h1>{pageTitle}</h1>*/}
          {children}
        </main>
        <Footer />
      </div>
    )
}


export default Layout