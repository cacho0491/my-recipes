import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const layout = (props) => {
  return (
    <React.Fragment>
      <Header searchBox={props.searchBox} />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default layout;
