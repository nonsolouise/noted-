import React from "react";
import { NavLink } from "react-router-dom";
import Footer from './footer';
import BackButton from './backButton';

const NewNote = ({ cb }) => {
  const [newNoteTitle, setNewNoteTitle] = React.useState("");
  const [newNoteBody, setNewNoteBody] = React.useState("");

  const handleTitleInput = (event) => {
    setNewNoteTitle(event.target.value);
  };

  const HanldeNoteBody = (event) => {
    setNewNoteBody(event.target.value);
  };

  const checkForm = (newNoteTitle, newNoteBody) => {
    if (newNoteTitle !== "" && newNoteBody !== "") {
      cb(newNoteTitle, newNoteBody);
    }
  };

  const body = {
    marginTop: "5px",
    height: "18rem",
  };

  const spaceOut = {
    marginTop: '0.1rem'
  }
  
  return (
    <>
      <div className="jumbotron text-danger text-center">
        <div className="row">
          <div className="col-md-5">
            <h1 className="text-center"> NOTED.</h1>
          </div>
          <div className='col-md-3 ml-auto mt-2'>
            <BackButton />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="form" style={ spaceOut }>
              <input
                type="text"
                class="form-control"
                placeholder=" title..."
                value={newNoteTitle}
                onChange={handleTitleInput}
              />
              <textarea
                type="text"
                class="form-control"
                placeholder="body..."
                style={body}
                value={newNoteBody}
                onChange={HanldeNoteBody}
              />
            </div>
          </div>
          <div className="col-md-1 mt-2 ml-auto">
            <NavLink to="/">
              <button
                className="btn btn-warning"
                onClick={() => checkForm(newNoteTitle, newNoteBody)}
              >
                Done
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewNote;
