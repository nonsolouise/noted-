import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, id }) => {

  const style = {
    color: 'white',
    textDecoation: 'none'
  }
  return (
    <button className="btn btn-danger m-2">
      <Link to={`/note/${id}`} style={ style }>{ text }</Link>
    </button>
  );
};

export default Button;
