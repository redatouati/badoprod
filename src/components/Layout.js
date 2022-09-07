import React from "react";
import Header from "./Header"




const Layout = ({ pageTitle, children, pageStyle, context }) => {
    return (
      <div style={pageStyle}>
        <Header context={context}/>
        <main>
          {/*<h1>{pageTitle}</h1>*/}
          {children}
        </main>
      </div>
    )
  }
  export default Layout