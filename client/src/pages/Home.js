import React, { Fragment } from "react";
import InputQuestion from "../components/InputQuestion";
import ListQuestions from "../components/ListQuestions";
const Home = () => {
  return (
    <Fragment>
      <div className="container">
        {" "}
        <InputQuestion />
        <ListQuestions />
      </div>
    </Fragment>
  );
};

export default Home;
