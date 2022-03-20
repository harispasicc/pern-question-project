import React, { Fragment, useEffect, useState } from "react";
import EditQuestion from "./EditQuestion";
import Button from "react-bootstrap/Button";
import "./ListQuestions.css";
import Footer from "../layout/Footer";

const ListQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [noOfElement, setNoOfElement] = useState(20);

  const loadMore = () => {
    setNoOfElement(noOfElement + noOfElement);
  };
  const slice = questions.slice(0, noOfElement);

  //delete question function

  const deleteQuestion = async id => {
    try {
      const deleteQuestion = await fetch(
        `http://localhost:5000/questions/${id}`,
        {
          method: "DELETE",
        }
      );
      setQuestions(questions.filter(question => question.question_id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  const getQuestions = async () => {
    try {
      const response = await fetch("http://localhost:5000/questions");
      const jsonData = await response.json();

      setQuestions(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  console.log(questions);
  return (
    <div className="container ">
      <div className="row ">
        <div className="col-md-7">
          {slice.map(question => (
            <div className="media g-mb-30 media-comment">
              <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                <div className="comment">
                  <div className="g-mb-15">
                    <h5 className="h5 g-color-gray-dark-v1 mb-0">
                      user@email.com
                    </h5>
                  </div>
                  <p key={question.question_id} />
                  <p>{question.description}</p>
                  <ul className="list-inline d-sm-flex my-0">
                    <li className="list-inline-item g-mr-20">
                      <a
                        className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover text-decoration-none"
                        href="#!"
                      >
                        <i className="fa fa-thumbs-up g-pos-rel g-top-1 g-mr-3 "></i>
                        178
                      </a>
                    </li>
                    <li className="list-inline-item g-mr-20">
                      <a
                        className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover text-decoration-none"
                        href="#!"
                      >
                        <i className="fa fa-thumbs-down g-pos-rel g-top-1 g-mr-3 "></i>
                        34
                      </a>
                    </li>
                    <EditQuestion question={question} />
                    <button
                      className="btn btn-danger ml-2"
                      onClick={() => deleteQuestion(question.question_id)}
                    >
                      Delete
                    </button>{" "}
                    <li className="list-inline-item ml-auto">
                      <a
                        className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover text-decoration-none"
                        href="#!"
                      >
                        <i className="fa fa-reply g-pos-rel g-top-1 g-mr-3 "></i>
                        Reply
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>{" "}
        <button
          className="btn btn-dark d-block w-100"
          onClick={() => loadMore()}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default ListQuestions;
