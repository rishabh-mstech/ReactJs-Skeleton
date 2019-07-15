import React from "react";
import { connect } from "react-redux";

const PageNotFound: React.FC = () => {
  return <h1>Oops Page Not Found !</h1>;
};

export default connect()(PageNotFound);
