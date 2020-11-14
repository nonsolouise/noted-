import React from "react";
import { NavLink } from "react-router-dom";

import Note from "./note";
import Footer from "./footer";

const Home = (props) => {
  const style = {
    margin: "5px",
  };

  const noteStyle = {
    cursor: "pointer",
  };

  const dark = {
    color: "#777",
  };
  return (
    <>
      <div className="jumbotron text-danger" style={dark}>
        <div className="row">
          <div className="col-md-6">
            <h1> NOTED.</h1>
          </div>
          <div className="col-md-2 ml-auto">
            <h6 className="text-primary" style={noteStyle}>
              <NavLink to="/new-note">+ create new note</NavLink>
            </h6>
          </div>
        </div>
      </div>
      <div className="container mt-3 p-2">
        <div className="row">
          {props.notes.map((note) => (
            <div className="col-md-6 mt-2 p-1 mx-auto" style={style}>
              <div className="col-md-12">
                <Note
                  title={note.title}
                  body={note.body}
                  id={note.id}
                  deleteNote={props.deleteNote}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
