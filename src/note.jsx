import React from "react";
import Button from "./button";

const Note = ({ title, body, deleteNote, id }) => {
  const trimBody = () => {
    if (body.length > 150) {
      const bodyArr = body.split("");
      const trimmed = bodyArr.splice(bodyArr.length - 150, bodyArr.length - 1);
      return <p> {trimmed.join("")} </p> ;
    }
  };

  const style = {
    backgroundColor: "#888",
  };

  return (
    <div style={style}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7 bg-dark text-light">
            <h3 key={id}>
              {title} {id}
            </h3>
          </div>
          <div className="col-md-5 text-danger bg-dark">
            <p>
              <small>
                last modified {new Date().getFullYear()}-{new Date().getMonth()}
                -{new Date().getDate()}
              </small>
            </p>
          </div>
          <div className="col-md-12">
            <p>{trimBody()}...</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <Button text="view note" id={id} />
        </div>
        <div className="col-3  ml-auto mt-2">
          <button className="btn btn-danger" onClick={() => deleteNote(id)}>
            delete note
          </button>
        </div>
      </div>
    </div>
  );
};

export default Note;
