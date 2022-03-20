import React, { Fragment, useState } from "react";

const EditQuestion = ({ question }) => {
  const [description, setDescription] = useState(question.description);

  //edit description function

  const updateDescription = async e => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/questions/${question.question_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${question.question_id}`}
      >
        Edit
      </button>
      <div
        className="modal"
        id={`id${question.question_id}`}
        onClick={() => setDescription(question.description)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Question</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setDescription(question.description)}
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateDescription(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription(question.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditQuestion;
